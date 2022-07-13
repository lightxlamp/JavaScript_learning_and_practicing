<template>
  <div class="app">
    <h2>Add post</h2>
    <PostForm></PostForm>
    <PostList :posts="posts"></PostList>
    <br />
    <hr />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";

export default {
  data() {
    return {
      posts: [
        { id: 1, title: " What is Vue?", body: "Vue 3 is a ...." },
        { id: 2, title: " What is Vue?", body: "Vue 3 is a ...." },
        { id: 3, title: " What is Vue?", body: "Vue 3 is a ...." },
      ],
      title: "",
      body: "",
    };
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = "";
      this.body = "";
      console.log(this.posts);
    },
  },
  components: {
    PostForm,
    PostList,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>