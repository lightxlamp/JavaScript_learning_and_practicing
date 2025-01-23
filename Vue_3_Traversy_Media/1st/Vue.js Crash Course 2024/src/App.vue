<script>
export default {

};
</script>

<template>
  <h1>{{ name }}</h1>
  <br />
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <br />
  <button @click="changeStatus_switch">Change status</button>
  <br />
  <br />

  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <br />

  <a v-bind:href="link">Link to this video</a>
  <br />
  <br />

  <a :href="link">Link to this video</a>

  <br />
  <br />

</template>

<style scoped></style>
