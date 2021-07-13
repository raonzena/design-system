<template>
  <div class="card" :style="cardWidth">
    <section :style="setCardImageStyle"></section>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CardContent from "@/components/Card/CardContent.vue";
import CardFooter from "@/components/Card/CardFooter.vue";
import { ImageSize } from "@/interfaces/card";

@Component({
  components: {
    CardContent,
    CardFooter,
  },
})
export default class Card extends Vue {
  @Prop({ required: true }) imgSrc: string;
  @Prop({ required: true }) imgAlt: string;
  @Prop({ default: 160 }) imgWidth: number;
  @Prop({ default: 160 }) imgHeight: number;

  getOriginImageSize(src: string): Promise<ImageSize> {
    const img = new Image();
    img.src = src;
    return new Promise((resolve) => {
      img.onload = () =>
        resolve({
          width: img.width,
          height: img.height,
        });
    });
  }

  get setCardImageSize(): ImageSize {
    const { width, height } = this.getOriginImageSize(this.imgSrc);
    return width / height > this.imgWidth / this.imgHeight
      ? { width: this.imgHeight, height: this.imgHeight }
      : { width: this.imgWidth, height: this.imgWidth };
  }

  get setCardImageStyle() {
    const { width, height } = this.setCardImageSize;
    return {
      background: `url(${this.imgSrc}) no-repeat center`,
      "background-size": "cover",
      width: `${width}px`,
      height: `${height}px`,
    };
  }

  get cardWidth() {
    return { width: `${this.setCardImageSize.width}px` };
  }

  // beforeMount() {
  //   this.setCardImageSize();
  // }
}
</script>

<style scoped lang="scss">
.card {
  border: 1px solid;
  border-radius: 8px;
}
img {
}
</style>
