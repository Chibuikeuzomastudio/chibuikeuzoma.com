const Arena = require("are.na");
const { AssetCache } = require("@11ty/eleventy-cache-assets");
const arena = new Arena();

const groupBy = keys => array =>
    array.reduce((arrayValue, val)=>{
        const value =  keys.map(key => val[key]).join('-');
        const objIndex = arrayValue.findIndex(el => el[value])
        if (objIndex === -1) {
            let newObj = {}
            newObj[value] = (newObj[value] || []).concat(val)
            arrayValue.push(newObj)
        }else {
            arrayValue[objIndex][value] = (arrayValue[objIndex][value] || []).concat(val)
        }
        return arrayValue
    },[])

const exhibitions = async () => {
  try {
    return arena
      .channel("chib-ike-z-ma-exhibitions")
      .get({ page: 1, per: 100 })
      .then((chan) => {
        return groupBy(['title'])(chan.contents) ;
      });
  } catch (e) {
    console.log({ error: e.message });
  }
};

module.exports = async () => {
  let asset = new AssetCache("exhibitions");
  if (asset.isCacheValid("1d")) {
      return asset.getCachedValue();
  }
  let exhibit = await exhibitions();
  await asset.save(exhibit, "json");
  return exhibit;
};
