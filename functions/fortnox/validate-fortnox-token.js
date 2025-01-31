export async function validateFortnoxToken(accessToken) {
  try {
    const response = await fetch("https://api.fortnox.se/3/settings/company", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    return true;
  } catch (error) {
    return false;
  }
}
