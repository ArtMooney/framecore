export const onRequestGet = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Max-Age": "86400",
  };

  const url = new URL(context.request.url);
  const env = await context.env;
  // const containerFolderId = 14445112342;
  const containerFolderId = 21107113433;
  const galleryFolderId = 21107115036;
  const thumbsFolderId = 21107114995;

  // if (!(await checkLogin(context.request.headers, env.userName, env.userPass)))
  //   return new Response(JSON.stringify({ error: "Login failed" }), {
  //     headers: corsHeaders,
  //   });

  const generateGallery = await isChangedFolders(
    env.pcloudtoken,
    containerFolderId,
  );

  if (generateGallery.changed) {
    const processFile = await uploadProcessFile(
      env.pcloudtoken,
      containerFolderId,
    );

    await deleteOldThumbs(env.pcloudtoken, thumbsFolderId, processFile.fileid);
    await saveThumbs(env.pcloudtoken, galleryFolderId, thumbsFolderId);
    await deleteFile(env.pcloudtoken, processFile.fileid);
  }

  const gallery = await listFolder(env.pcloudtoken, galleryFolderId);
  const output = [];

  for (const item of gallery) {
    output.push({
      fileid: item.fileid,
      name: item.name,
      contenttype: item.contenttype,
      thumbname: item.name.substring(0, item.name.lastIndexOf(".")) + ".jpg",
    });
  }

  return new Response(JSON.stringify(output));
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

async function deleteOldThumbs(pcloudToken, thumbsFolderId, doNotDeleteFileId) {
  let thumbs = await listFolder(pcloudToken, thumbsFolderId);

  for (const thumb of thumbs) {
    if (thumb.fileid !== doNotDeleteFileId) {
      await deleteFile(pcloudToken, thumb.fileid);
    }
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

async function checkLogin(headers, userName, userPass) {
  const authHeader = headers.get("Authorization");
  const decodedString = atob(authHeader.replace("Basic ", ""));
  const [email, password] = decodedString.split(":");

  return userName === email && userPass === password;
}
