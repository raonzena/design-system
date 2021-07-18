<template>
  <div class="text-input-wrapper">
    <textarea
      rows="5"
      type="text"
      :placeholder="placeholder"
      :value="input"
      :disabled="disabled"
      :maxlength="maxLength"
      :readonly="readonly"
      @input="inputText"
    ></textarea>
    <span class="writable-text-length">{{ writableTextLength }}</span>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class TextInput extends Vue {
  @Prop({ type: String }) placeholder: string;
  @Prop({ type: Boolean, default: false }) disabled: boolean;
  @Prop({ type: Boolean, default: false }) readonly: boolean;
  @Prop({ type: String, default: '' }) content: string;
  @Prop({ type: Number, default: 500 }) maxLength: number;
  input = '';

  @Watch('input')
  changeContent(): void {
    this.$emit('change', this.input);
  }

  inputText(e: { target: HTMLInputElement }): void {
    this.input = e.target.value;
  }

  get writableTextLength(): number {
    return this.maxLength - this.input.length;
  }

  beforeMount() {
    this.input = this.content;
  }
}
</script>

<style lang="scss" scoped>
.text-input-wrapper {
  position: relative;
  display: flex;
  flex: 1;
}
textarea {
  font-size: 12px;
  width: 100%;
  resize: none;
  padding: 10px;
  border: 1px solid #c2c2c2;
  &:focus {
    outline: 1px solid #3cbd6e;
  }
  &:disabled {
    background-color: d2d2d2;
    &::placeholder {
      color: #ff7b30;
    }
  }
  &:read-only {
    &:focus {
      outline: none;
    }
  }
}
.writable-text-length {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 10px;
  color: #888888;
}
</style>
