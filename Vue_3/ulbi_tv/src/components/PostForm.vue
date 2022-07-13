<template>
  <form @submit.prevent>
    <input type="text" placeholder="Title" v-model="post.title" />
    <br />
    <input type="text" placeholder="Body" v-model="post.body" />
    <br />
    <button @click="createPost">Create post</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("createPost", this.post);
      this.post = {
        id: "",
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid black;
  border-radius: 10px;
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
