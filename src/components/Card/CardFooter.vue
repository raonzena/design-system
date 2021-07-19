<template>
  <section class="card-footer">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class CardFooter extends Vue {}
</script>

<style scoped lang="scss">
.card-footer {
  padding: 12px;
  text-align: left;
}
</style>
