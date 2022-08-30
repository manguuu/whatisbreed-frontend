<template>
  <div id="file-box">
    <div class="box" @dragover="dragover" @drop="drop">
      <div class="elements">
        <img src="../assets/dog.png" id="dog-logo" />
        <h1 id="text">Drag & Drop to upload</h1>
        <input
          id="fileform"
          type="file"
          @change="onChange"
          ref="file"
          accept="image/*"
        />
        <label for="fileform"> {{ msg }} </label>
      </div>
    </div>
    <button id="submit-btn" @click="buttonClick" v-if="this.flag === true">
      Submit
    </button>
  </div>
</template>

<script>
import { getPred, API_URL } from "../router/api";
let pred = [];
let filelist = [];
export default {
  data() {
    return {
      filename: "",
      msg: "or browse",
      flag: false,
      pred: [],
      prob: [],
    };
  },
  props: ["uploaded"],
  methods: {
    fileFormatCheck(filename) {
      const reg = /(.*?)\.(jpg|jpeg|png)$/;
      if (!filename.match(reg)) {
        alert("이미지 형식의 파일을 넣어주세요.");
      }
    },
    onChange() {
      filelist = [...this.$refs.file.files];
      this.handleFileChange();
    },
    async handleFileChange() {
      const file = filelist[0];
      this.fileFormatCheck(file.name);
      const form_data = new FormData();
      form_data.append("file", file);
      const res = await fetch(API_URL + "files/", {
        method: "POST",
        body: form_data,
      });
      if (res.ok) {
        const resjson = await res.json();
        this.filename = resjson.filename;
        pred = await getPred(this.filename);
        pred.sort(function (a, b) {
          return b.prob - a.prob;
        });
        pred = pred.slice(0, 3);
        this.flag = true;
        this.msg = file.name;
      }
    },
    remove(i) {
      filelist.splice(i, 1);
    },
    dragover(e) {
      e.preventDefault();
    },
    drop(e) {
      e.preventDefault();
      this.$refs.file.files = e.dataTransfer.files;
      this.onChange();
    },
    buttonClick() {
      const predJson = JSON.stringify(pred);
      console.log(predJson);
      this.$router.push({
        path: "result",
        query: {
          filename: this.filename,
          pred: predJson,
        },
      });
    },
  },
};
</script>

<style scoped>
#file-box {
  text-align: center;
}
.box {
  background-image: url("../assets/input-box.png");
  background-size: cover;
  width: 50vw;
  height: 50vw;
  min-width: 150px;
  min-height: 150px;
  max-width: 600px;
  max-height: 600px;
  text-align: center;
}

.elements {
  position: absolute;
  top: 20%;
  width: 100%;
}

#dog-logo {
  width: 40%;
}

#text {
  font-size: min(4vw, 30px);
  font-weight: bold;
  color: #e9e9e9;
}

.elements label {
  font-size: min(3vw, 22px);
  display: inline-block;
  color: #cb63dc;
  cursor: pointer;
}
.elements input[type="file"] {
  display: None;
}

#submit-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  margin-top: 20px;
  width: 35vw;
  height: 3.8vw;
  font-size: 2vw;
  color: #e9e9e9;
  border: solid;
  border-color: #888888;
  border-radius: 15px;
  border-width: max(0.3vw, 3px);
  background: var(--button-bg-color);
  min-width: 150px;
  max-width: 600px;
  min-height: 30px;
}
</style>
