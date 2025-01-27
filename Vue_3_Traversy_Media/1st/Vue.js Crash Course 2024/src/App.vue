<script setup>
import { ref, onMounted } from "vue";

const name = "Stas";
let status = ref("pending");
const tasks = ref(["Task 1", "Task 2", "Task 3", "Task 4"]);
const link = "https://www.youtube.com/watch?v=VeNfHj6MhgA";
const task = ref("");

const changeStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "pending") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (task.value.trim() !== "") {
    tasks.value.push(task.value);
    task.value = "";
  }
};

const deleteTask = (index) => {
  if (tasks.value[index]) {
    tasks.value.splice(index, 1);
  }
};

onMounted(async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=7");
    const data = await response.json();
    tasks.value = data.map((task) => task.title);
  } catch (e) {
    console.log(e);
  }
});
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
    <li v-for="(task, index) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(index)">❌</button>
    </li>
  </ul>

  <br />

  <form @submit.prevent="addTask">
    <label for="newTask">New Task</label>
    <br />
    <input type="text" id="newTask" name="newTask" v-model="task" />
    <br />
    <button type="submit">Add task</button>
  </form>

  <br />

  <a v-bind:href="link">Link to this video</a>
  <br />
  <br />

  <a :href="link">Link to this video</a>

  <br />
  <br />
</template>

<style scoped>
li button {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
