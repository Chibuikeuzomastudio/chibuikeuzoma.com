const Arena = require("are.na");
const { AssetCache } = require("@11ty/eleventy-cache-assets");
const arena = new Arena();
const images = async () => {
  try {
    return arena
        .channel("chib-ike-z-ma")
        .get({ page: 1, per: 100 })
        .then((chan) => {
          const data = [];
          chan.contents.map((item) => {
            let res = {};
            if (item.class === "Image" && item.title === "artwork") {
              // console.log({ i: item.title, d: item.description });
              res.title = item.description;
              res.image = {
                large: item.image.original.url,
              };
              data.push(res);
            }
          });
          return data;
        });
  } catch (e) {
    console.log({ error: e.message });
  }
};

module.exports = async () => {
  let asset = new AssetCache("artworks");
  if (asset.isCacheValid("1d")) {
    return asset.getCachedValue();
  }
  let artworks = await images();
  await asset.save(artworks, "json");
  return artworks;
};
