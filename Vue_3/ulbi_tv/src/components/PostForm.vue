<template>
  <div>
    <h2>Add post</h2>
    <form @submit.prevent>
      <VueInput v-model="post.title" placeholder="Title of a post" />
      <br />
      <textarea
        rows="4"
        cols="54"
        v-model="post.body"
        placeholder="Body of a post"
      ></textarea>
      <VueInput v-model="post.tags" placeholder="Tags for a post" />
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
