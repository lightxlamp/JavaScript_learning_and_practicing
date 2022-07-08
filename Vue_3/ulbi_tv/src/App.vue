<template>
  <div>
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
    };
  },
  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
}
</style>