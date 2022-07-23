<template>
  <div class="app">
    <PostForm @createPost="createPost"></PostForm>
    <PostList :posts="posts" @deletePost="deletePost"></PostList>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  data() {
    return {
      posts: [
        { id: 1, title: " What is Vue?", body: "Lorem, lorem lorem" },
        { id: 2, title: " How to use VUEX?", body: "Vue 3 is a ...." },
        {
          id: 3,
          title: " A few words about SLOTS",
          body: "Ipsum, ipsum ipsum.",
        },
      ],
    };
  },
  components: {
    PostForm,
    PostList,
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    deletePost(postToDelete) {
      this.posts = this.posts.filter((post) => {
        return post.id !== postToDelete.id;
      });
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 62.5%;
}
.app {
  padding: 2rem;
}
</style>