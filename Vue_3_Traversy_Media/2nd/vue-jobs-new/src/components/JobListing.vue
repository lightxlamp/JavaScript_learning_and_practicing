<script setup>
import { defineProps, computed, ref } from "vue";

const props = defineProps({
  job: {
    type: Object,
    default: {},
  },
});

let showFullJobText = ref(false);


const computedDescription = computed(() => {
    if(!props.job?.description) return "No description available."
    if(showFullJobText.value) return props.job.description

    return props.job.description.substring(0, 90) + '...';
})

const toggleShowFullJobText = () => {
    showFullJobText.value = !showFullJobText.value;
}

</script>

<template>
  <div class="bg-white rounded-xl shadow-md relative">
    <div class="p-4">
      <div class="mb-6">
        <div class="text-gray-600 my-2">{{ job?.type || "Not specified" }}</div>
        <h3 class="text-xl font-bold">
          {{ job?.title || "No title provided" }}
        </h3>
      </div>

      <div class="mb-5">
        <div>{{ computedDescription }}</div>

        <button class="text-green-500 hover:text-green-600 mb-5" @click="toggleShowFullJobText">
            {{ showFullJobText ? 'Less' : 'More' }}
        </button>
       
      </div>

      <h3 class="text-green-500 mb-2">
        {{ job?.salary ? job.salary + " / Year" : "Salary not specified" }}
      </h3>

      <div class="border border-gray-100 mb-5"></div>

      <div class="flex flex-col lg:flex-row justify-between mb-4">
        <div class="text-orange-700 mb-3">
          <i class="fa-solid fa-location-dot text-lg"></i>
          {{ job?.location || "Location not specified" }}
        </div>
        <a
          v-if="job?.id"
          :href="'/job/' + job.id"
          class="h-[36px] bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
          Read More
        </a>
      </div>
    </div>
  </div>
</template>
