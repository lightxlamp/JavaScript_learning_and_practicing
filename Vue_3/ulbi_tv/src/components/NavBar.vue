<template>
  <div class="navbar">
    <h1 class="title" @click="$router.push('/')">Vue 3 Practice</h1>
    <div class="buttons">
      <VueButton @click="$router.push('/')">Home page</VueButton>
      <VueButton @click="$router.push('/posts')">List of posts</VueButton>
      <VueButton @click="$router.push('/posts_v2')">List of posts using store</VueButton>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.title {
  color: #fff;
  cursor: pointer;
}
.navbar {
  padding: 1rem 2.5rem;
  background: teal;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.buttons > * {
  margin-left: 0.5rem;
}
.buttons:first-child {
  margin-left: 0;
}
</style>