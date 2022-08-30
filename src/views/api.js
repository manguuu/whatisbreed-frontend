const API_URL = "http://whatisbreed:80/";
// let msg = "";

export const getPred = async (filename) => {
  let res = await fetch(API_URL + "/" + filename);
  res = await res.json();
  const pred = [];
  for (const [k, v] of Object.entries(await res.pred)) {
    pred.push({ breed: k, prob: v });
  }
  return pred;
};
