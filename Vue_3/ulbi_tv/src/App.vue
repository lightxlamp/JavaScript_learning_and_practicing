<template>
  <div class="app">
    <VueButton @click="showDialog">Create Post</VueButton>
    <PostList
      :posts="posts"
      @deletePost="deletePost"
      v-if="!isPostsLoading"
    ></PostList>
    <h1 class="tac ttu" v-else>Posts loading...</h1>
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
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      isDialogVisible: false,
      isPostsLoading: false,
    };
  },
  components: {
    PostForm,
    PostList,
    VueDialog,
    VueButton,
  },
  mounted() {
    this.fetchPosts();
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
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=8"
        );
        this.posts = response.data;
      } catch (e) {
        alert("Error while getting list of posts");
      } finally {
        this.isPostsLoading = false;
      }
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
.tac {
  text-align: center;
}
.ttu {
  text-transform: uppercase;
}
</style>