<script setup>
// import ResultArrow from "@/components/Icons/ResultArrow.vue";
// import { useRoute } from "vue-router";
// const route = useRoute();
// const filename = route.query.filename;
// console.log(filename);
</script>

<template>
  <div class="result-box">
    <div>
      <img class="image-box" src="../assets/mint.jpeg" />
      <suspense timeout="0">
        <h1>{{ msg }}</h1>
      </suspense>
    </div>
    <ResultArrow class="items" />
    <img class="image-box" src="../assets/mint.jpeg" />
    <button @clink="console.log(this.msg)">button</button>
  </div>
</template>

<script>
import getData from "./api.js";
export default {
  data() {
    return {
      msg: getData('20220827170745e7df83d956e8e06664f3544e36420d5c.png'),
      pred: [],
    };
  },
};
console.log("asd");
console.log(getData("20220827170745e7df83d956e8e06664f3544e36420d5c.png"));
</script>

<style>
.result-box {
  margin: 4vw;
  display: flex;
  align-items: center;
}

.result-box .items {
  margin: 3vw;
}

.image-box {
  text-align: center;
  min-width: 100px;
  min-height: 100px;
  border: 8px solid;
  width: 30vw;
  height: 30vw;
  border-radius: 16px;
  vertical-align: middle;
  object-fit: cover;
}
</style>
