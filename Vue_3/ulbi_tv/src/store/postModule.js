export const postMudule = {
  state: function () {
    return {
      posts: [],
      page: 1,
      postsPerPage: 5,
      totalPages: 0,
      isPostsLoading: false,
      selectedSortingOption: "",
      searchQuery: "",
      sortingOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By body" },
      ],
    };
  },
  getters: {
    sortedPosts(state) {
      return [state.posts].sort((post1, post2) => {
        return post1[state.selectedSortingOption]?.localeCompare(
          post2[state.selectedSortingOption]
        );
      });
    },
    searchResultPosts(state, getters) {
      return getters.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
      );
    },
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setLoading(state, bool) {
      state.isPostsLoading = bool;
    },
    setPage(state, page) {
      state.posts = page;
    },
    setSelectedSort(state, selectedSort) {
      state.selectedSortingOption = selectedSort;
    },
    setTotalPages(state, totalPages) {
      state.totalPages = totalPages;
    },
    setSearhQuery(state, searchQuery) {
      state.searchQuery = searchQuery;
    },
  },
  actions: {
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.postsPerPage,
            },
          }
        );
        this.posts = response.data;
        // 101 / 10 = 11 pages
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.postsPerPage
        );
      } catch (e) {
        alert("Error while getting list of posts");
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts`,
          {
            params: {
              _page: this.page,
              _limit: this.postsPerPage,
            },
          }
        );
        this.posts = [...this.posts, ...response.data];

        // 101 / 10 = 11 pages
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.postsPerPage
        );
      } catch (e) {
        alert("Error while getting list of posts");
      }
    },
  },
};
