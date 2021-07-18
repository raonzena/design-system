<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Row extends Vue {}
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  > .col {
    padding: 10px;
  }
}
</style>
