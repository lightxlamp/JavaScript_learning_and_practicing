<script setup>
    import jobsData from '../jobs.json'
    import { ref } from 'vue';

    const jobs = ref(jobsData);
</script>

<template>
    <div v-for="job in jobs" :key="job.id">{{ job.title }}</div>
</template>