<template>
    <v-md-editor ref="editor" v-model="value" :height="height" :style="styles" :placeholder="placeholder"></v-md-editor>
</template>

<script>

export default {
  name: "MdEditor",
  props: {
    placeholder: {
      type: String,
      default: "请输入内容",
    },
    /* 编辑器的内容 */
    value: {
      type: String,
      default: "",
    },
    /* 高度 */
    height: {
      type: Number,
      default: null,
    },
    /* 最小高度 */
    minHeight: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
    };
  },
  computed: {
    styles() {
      let style = {};
      if (this.minHeight) {
        style.minHeight = `${this.minHeight}px`;
      }
      if (this.height) {
        style.height = `${this.height}px`;
      }
      return style;
    },
  },
  methods: {
  },
};
</script>

<style>
</style>