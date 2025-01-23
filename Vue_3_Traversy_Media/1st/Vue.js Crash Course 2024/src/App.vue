<script setup>
import { ref } from "vue";

const name = "Stas";
let status = ref("pending");
const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
const link = "https://www.youtube.com/watch?v=VeNfHj6MhgA";

const changeStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

</script>

<template>
  <h1>{{ name }}</h1>
  <br />
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>
  <br />
  <button @click="changeStatus">Change status</button>
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
