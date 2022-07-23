<template>
  <div>
    <div class="post">
      <div class="post-content">
        <p><strong>Title:</strong> {{ post.title }}</p>
        <p><strong>Body:</strong> {{ post.body }}</p>
        <p><strong>Tags:</strong> {{ post.tags }}</p>
      </div>
      <div class="post-buttons">
        <VueButton @click="deletePost">Delete</VueButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    deletePost() {
      this.$emit("deletePost", this.post);
    },
  },
};
</script>

<style scoped>
.post {
  padding: 1.5rem;
  border: 2px solid teal;
  margin: 0.8rem 0;
  font-size: 1.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
