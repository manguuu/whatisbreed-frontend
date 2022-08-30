<script setup>
import { RouterView } from "vue-router";
</script>

<script>

</script>

<template>
  <header>What is your dog?</header>
  <RouterView />
</template>

<style scoped>
header {
  /* display: flex; */
  flex-direction: column;
  line-height: 1.5;
  margin: 3vw;
  font-size: min(3vw, 30px);
  color: #E9E9E9;
  font-weight: bold;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    flex-direction: column;
    place-items: left;
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
