import { defineEventHandler, deleteCookie, getCookie } from "nuxt/server";

export default defineEventHandler((event) => {
  // The previous site's loginStore cookie contained administrator credentials.
  if (getCookie(event, "loginStore") !== undefined) {
    deleteCookie(event, "loginStore", { path: "/" });
  }
});
