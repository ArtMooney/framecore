const API_BASE = "https://api.torbox.app/v1/api";

const CATEGORIES = {
  torrents: "torrents/mylist",
  usenet: "usenet/mylist",
  webdl: "webdl/mylist",
};

async function getMyList(endpoint, headers) {
  const data = await $fetch(`${API_BASE}/${endpoint}`, { headers });

  return Array.isArray(data?.data) ? data.data : [];
}

function buildRequestDlParams(category, itemId, fileId, token) {
  if (category === "torrents") {
    const params = { token, torrent_id: itemId };
    if (fileId != null) params.file_id = fileId;
    return { url: `${API_BASE}/torrents/requestdl`, params };
  }

  if (category === "usenet") {
    return {
      url: `${API_BASE}/usenet/requestdl`,
      params: { token, usenet_id: itemId },
    };
  }

  return { url: `${API_BASE}/webdl/requestdl`, params: { token, web_id: itemId } };
}

async function requestDownloadLink(category, itemId, headers, fileId, token) {
  const { url, params } = buildRequestDlParams(category, itemId, fileId, token);
  const data = await $fetch(url, { headers, params });

  return data?.data;
}

async function partialDownload(downloadUrl, bytes = 4096) {
  const res = await fetch(downloadUrl, {
    headers: { Range: `bytes=0-${bytes - 1}` },
  });

  if (!res.ok && res.status !== 206) throw new Error(`HTTP ${res.status}`);

  const buffer = await res.arrayBuffer();

  return buffer.byteLength;
}

export default defineTask({
  meta: {
    name: "keep-files-alive",
    description:
      "Keeps Torbox files alive by requesting a partial download of each item",
  },

  async run() {
    const config = useRuntimeConfig();
    const apiToken = config.torboxApiKey;

    if (!apiToken) {
      console.error("❌ TORBOX_API_KEY missing from runtimeConfig");
      return { result: "failed", reason: "missing API key" };
    }

    const headers = {
      Authorization: `Bearer ${apiToken}`,
      "User-Agent": "Torbox-KeepAlive/1.0",
    };

    console.log(
      `[${new Date().toISOString()}] 🚀 Torbox Keep-Alive (partial download) starting...`,
    );

    let totalReset = 0;

    for (const [category, listEndpoint] of Object.entries(CATEGORIES)) {
      console.log(`\n📂 Processing ${category.toUpperCase()}...`);

      let items;
      try {
        items = await getMyList(listEndpoint, headers);
      } catch (err) {
        console.error(`❌ Failed to list ${category}: ${err.message}`);
        continue;
      }

      if (!items.length) {
        console.log(`   (no items)`);
        continue;
      }

      for (const item of items) {
        const itemId =
          item.id ?? item.torrent_id ?? item.usenet_id ?? item.web_id;
        if (!itemId) continue;

        // Pick the smallest file to minimize bandwidth
        const files = item.files ?? [];
        let fileId = null;
        let fileName = "entire package";

        if (files.length) {
          const smallest = files.reduce((a, b) =>
            (a.size ?? Infinity) < (b.size ?? Infinity) ? a : b,
          );
          fileId = smallest.id;
          fileName = smallest.name ?? "unknown";
        }

        try {
          const dlData = await requestDownloadLink(
            category,
            itemId,
            headers,
            fileId,
            apiToken,
          );
          const downloadUrl = dlData?.download_url ?? dlData?.url ?? dlData;

          if (
            typeof downloadUrl === "string" &&
            downloadUrl.startsWith("http")
          ) {
            const downloaded = await partialDownload(downloadUrl);
            console.log(
              `✅ ${category} ${itemId} → ${fileName.slice(0, 40).padEnd(40)} (${downloaded} bytes downloaded)`,
            );
            totalReset++;
          } else {
            console.warn(
              `⚠️  ${category} ${itemId} → no download URL returned`,
            );
          }
        } catch (err) {
          const detail = err?.data?.detail || err?.data?.error || err?.message || err;
          console.error(`❌ ${category} ${itemId} → ${detail}`);
        }
      }
    }

    console.log(
      `\n🎉 Done! ${totalReset} file(s) had their 30-day timer reset.\n`,
    );

    return { result: totalReset > 0 ? "success" : "failed", totalReset };
  },
});
