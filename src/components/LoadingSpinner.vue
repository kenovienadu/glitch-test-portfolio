<template>
  <section>
    <span> A </span>
  </section>
</template>

<script>
export default {
  name: "loading-spinner",
};
</script>

<style lang="scss" scoped>
section {
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  color: black;
}

span {
  font-size: 6em;
  font-weight: bold;
  color: #ac003c;
  animation-name: loader;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease;
  animation-direction: both;
}

@keyframes loader {
  0% {
    transform: translateY(0) scale(0);
  }
  50% {
    transform: translateY(30px) scale(1.5);
  }
  100% {
    transform: translateY(0) scale(0);
  }
}
</style>