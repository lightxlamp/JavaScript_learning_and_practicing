<template>
  <div>
    <h1>
      {{
        $store.state.isAuth ? "Authorized" : "Please authorize to use a service"
      }}
    </h1>
    <h1>Likes: {{ $store.state.likes }}</h1>
    <h1>Double likes: {{ $store.getters.doubleLikes }}</h1>
    <br />
    <VueButton @click="$store.commit('incrementLikes')">Like</VueButton>
    &nbsp;
    <VueButton @click="$store.commit('decrementLikes')">Decrement</VueButton>
    <br />
    <br />

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
    <div ref="observer" class="observer"></div>
    <VueDialog v-model:isVisible="isDialogVisible"
      ><PostForm @createPost="createPost"></PostForm
    ></VueDialog>
    <!-- <div class="pages_wrapper">
      <div
        v-for="pageNumber in totalPages"
        class="page"
        :class="{ 'page--active': pageNumber === this.page }"
        :key="pageNumber + 'p'"
        @click="setActivePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import VueButton from "@/components/UI/VueButton.vue";
import VueDialog from "@/components/UI/VueDialog.vue";
import VueInput from "@/components/UI/VueInput.vue";
import VueSelect from "@/components/UI/VueSelect.vue";

export default {
  data() {
    return {
      isDialogVisible: false,
    };
  },
  components: {
    PostForm,
    PostList,
    VueButton,
    VueDialog,
    VueInput,
    VueSelect,
  },
  mounted() {
    this.fetchPosts();

    let options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };

    let observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.isDialogVisible = false;
    },
    showDialog() {
      this.isDialogVisible = true;
    },
    setActivePage(pageNumber) {
      this.page = pageNumber;
    },
    deletePost(postToDelete) {
      this.posts = this.posts.filter((post) => {
        return post.id !== postToDelete.id;
      });
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
    // mutates array
    //   selectedSortingOption(newValue) {
    //     this.posts.sort((post1, post2) => {
    //       return post1[newValue]?.localeCompare(post2[newValue]);
    //     });
    //   },
  },

  computed: {},
};
</script>

<style>
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
.pages_wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
.page {
  border: 1px solid black;
  padding: 1rem;
  cursor: pointer;
  margin-right: 3px;
  border-radius: 6px;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
}

.page--active {
  border: 1px solid teal;
  font-weight: bold;
  background: teal;
  color: #fff;
}

.observer {
  height: 3rem;
  background: transparent;
}
</style>
