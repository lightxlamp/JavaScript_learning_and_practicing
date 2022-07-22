<template>
  <div>
    <h2>Add post</h2>
    <form @submit.prevent>
      <input type="text" placeholder="Title of a post" v-model="post.title" />
      <br />
      <textarea
        rows="4"
        cols="54"
        v-model="post.body"
        placeholder="Body of a post"
      ></textarea>
      <input type="text" placeholder="Tags" v-model="post.tags" />
      <br />
      <br />
      <VueButton @click="createPost">Create post</VueButton>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      post: {
        id: "",
        title: "",
        body: "",
        tags: "",
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
        tags: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  max-width: 50rem;
  margin: 0 auto;
  padding: 2rem;
  border: 2px solid black;
  border-radius: 1rem;
}
input {
  margin: 1rem 0;
  width: 100%;
  padding: 5px;
  font-family: monospace;
}
h2 {
  text-align: center;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
textarea {
  padding: 0.5rem;
  width: 45.6rem;
}
</style>
