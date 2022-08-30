const Arena = require("are.na");
const { AssetCache } = require("@11ty/eleventy-cache-assets");
const arena = new Arena();
const content = async () => {
  try {
    return arena
      .channel("chib-ike-z-ma")
      .get()
      .then((chan) => {
        const data = {};
        chan.contents.map((item) => {
          if (item.class === "Text") {
            data[item.title] = {
              data: item.content_html,
            };
          }
        });
        return data;
      });
  } catch (e) {
    console.log({ error: e.message });
  }
};

module.exports = async function () {
  let asset = new AssetCache("content");
  if (asset.isCacheValid("1d")) {
    return asset.getCachedValue();
  }
  let data = await content();
  asset.save(data, "json");
  return data;
};
