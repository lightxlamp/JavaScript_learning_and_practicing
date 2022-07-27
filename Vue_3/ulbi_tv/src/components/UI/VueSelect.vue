<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Choose from a list</option>
    <option v-for="option in options" :key="option.value" :value="option">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "VueSelect",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      console.log("event", event);
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
select {
  padding: 0 10px;
}
</style>