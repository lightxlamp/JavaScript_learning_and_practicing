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
      <br />
      <VueButton>Create post</VueButton>
    </form>
  </div>
</template>

<script>
import VueButton from "@/components/UI/VueButton.vue";
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
  components: {
    VueButton,
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
  margin-bottom: 1rem;
  padding: 0.5rem;
}
</style>
