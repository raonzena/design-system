<template>
  <div class="col" :class="cols && `col-${cols}`">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Col extends Vue {
  @Prop({ type: Number }) cols: number;
}
</script>

<style scoped lang="scss">
$total: 10;
.col {
  flex: 0 0 auto;
  position: relative;
  width: 100%;
}
@for $i from 1 to $total {
  .col-#{$i} {
    flex: 0 0 percentage($i / $total);
    max-width: percentage($i / $total);
  }
}
</style>
