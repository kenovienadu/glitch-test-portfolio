<template>
  <div id="app">
    <loading-spinner v-if="isLoading"></loading-spinner>
    <transition name="fade">
      <app-content :data="appData" v-if="!isLoading"></app-content>
    </transition>
  </div>
</template>

<script>
import LoadingSpinner from "./components/LoadingSpinner.vue";
import AppContent from "./components/AppContent.vue";
export default {
  name: "App",
  components: {
    LoadingSpinner,
    AppContent,
  },
  data() {
    return {
      isLoading: true,
      appData: {},
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      const endpoint = "https://hirng-x2021.glitch.me/api";

      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        this.appData = data;
      } catch (error) {
        console.log(error);
        this.loadData();
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  transform: all 0.5s ease;
}

.debug {
  border: 1px solid white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1.4s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>>
