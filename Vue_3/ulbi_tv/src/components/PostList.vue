<template>
  <div v-if="posts.length > 0">
    <h1>List of posts</h1>
    <!-- https://learnvue.co/tutorials/vue-for-loop-tips -->
    <TransitionGroup name="posts-list">
      <PostItem
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @deletePost="deletePost(post)"
      ></PostItem>
    </TransitionGroup>
  </div>
  <div v-else>
    <h1>No posts yet</h1>
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
  methods: {
    deletePost(post) {
      this.$emit("deletePost", post);
    },
  },
};
</script>

<style scoped>
h1 {
  color: teal;
  text-align: center;
  margin: 2rem 0;
  text-transform: uppercase;
}
.posts-list-item {
  display: inline-block;
  margin-right: 10px;
}
.posts-list-enter-active,
.posts-list-leave-active {
  transition: all 10s;
}
.posts-list-enter, .posts-list-leave-to /* .posts-list-leave-active before v2.1.8 */ {
  opacity: 1;
  transform: translateY(30px);
}
</style>
