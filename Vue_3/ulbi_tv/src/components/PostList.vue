<template>
  <div>
    <!-- https://learnvue.co/tutorials/vue-for-loop-tips -->
    <PostItem
      v-for="post in posts"
      :post="post"
      :key="post.id"
      @deletePost="$emit('deletePost', post)"
    ></PostItem>
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
  deletePost(post) {
    alert("post", post);
    this.$emit("deletePost", post);
  },
};
</script>

