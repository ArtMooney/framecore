export const onRequestPost = async (context) => {
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,HEAD,POST,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type,Authorization",
    "Access-Control-Max-Age": "86400",
  };

  const url = new URL(context.request.url);
  const env = await context.env;
  // const body = await context.request.json(); // when using only a json body
  const formData = await context.request.formData(); // when using formdata instead of json body
  const formDataJson = {};
  formData.forEach((value, key) => {
    formDataJson[key] = value;
  });

  if ([...formData.entries()].length === 0) {
    return new Response(JSON.stringify("Error"), { headers: corsHeaders });
  }

  if (!(await checkLogin(context.request.headers, env.userName, env.userPass)))
    return new Response(JSON.stringify({ error: "Login failed" }), {
      headers: corsHeaders,
    });

  // to FrameCore
  await sendEmail(
    env.from,
    env.to,
    "Kontakt via hemsidan",
    JSON.stringify(formDataJson, null, 2),
    env.mailgunApiKey,
  );

  // to Contact
  await sendEmail(
    env.to,
    formDataJson.email,
    "Tack för att ni kontaktat FrameCore!",
    await getWelcomeMessage(formDataJson.firstname),
    env.mailgunApiKey,
  );

  return new Response(JSON.stringify("ok"), { headers: corsHeaders });
};

async function sendEmail(from, to, subject, message, apiKey) {
  let headersList = {
    Accept: "*/*",
    Authorization: "Basic " + btoa("api" + ":" + apiKey),
  };

  let bodyContent = new FormData();
  bodyContent.append("from", from);
  bodyContent.append("to", to);
  bodyContent.append("subject", subject);
  bodyContent.append("text", message);

  let response = await fetch(
    "https://api.eu.mailgun.net/v3/mg.framecore.se/messages",
    {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    },
  );

  return await response.text();
}

async function checkLogin(headers, userName, userPass) {
  const authHeader = headers.get("Authorization");
  const decodedString = atob(authHeader.replace("Basic ", ""));
  const [email, password] = decodedString.split(":");

  return userName === email && userPass === password;
}

async function getWelcomeMessage(firstname) {
  return `Hej ${firstname}!

Tack för ert intresse av FrameCore och vårt hantverk!  Vi ber att få återkomma till er så snart vi kan.


Vänliga hälsningar,


/ Henrik Skoglund
www.framecore.se
`;
}
