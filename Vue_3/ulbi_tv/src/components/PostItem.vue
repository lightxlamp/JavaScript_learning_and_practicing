<template>
  <div>
    <div class="post">
      <p><strong>Title:</strong> {{ post.title }}</p>
      <p><strong>Body:</strong> {{ post.body }}</p>
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
};
</script>


<style scoped>
.post {
  padding: 1.5rem;
  border: 2px solid teal;
  margin-top: 1.5rem;
  font-size: 1.6rem;
}
</style>
