<template>
  <div class="box" @dragover="dragover" @drop="drop">
    <div class="elements">
      <img src="../assets/dog.png" id="dog-logo" />
      <h1 id="text">Drag & Drop to upload</h1>
      <input
        id="fileform"
        type="file"
        @change="onChange"
        ref="file"
        accept=".jpg,.jpeg,.png"
      />
      <label for="fileform"> {{ msg }} </label>
    </div>
  </div>
  <!-- <router-link
    to="{path:'result', query:{res: this.res}}"
    v-if="filelist.length !== 0"
    >result</router-link
  > -->
  <button @click="buttonClick">button</button>
</template>

<script>
const API_URL = "http://127.0.0.1:5173/api/";

export default {
  components: {
    // FileForm,
  },
  data() {
    return {
      filelist: [],
      filename: "",
      msg: "or browse",
    };
  },
  props: ["uploaded"],
  methods: {
    onChange() {
      this.filelist = [...this.$refs.file.files];
      this.handleFileChange();
    },
    async handleFileChange() {
      const file = this.filelist[0];
      const form_data = new FormData();
      form_data.append("file", file);
      const res = await fetch(API_URL + "files/", {
        method: "POST",
        body: form_data,
      });
      if (res.ok) {
        console.log("respons ok");
        console.log(res);
        const resjson = await res.json();
        this.filename = resjson.filename;
        console.log(resjson.filename);
        this.msg = file.name;
      }
    },
    remove(i) {
      this.filelist.splice(i, 1);
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
      this.$router.push({
        path: "/result",
        query: {
          filename: this.filename,
        },
      });
    },
  },
};
</script>

<style scoped>
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
</style>
