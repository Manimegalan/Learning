function flattenObject(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
}

const unflattenObject = (obj) =>
  Object.keys(obj).reduce((res, k) => {
    console.log(k)
    k.split(".").reduce((acc, e, i, keys) => {
      const val =
        acc[e] ||
        (acc[e] = isNaN(Number(keys[i + 1]))
          ? keys.length - 1 === i
            ? obj[k]
            : {}
          : []);
      return val;
    }, res);
    return res;
  }, {});
