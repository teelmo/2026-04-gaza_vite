export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const fetchWithRetry = async (url, retries = 5, baseDelay = 2000) => {
  for (let attempt = 0; attempt <= retries; attempt++) {
    const response = await fetch(url);
    if (response.ok) return response;
    if (response.status === 429 && attempt < retries) {
      const delay = baseDelay * 2 ** attempt;
      console.log(`Rate limited, retrying in ${delay}ms...`);
      await sleep(delay);
      continue;
    }
    throw new Error(`HTTP ${response.status} for ${url}`);
  }
};

export const fetchImageData = async (publicId) => {
  const response = await fetchWithRetry(
    `https://images.api.yle.fi/v1/presentation_data/${publicId}.json?legacyMode=false&app_id=HIEKKALAATIKKO&app_key=HIEKKALAATIKKO`
  );
  const json = await response.json();
  return {
    blurhash: json.additional_properties[0].blurhash,
  };
};
