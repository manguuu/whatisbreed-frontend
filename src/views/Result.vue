<script setup>
import ResultArrow from "@/components/Icons/ResultArrow.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const pred = JSON.parse(route.query.pred);
console.log(pred);
</script>

<template>
  <div class="result-box">
    <div>
      <img class="image-box" id="origin-box" />
      <div class="pred-box">
        <h1 id="breed-title">{{ pred[0].breed }}</h1>
        <div class="detail">
          <p>{{ pred[0].breed }}: {{ (pred[0].prob * 100).toFixed(2) }}%</p>
          <p>{{ pred[1].breed }}: {{ (pred[1].prob * 100).toFixed(2) }}%</p>
        </div>
      </div>
    </div>
    <ResultArrow class="items" id="arrow" />
    <img class="image-box" id="lime-box" />
  </div>
</template>

<script>
export default {
  probs: {
    pred: Array,
  },
  data() {
    return {
      msg: "",
      pred: [],
    };
  },
  mounted() {
    const route = useRoute();
    const filename = route.query.filename;
    const path = "http://localhost:8000/static";
    const originPath = `${path}/originImg/${filename}`;
    const limePath = `${path}/limeImg/${filename}`;
    document.querySelector("#origin-box").src = originPath;
    document.querySelector("#lime-box").src = limePath;
  },
};
</script>

<style>
#arrow {
  top: 20%;
  width: 10%;
  height: 10%;
}
.result-box {
  margin: 4vw;
  display: flex;
  /* align-items: center; */
}

.result-box .items {
  margin: 3vw;
}

#origin-box {
  width: 30vw;
  height: 30vw;
}

#lime-box {
  width: 40vw;
  height: 40vw;
}

#breed-title {
  text-align: center;
  font-weight: bold;
  font-size: 3.5vw;
  color: #e9e9e9;
}

.image-box {
  min-width: 100px;
  min-height: 100px;
  max-width: 600px;
  max-height: 600px;
  border: 8px solid;
  border-radius: 16px;
  vertical-align: middle;
  object-fit: cover;
}

.detail {
  text-align: right;
  margin-right: 10%;
  font-size: 1.7vw;
}
</style>
