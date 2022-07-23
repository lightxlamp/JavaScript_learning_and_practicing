<template>
  <div class="dialog" v-if="isVisible" @click="hideDialog">
    <div class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueDialog",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:isVisible", false);
    },
  },
};
</script>

<style scoped>
.dialog {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  align-items: center;
}
.dialog__content {
  margin: 0 auto;
  background: #fff;
  border-radius: 1.2rem;
  max-width: 50rem;
  width: fit-content;
  padding: 2rem;
  border-radius: 1rem;
  border: 2px solid black;
}
</style>