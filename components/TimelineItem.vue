<script setup lang="ts">
defineProps<{
  date: string
  text: string
}>()
</script>

<template>
  <div class="card timeline-item">
    <span class="timeline-date">{{ date }}</span>
    <span class="timeline-text">{{ text }}</span>
  </div>
</template>
