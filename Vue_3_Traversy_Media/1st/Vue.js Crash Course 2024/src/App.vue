<script>
  export default {
    data() {
      return {
        name: 'Stas',
        status: 'pending',
        tasks: ['Task 1', 'Task 2', 'Task 3', 'Task 4'],
        link: 'https://www.youtube.com/watch?v=VeNfHj6MhgA'
      }
    }
  }
</script>

<template>
  <h1>{{ name }}</h1>
  <br />
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <br />
  <br />

  <p v-for="task in tasks" :key="task">
     {{ task  }}
  </p>

  <br />
  <br />
  
  <a v-bind:href="link">Link to this video</a>

</template>

<style scoped>

</style>
