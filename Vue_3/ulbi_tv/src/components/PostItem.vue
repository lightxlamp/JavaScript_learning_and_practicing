<template>
  <div>
    <div class="post">
      <div class="post-content">
        <p><strong>Title:</strong> {{ post.title }}</p>
        <p><strong>Body:</strong> {{ post.body }}</p>
      </div>
      <div class="post-buttons">
        <VueButton>Delete</VueButton>
      </div>
    </div>
  </div>
</template>

<script>
import VueButton from "@/components/UI/VueButton.vue";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  components: {
    VueButton,
  },
};
</script>


<style scoped>
.post {
  padding: 1.5rem;
  border: 2px solid teal;
  margin-top: 1.5rem;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
