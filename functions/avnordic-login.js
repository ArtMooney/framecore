import { corsHeaders, handleCors } from "./middleware/cors.js";
import { checkLogin } from "./middleware/check-login.js";
import { updateRow } from "./baserow/update-row.js";

export const onRequestPost = async ({ request, env, ctx }) => {
  const corsResponse = await handleCors(request, env);
  if (corsResponse) return corsResponse;

  const url = new URL(request.url);

  if (!(await checkLogin(request.headers, env.USERNAME, env.USERPASS)))
    return new Response(JSON.stringify({ error: "Login failed" }), {
      headers: corsHeaders,
    });

  const body = await request.json();

  if (!body?.payload) {
    return new Response(JSON.stringify({ error: "Error" }), {
      headers: corsHeaders,
    });
  }

  const code = body.payload.split("&state")[0].split("=")[1];
  const state = body.payload.split("&state=")[1].split("&")[0];
  const redirect_uri = body.payload.split("&redirect_uri=")[1];

  if (!code || !state || !redirect_uri) {
    return new Response(JSON.stringify({ error: "Error" }), {
      headers: corsHeaders,
    });
  }

  const saveCode = await updateRow(
    env.AVNORDIC_BASEROW_BACKEND_TOKEN,
    env.AVNORDIC_TABLE_CODE,
    1,
    { code, state, redirect_uri },
  );

  return new Response(JSON.stringify({ saveCode }), {
    headers: corsHeaders,
  });
};
