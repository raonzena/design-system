<template>
  <div>
    <section class="card-content">
      <slot></slot>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CardContent extends Vue {}
</script>

<style scoped lang="scss">
.card-content {
  padding: 12px;
  text-align: left;
  flex: 1;
}
</style>
