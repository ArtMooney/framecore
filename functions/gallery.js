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

  if (!(await isChangedFolders(env.pcloudtoken, containerFolderId))) {
    await deleteOldThumbs(env.pcloudtoken, thumbsFolderId);
    await saveThumbs(env.pcloudtoken, galleryFolderId, thumbsFolderId);
  }

  const gallery = await listFolder(env.pcloudtoken, thumbsFolderId);
  const output = [];

  for (const item of gallery) {
    output.push({
      fileid: item.fileid,
      name: item.name,
      contenttype: item.contenttype,
    });
  }

  // return new Response(JSON.stringify(output), {
  //   headers: corsHeaders,
  // });

  return new Response(JSON.stringify(output));
};

async function saveThumbs(pcloudToken, galleryFolderId, thumbsFolderId) {
  let gallery = await listFolder(pcloudToken, galleryFolderId);

  for (const image of gallery) {
    let response = await fetch(
      `https://api.pcloud.com/savethumb?fileid=${image.fileid}&tofolderid=${thumbsFolderId}&toname=${image.name}&size=500x700`,
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

  try {
    let response = await fetch(
      `https://api.pcloud.com/deletefile?fileid=${fileid}`,
      {
        method: "GET",
        headers: headersList,
      },
    );

    if (response.ok) {
      return "ok";
    } else {
      throw new Error("Failed to delete file");
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
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

  return status;
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
