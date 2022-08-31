export const API_URL = "http://127.0.0.1:8000/";

export const getPred = async (filename) => {
  let res = await fetch(API_URL + "predict/" + filename);
  res = await res.json();
  const pred = [];
  for (const [k, v] of Object.entries(await res.pred)) {
    pred.push({ breed: k, prob: v });
  }
  return pred;
};

export const postFile = async (form_data) => {
  const response = await fetch(API_URL + "files/", {
    method: "POST",
    body: form_data,
  });
  return response;
};
