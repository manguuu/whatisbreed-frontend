<script setup>
import { RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
// import FileBox from "@/components/FileBox.vue";

</script>

<script>
export default {
  // components: { FileBox },
  // data() {
  //   return {
  //     uploaded: false,
  //   };
  // },
  // methods: {
  //   childEvent() {
  //     console.log("child event");
  //     this.uploaded = true;
  //   },
  // },
};
</script>

<template>
  <header>What is your dog?</header>
  <!-- <Indicator msg="Put dog image on here" num="1" style="margin-left: 5vw"/> -->
  <!-- <FileBox @childEvent="childEvent" /> -->
  
  <main></main>
  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  flex-direction: column;
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    flex-direction: column;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
