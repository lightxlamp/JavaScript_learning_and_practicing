<template>
  <div class="app_wrapper">
    <h1>Go to bad, Stas :)</h1>
    <div>
      Likes count: <strong>{{ this.likes }}</strong> Dislikes count:
      <strong>{{ this.dislikes }}</strong>
    </div>
    <br />
    <button @click="like()">Like</button>
    <br />
    <br />
    <button @click="dislike()">Dislike</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      likes: 0,
      dislikes: 0,
    };
  },
  methods: {
    like() {
      this.likes++;
    },
    dislike() {
      this.dislikes++;
    },
  },
};
</script>

<style scoped>
</style>