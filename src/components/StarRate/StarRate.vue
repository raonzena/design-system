<template>
  <div>
    <template v-for="i in 5">
      <Star class="star" :isFilled="i <= rate" :key="`rate-${i}`" />
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Star from '@/components/StarRate/Star.vue';

@Component({
  components: {
    Star,
  },
})
export default class StarRate extends Vue {
  @Prop({ type: Number, default: 0 }) rate: number;
}
</script>

<style scoped lang="scss">
.star {
  width: 12px;
  height: 12px;
}
</style>
