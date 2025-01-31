import { corsHeaders, handleCors } from "./middleware/cors.js";
import { checkLogin } from "./middleware/check-login.js";
import { updateRow } from "./baserow/update-row.js";
import { getTokenFortnox } from "./fortnox/get-token-fortnox.js";

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

  if (!code || state !== "somestate123" || !redirect_uri) {
    return new Response(
      JSON.stringify({
        error: "Missing required parameters",
      }),
      { status: 400, headers: corsHeaders },
    );
  }

  const accessToken = await getTokenFortnox(
    env.FORTNOX_AUTH,
    code,
    redirect_uri,
  );

  if (!accessToken) {
    return new Response(
      JSON.stringify({
        error: "Missing required parameters",
      }),
      { status: 400, headers: corsHeaders },
    );
  }

  const saveAccessToken = await updateRow(
    env.AVNORDIC_BASEROW_BACKEND_TOKEN,
    env.AVNORDIC_ACCESS_TOKEN_TABLE_ID,
    1,
    {
      access_token: accessToken.access_token,
      expires_in: accessToken.expires_in,
      token_type: accessToken.token_type,
      scope: accessToken.scope,
      refresh_token: accessToken.refresh_token,
    },
  );

  return new Response(JSON.stringify({ status: "ok" }), {
    headers: corsHeaders,
  });
};
