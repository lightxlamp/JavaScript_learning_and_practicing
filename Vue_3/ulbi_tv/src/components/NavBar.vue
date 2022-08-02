<template>
  <div class="navbar">
    <VueButton>Main</VueButton>
    <VueButton>Posts</VueButton>
    <router-link class="link" :to="'/'">Home</router-link>
    <router-link class="link" :to="'/posts'">See posts</router-link>
  </div>
</template>

<script>
import VueButton from "@/components/UI/VueButton.vue";
export default {
  components: {
    VueButton,
  },
};
</script>

<style scoped>
</style>