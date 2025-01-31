export async function refreshTokenFortnox(auth, refreshToken) {
  const headersList = {
    Accept: "*/*",
    Authorization: `Basic ${auth}`,
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const urlencoded = new URLSearchParams();
  urlencoded.append("grant_type", "refresh_token");
  urlencoded.append("refresh_token", refreshToken);

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

      return JSON.parse(await response.text());
    } catch (error) {
      if (attempt === maxRetries) {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }
}
