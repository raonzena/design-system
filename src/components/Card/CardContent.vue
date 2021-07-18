<template>
  <section class="card-content">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CardContent extends Vue {}
</script>

<style scoped lang="scss">
.card-content {
  padding: 12px;
  text-align: initial;
  flex: 1;
}
</style>
