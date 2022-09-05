<script setup>
import LimeExplanation from "@/components/LimeExplanation.vue";
</script>

<template>
  <div id="hidden" v-if="over === false">
    <img src="../assets/question_mark.png" @mouseover="mouseOver" />
  </div>
  <LimeExplanation @mouseleave="mouseLeave" v-if="over === true" />
</template>

<script>
export default {
  data() {
    return {
      over: false,
    };
  },
  methods: {
    mouseOver() {
      this.over = true;
    },
    mouseLeave() {
      this.over = false;
    },
  },
};
</script>

<style>
#hidden img {
  width: 30px;
  height: 30px;
}
</style>