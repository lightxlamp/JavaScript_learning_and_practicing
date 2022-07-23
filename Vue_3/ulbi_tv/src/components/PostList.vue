<template>
  <div>
    <!-- https://learnvue.co/tutorials/vue-for-loop-tips -->
    <div v-for="post in posts" :key="post.id">
      <PostItem :post="post" @deletePost="deletePostById"></PostItem>
    </div>
  </div>
</template>

<script>
import PostItem from "./PostItem.vue";

export default {
  components: { PostItem },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
  deletePostById() {
    alert("11");
  },
};
</script>

