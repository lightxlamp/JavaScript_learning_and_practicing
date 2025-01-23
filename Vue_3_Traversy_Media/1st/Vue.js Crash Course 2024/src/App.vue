<script>
export default {
  data() {
    return {
      name: "Stas",
      status: "pending",
      tasks: ["Task 1", "Task 2", "Task 3", "Task 4"],
      link: "https://www.youtube.com/watch?v=VeNfHj6MhgA",
    };
  },
  methods: {
    changeStatus_switch() {
      switch (this.status) {
        case 'active':
          this.status = 'pending'
          break;
        case 'pending':
          this.status = 'inactive'
          break;
        case 'inactive':
          this.status = 'active'
          break;
        default:
          console.error('Some wrong status')
      }
    },

    changeStatus() {
      if (this.status === "active") {
        this.status = "pending";
      } else if (this.status === "pending") {
        this.status = "inactive";
      } else {
        this.status = "active";
      }
    },
  },
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
