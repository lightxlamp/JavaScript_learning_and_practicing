<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: "VueButton",
};
</script>


<style scoped>
button {
  padding: 10px;
  background: transparent;
  border: 1px solid teal;
  color: teal;
  cursor: pointer;
}
</style>