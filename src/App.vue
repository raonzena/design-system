<template>
  <div id="app">
    <!-- https://nutter.life/pic/media%2FE3xEPhpVoAkDIdz.jpg%3Fname%3Dsmall -->
    <card
      :img-width="200"
      img-src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg"
      img-alt="Image"
    >
      <card-content label="label" title="title" hilight="hilight" />
      <card-footer rate="4" text="text" />
    </card>
    <card img-src="https://placekitten.com/g/300/450" img-alt="Image">
      <card-content label="label2" title="title2" hilight="hilight2" />
    </card>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "./components/Card/Card.vue";
import CardContent from "./components/Card/CardContent.vue";
import CardFooter from "./components/Card/CardFooter.vue";

@Component({
  components: {
    Card,
    CardContent,
    CardFooter,
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
</style>
