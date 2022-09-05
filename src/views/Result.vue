<script setup>
import ResultArrow from "@/components/Icons/ResultArrow.vue";
import { useRoute } from "vue-router";
import Hover from "@/components/Hover.vue";

const route = useRoute();
const pred = JSON.parse(route.query.pred);
console.log(pred);
</script>

<template>
  <div id="out">
    <Hover />
    <div class="result-box">
      <div class="box">
        <img class="image-box" id="origin-box" />
        <div class="pred-box">
          <h1 id="breed-title">{{ pred[0].breed }}</h1>
          <div class="detail">
            <p>{{ pred[0].breed }}: {{ (pred[0].prob * 100).toFixed(2) }}%</p>
            <p v-if="pred[0].breed < 0.99">
              {{ pred[1].breed }}: {{ (pred[1].prob * 100).toFixed(2) }}%
            </p>
            <p v-if="pred[2].breed > 0.05">
              {{ pred[2].breed }}: {{ (pred[2].prob * 100).toFixed(2) }}%
            </p>
          </div>
        </div>
      </div>
      <ResultArrow class="items" id="arrow" />
      <div class="box" id="lime">
        <img class="image-box" id="lime-box" />
      </div>
    </div>
  </div>
  <div id="back-btn" align="center">
    <button @click="backClick">Retry</button>
  </div>
</template>

<script>
import { API_URL } from "../router/api.js";
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
    const path = `${API_URL}static`;
    const originPath = `${path}/originImg/${filename}`;
    const limePath = `${path}/limeImg/${filename}`;
    document.querySelector("#origin-box").src = originPath;
    document.querySelector("#lime-box").src = limePath;
  },
  methods: {
    backClick() {
      this.$router.push({
        path: "/",
      });
    },
  },
};
</script>

<style>
#back {
  cursor: pointer;
  margin-bottom: 1.5vw;
  width: 2.5vw;
  height: 2.5vw;
}

#out {
  margin: 0px;
  text-align: end;
}
#arrow {
  width: 10%;
  height: 10%;
}
.result-box {
  margin: 0px;
  display: flex;
  align-items: center;
}

.result-box .items {
  margin: 3vw;
}

#origin-box {
  min-width: 200px;
  min-height: 200px;
  max-width: 400px;
  max-height: 400px;
  width: 30vw;
  height: 30vw;
}

#lime-box {
  min-width: 250px;
  min-height: 250px;
  max-width: 600px;
  max-height: 600px;
  width: 40vw;
  height: 40vw;
}

#breed-title {
  text-align: center;
  font-weight: bold;
  font-size: max(3.5vw, 20px);
  color: #e9e9e9;
}

.image-box {
  border: 8px solid;
  border-radius: 16px;
  vertical-align: middle;
  object-fit: cover;
}

.detail {
  text-align: right;
  margin-right: 10%;
  font-size: max(1.7vw, 12px);
}

#back-btn {
  margin-top: 5%;
}

#back-btn button {
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
