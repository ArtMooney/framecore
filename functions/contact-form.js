import { checkLogin } from "./middleware/check-login.js";
import { getWelcomeMessage } from "./content/get-welcome-message.js";
import { sendEmail } from "./utility/send-email.js";

export const onRequestPost = async (context) => {
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

  // const body = await context.request.json(); // when using only a json body
  const formData = await context.request.formData(); // when using formdata instead of json body
  const formDataJson = {};
  formData.forEach((value, key) => {
    formDataJson[key] = value;
  });

  if ([...formData.entries()].length === 0) {
    return new Response(JSON.stringify("Error"), { headers: corsHeaders });
  }

  // to FrameCore
  await sendEmail(
    env.EMAIL_FROM,
    env.EMAIL_TO,
    "Kontakt via hemsidan",
    JSON.stringify(formDataJson, null, 2),
    env.MAILGUN_API_KEY,
  );

  // to Contact
  await sendEmail(
    env.EMAIL_TO,
    formDataJson.email,
    "Tack för att ni kontaktat FrameCore!",
    await getWelcomeMessage(formDataJson.firstname),
    env.MAILGUN_API_KEY,
  );

  return new Response(JSON.stringify("ok"), { headers: corsHeaders });
};
