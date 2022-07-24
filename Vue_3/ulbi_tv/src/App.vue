<template>
  <div class="app">
    <PostList :posts="posts" @deletePost="deletePost"></PostList>
    <VueButton @click="showDialog">Create Post</VueButton>
    <VueDialog v-model:isVisible="isDialogVisible"
      ><PostForm @createPost="createPost"></PostForm
    ></VueDialog>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import VueDialog from "@/components/UI/VueDialog.vue";
import VueButton from "@/components/UI/VueButton.vue";

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
      isDialogVisible: false,
    };
  },
  components: {
    PostForm,
    PostList,
    VueDialog,
    VueButton,
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.isDialogVisible = false;
    },
    showDialog() {
      this.isDialogVisible = true;
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