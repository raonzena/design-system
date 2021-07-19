<template>
  <div class="card" :class="{ row: direction === 'row' }">
    <section class="card-image-wrapper">
      <div class="card-image" :style="setCardImageStyle"></div>
    </section>
    <div>
      <section class="content-wrapper">
        <slot :direction="direction"></slot>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import CardContent from '@/components/Card/CardContent.vue';
import CardFooter from '@/components/Card/CardFooter.vue';

@Component({
  components: {
    CardContent,
    CardFooter,
  },
})
export default class Card extends Vue {
  @Prop({ type: String, required: true }) imgSrc: string;
  @Prop({ type: String, required: true }) imgAlt: string;
  @Prop({ type: String, default: 'col' }) direction: 'col' | 'row';

  get setCardImageStyle() {
    return {
      'background-image': `url(${this.imgSrc})`,
    };
  }
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  border-radius: 8px;
  overflow: hidden;
  .card-footer {
    border-top: 1px solid;
  }
  &.row {
    flex-direction: row;
    .card-image-wrapper {
      max-width: 200px;
    }
    .card-footer {
      display: flex;
      flex-direction: row;
      border: none;
    }
  }
}
.card-image-wrapper {
  width: 100%;
}
.card-image {
  padding-top: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  flex: 1;
}
</style>
