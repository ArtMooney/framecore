export async function getTokenFortnox(auth, code, redirectUri) {
  const headersList = {
    Accept: "*/*",
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "authorization_code");
  urlencoded.append("code", code);
  urlencoded.append("access_type", "offline");
  urlencoded.append("redirect_uri", redirectUri);

  const maxRetries = 3;
  const retryDelay = 3000;

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      let response = await fetch(`https://apps.fortnox.se/oauth-v1/token`, {
        method: "POST",
        body: urlencoded,
        headers: headersList,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.text();
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }
}
