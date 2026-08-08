<script setup lang="ts">
const { data: entries } = await useAsyncData('life', () =>
  queryCollection('life').order('date', 'DESC').all()
)
</script>

<template>
  <div class="timeline">
    <TimelineItem v-for="entry in entries" :key="entry.path" :date="entry.date" :text="entry.text" />
  </div>
</template>
