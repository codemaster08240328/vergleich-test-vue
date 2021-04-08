<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="components-array__wrapper">
      <attribute-badge :rating="93" />
      <attribute-badge :rating="93" color="#0298d5" />
      <attribute-badge color="#0298d5" :rating="100" type="number" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import AttributeBadge from "./components/attribute-badge/AttributeBadge.vue";

@Component({
  components: {
    AttributeBadge,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.components-array__wrapper {
  display: flex;
  width: 600px;
  justify-content: space-around;
  margin-top: 50px;
  margin: 0 auto;
}
</style>
