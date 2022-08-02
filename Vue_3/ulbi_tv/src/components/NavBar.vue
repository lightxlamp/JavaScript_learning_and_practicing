<template>
  <ul>
    <li><router-link class="link" :to="'/'">Home</router-link></li>
    <li><router-link class="link" :to="'/posts'">See posts</router-link></li>
  </ul>
</template>

<script>
export default {};
</script>

<style scoped>
.link {
  font-size: 1.6rem;
}
ul {
  display: flex;
  list-style: none;
}
li {
  margin-left: 1rem;
  color: teal;
}
li:first-child {
  margin-left: 0;
}
</style>