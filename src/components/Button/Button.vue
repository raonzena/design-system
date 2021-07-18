<template>
  <button>
    <slot></slot>
  </button>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Button extends Vue {}
</script>

<style lang="scss" scoped>
button {
  color: #3cbd6e;
  background-color: white;
  border: 1px solid #c2c2c2;
  font-size: 12px;
  padding: 12px;
}
</style>
