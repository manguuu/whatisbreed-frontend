const API_URL = "http://127.0.0.1:5173/api/";
const pred = [];
// let msg = "";

export const getData = (filename) => {
  let ret = "";
  fetch(API_URL + "/" + filename)
    .then((res) => res.json())
    .then((data) => {
      for (const [k, v] of Object.entries(data.pred)) {
        pred.push({ breed: k, prob: v });
      }
      pred.sort((a, b) => {
        if (a.prob > b.prob) return -1;
        return 1;
      });
      ret = pred[0].breed;
      console.log(ret);
    });
    return ret;
};
