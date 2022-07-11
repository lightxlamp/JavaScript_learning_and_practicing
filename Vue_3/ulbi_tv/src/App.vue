<template>
  <div class="app">
    <h2>Add post</h2>
    <form @submit.prevent>
      <input
        type="text"
        placeholder="Title"
        v-bind:value="title"
        @input="title = $event.target.value"
      />
      <br />
      <input
        type="text"
        placeholder="Body"
        v-bind:value="body"
        @input="body = $event.target.value"
      />
      <br />
      <button @click="createPost">Create post</button>
    </form>
    <br />
    <hr />
    <!-- https://learnvue.co/tutorials/vue-for-loop-tips -->
    <div class="post" v-for="post in posts" :key="post.id">
      <div>
        <strong>Title:</strong> {{ post.title }} <br />
        <strong>Body:</strong> {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
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
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
input {
  margin: 10px 0;
  width: 100%;
  padding: 5px;
}
button {
  padding: 10px;
  background: transparent;
  border: 1px solid teal;
  color: teal;
  cursor: pointer;
}
</style>