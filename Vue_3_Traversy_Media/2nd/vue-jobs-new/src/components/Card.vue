<script setup>
    defineProps(
        {
            bg: {
                type: String,
                default: 'bg-gray-100'
            }
        }
    )
</script>

<template>
  <!-- <div class="p-6 rounded-lg shadow-md" :class="bg"> -->
  <div :class="`${bg} p-6 rounded-lg shadow-md`"> <!-- Remembered this approach.. -->
    <slot></slot>
  </div>
</template>
