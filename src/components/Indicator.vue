<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div id="indicator">
    <div id="elipse" src="../assets/ellipse.png">1</div>
    <p>{{ msg }}</p>
  </div>
</template>

<style>
#indicator {
  font-size: 24px;
  display: flex;
}

p {
  line-height: 25px;
  color: #cb63dc;
  font-weight: normal;
  font-size: 3.5vw;
  padding: 7px;
}

#elipse {


    font-size: 3vw;
    padding: 5px;
  line-height: 40px;
  text-align: center;
  /* background-image: url("../assets/ellipse.png"); */
  /* background-size: contain; */
  object-fit: contain;
  width: 5%;
  /* height: 7%; */
  /* height: px; */
}
</style>
