<template>
  <form @submit.prevent>
    <input
      type="text"
      placeholder="Title"
      v-bind:value="post.title"
      @input="post.title = $event.target.value"
    />
    <br />
    <input
      type="text"
      placeholder="Body"
      v-bind:value="post.body"
      @input="post.body = $event.target.value"
    />
    <br />
    <button>Create post</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
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
