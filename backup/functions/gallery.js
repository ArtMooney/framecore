import { checkLogin } from "./middleware/check-login.js";
import { saveThumbs } from "./utility/save-thumbs.js";
import { deleteOldThumbs } from "./utility/delete-old-thumbs.js";
import { deleteFile } from "./utility/delete-file.js";
import { isChangedFolders } from "./utility/is-changed-folders.js";
import { uploadProcessFile } from "./utility/upload-process-file.js";
import { listFolder } from "./utility/list-folder.js";

export const onRequestGet = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Max-Age": "86400",
  };

  const url = new URL(context.request.url);
  const env = await context.env;

  if (!(await checkLogin(context.request.headers, env.USERNAME, env.USERPASS)))
    return new Response(JSON.stringify({ error: "Login failed" }), {
      headers: corsHeaders,
    });

  const generateGallery = await isChangedFolders(
    env.PCLOUD_TOKEN,
    env.CONTAINER_FOLDER_ID,
  );

  if (generateGallery.changed) {
    const processFile = await uploadProcessFile(
      env.PCLOUD_TOKEN,
      env.CONTAINER_FOLDER_ID,
    );

    await deleteOldThumbs(env.PCLOUD_TOKEN, env.THUMBS_FOLDER_ID);
    await saveThumbs(
      env.PCLOUD_TOKEN,
      env.GALLERY_FOLDER_ID,
      env.THUMBS_FOLDER_ID,
    );
    await deleteFile(env.PCLOUD_TOKEN, processFile.fileid);
  }

  const gallery = await listFolder(env.PCLOUD_TOKEN, env.GALLERY_FOLDER_ID);
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
