import { corsHeaders, handleCors } from "./middleware/cors.js";
import { checkLogin } from "./middleware/check-login.js";
import { validateFortnoxToken } from "./fortnox/validate-fortnox-token.js";
import { getRow } from "./baserow/get-row.js";

export const onRequestPost = async ({ request, env, ctx }) => {
  const corsResponse = await handleCors(request, env);
  if (corsResponse) return corsResponse;

  const url = new URL(request.url);

  if (!(await checkLogin(request.headers, env.USERNAME, env.USERPASS)))
    return new Response(JSON.stringify({ error: "Login failed" }), {
      headers: corsHeaders,
    });

  const accessToken = await getRow(
    env.AVNORDIC_BASEROW_BACKEND_TOKEN,
    env.AVNORDIC_ACCESS_TOKEN_TABLE_ID,
    1,
  );

  if (!accessToken) {
    return new Response(
      JSON.stringify({
        error: "error",
      }),
      { status: 400, headers: corsHeaders },
    );
  }

  const isValid = await validateFortnoxToken(
    accessToken.access_token,
    env.FORTNOX_AUTH,
  );

  if (isValid) {
    console.log("Token är giltig");
  } else {
    console.log("Token är ogiltig eller har gått ut");
  }

  return new Response(JSON.stringify({ status: isValid }), {
    headers: corsHeaders,
  });
};
