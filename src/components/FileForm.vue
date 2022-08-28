<script setup>
defineProps({
  msg: {
    type: String,
    required: false,
  },
});
</script>

<template>
  <div class="fileform">
    <label for="file"> {{ msg }} </label>
    <input type="file" id="file" @change="handleFileChange" />
  </div>
</template>

<script>
const API_URL = "http://127.0.0.1:5173/api/";

export default {
  methods: {
    async handleFileChange(e) {
      const file = e.currentTarget.files[0];
      console.log(file);
      const form_data = new FormData();
      form_data.append("file", file);
      const response = await fetch(API_URL + "files/", {
        method: "POST",
        body: form_data,
      });

      if (response.ok) {
        const result = await response.json();
        this.msg = file.name;
        console.log(result);
        const pred = result.predict;
        let mx_prob = -1.0;
        let breed = "";
        for (const key in pred) {
          console.log(key);
          let prob = pred[key];
          console.log(prob);
          if (prob > mx_prob) {
            mx_prob = prob;
            breed = key;
          }
        }
        console.log(breed);
      }
    },
  },
};
</script>

<style scoped>
.fileform label {
  font-size: 3vw;
  display: inline-block;
  color: #cb63dc;
  cursor: pointer;
}
.fileform input[type="file"] {
  display: None;
}
</style>
