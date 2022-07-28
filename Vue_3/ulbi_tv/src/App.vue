<template>
  <div class="app">
    <div class="btns">
      <VueButton @click="showDialog">Create Post</VueButton>
      <VueSelect
        v-model="selectedSortingOption"
        :options="sortingOptions"
      ></VueSelect>
    </div>
    <VueInput v-model="searchQuery" placeholder="Search..."></VueInput>
    <PostList
      :posts="searchResultPosts"
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
import VueSelect from "@/components/UI/VueSelect.vue";
import VueInput from "@/components/UI/VueInput.vue";
import axios from "axios";

export default {
  data() {
    return {
      posts: [],
      page: 1,
      postsPerPage: 5,
      isDialogVisible: false,
      isPostsLoading: false,
      selectedSortingOption: "",
      searchQuery: "",
      sortingOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By body" },
      ],
    };
  },
  components: {
    PostForm,
    PostList,
    VueDialog,
    VueButton,
    VueSelect,
    VueInput,
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
          `https://jsonplaceholder.typicode.com/posts?_limit=${this.postsPerPage}&_page=${this.page}`
        );
        this.posts = response.data;
      } catch (e) {
        alert("Error while getting list of posts");
      } finally {
        this.isPostsLoading = false;
      }
    },
  },
  // watch: {   // mutates array
  //   selectedSortingOption(newValue) {
  //     this.posts.sort((post1, post2) => {
  //       return post1[newValue]?.localeCompare(post2[newValue]);
  //     });
  //   },
  // },

  computed: {
    // original posts array stays the same
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSortingOption]?.localeCompare(
          post2[this.selectedSortingOption]
        );
      });
    },
    searchResultPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
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
.btns {
  display: flex;
  justify-content: space-between;
}
.tac {
  text-align: center;
}
.ttu {
  text-transform: uppercase;
}
</style>