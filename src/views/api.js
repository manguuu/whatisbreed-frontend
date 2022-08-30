const API_URL = "http://127.0.0.1:5173/api/";
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
