<template>
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
    <button>Create post</button>
  </form>
</template>

<style scoped>
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
