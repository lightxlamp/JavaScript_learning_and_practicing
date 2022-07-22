<template>
  <!-- https://softauthor.com/vuejs-compositionapi-input-field-reactivity-between-components/ -->
  <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "VueInput",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>


<style scoped>
.input {
  margin: 1rem 0;
  width: 100%;
  padding: 5px;
  font-family: monospace;
}
</style>