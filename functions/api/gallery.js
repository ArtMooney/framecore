import { checkLogin } from "../middleware/check-login.js";

export const onRequestGet = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Max-Age": "86400",
  };

  const url = new URL(context.request.url);
  const env = await context.env;

  if (!(await checkLogin(context.request.headers, env.userName, env.userPass)))
    return new Response(JSON.stringify({ error: "Login failed" }), {
      headers: corsHeaders,
    });

  const containerFolderId = env.containerFolderId;
  const galleryFolderId = env.galleryFolderId;
  const thumbsFolderId = env.thumbsFolderId;

  const generateGallery = await isChangedFolders(
    env.pcloudToken,
    containerFolderId,
  );

  if (generateGallery.changed) {
    const processFile = await uploadProcessFile(
      env.pcloudToken,
      containerFolderId,
    );

    await deleteOldThumbs(env.pcloudToken, thumbsFolderId);
    await saveThumbs(env.pcloudToken, galleryFolderId, thumbsFolderId);
    await deleteFile(env.pcloudToken, processFile.fileid);
  }

  const gallery = await listFolder(env.pcloudToken, galleryFolderId);
  const output = [];

  for (const item of gallery) {
    output.push({
      fileid: item.fileid,
      name: item.name,
      contenttype: item.contenttype,
      thumbname: item.name.substring(0, item.name.lastIndexOf(".")) + ".jpg",
    });
  }

  return new Response(JSON.stringify(output, null, 2));
};

async function saveThumbs(pcloudToken, galleryFolderId, thumbsFolderId) {
  let gallery = await listFolder(pcloudToken, galleryFolderId);

  for (const image of gallery) {
    let response = await fetch(
      `https://api.pcloud.com/savethumb?fileid=${image.fileid}&tofolderid=${thumbsFolderId}&toname=${image.name.substring(0, image.name.lastIndexOf("."))}.jpg&size=500x700`,
      {
        method: "GET",
        headers: {
          Accept: "*/*",
          Authorization: "Bearer " + pcloudToken,
        },
      },
    );
  }

  return "ok";
}

async function deleteOldThumbs(pcloudToken, thumbsFolderId) {
  let thumbs = await listFolder(pcloudToken, thumbsFolderId);

  for (const thumb of thumbs) {
    await deleteFile(pcloudToken, thumb.fileid);
  }

  return "ok";
}

async function deleteFile(pcloudToken, fileid) {
  let headersList = {
    Accept: "*/*",
    Authorization: "Bearer " + pcloudToken,
  };

  let response = await fetch(
    `https://api.pcloud.com/deletefile?fileid=${fileid}`,
    {
      method: "GET",
      headers: headersList,
    },
  );

  return JSON.parse(await response.text());
}

async function isChangedFolders(pcloudToken, containerFolderId) {
  const list = await listFolder(pcloudToken, containerFolderId);
  const status = {};

  for (const item of list) {
    if (item.name === "gallery") {
      status.gallery = item.modified;
    }

    if (item.name === "thumbs") {
      status.thumbs = item.modified;
    }
  }

  new Date(status.gallery) > new Date(status.thumbs)
    ? (status.changed = true)
    : (status.changed = false);

  if (status.changed) {
    for (const item of list) {
      if (item.name === "processing.txt") {
        status.changed = false;
      }
    }
  }

  return status;
}

async function uploadProcessFile(pcloudToken, folderId) {
  let headersList = {
    Accept: "*/*",
    Authorization: "Bearer " + pcloudToken,
  };

  const textContent = "processing";
  const blob = new Blob([textContent], { type: "text/plain" });
  const formData = new FormData();
  formData.append("file", blob, "processing.txt");

  let response = await fetch(
    `https://api.pcloud.com/uploadfile?folderid=${folderId}`,
    {
      method: "POST",
      headers: headersList,
      body: formData,
    },
  );

  let result = JSON.parse(await response.text());
  result = result.metadata;

  return result[0];
}

async function listFolder(pcloudToken, folderId) {
  let headersList = {
    Accept: "*/*",
    Authorization: "Bearer " + pcloudToken,
  };

  let response = await fetch(
    `https://api.pcloud.com/listfolder?folderid=${folderId}`,
    {
      method: "GET",
      headers: headersList,
    },
  );

  let list = JSON.parse(await response.text());
  list = list.metadata.contents;
  list = list.filter((obj) => obj.name !== ".DS_Store");

  return list;
}
