<template>
  <div>
    <h1>Main Page</h1>
    <br />
    <router-link class="link" :to="'/PostsPage'">See posts</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  font-size: 1.6rem;
}
</style>