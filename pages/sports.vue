<script setup lang="ts">
const { data: sports } = await useAsyncData('sports', () =>
  queryCollection('sports').all()
)
</script>

<template>
  <div class="content-grid">
    <SportCard v-for="sport in sports" :key="sport.path" :icon="sport.icon" :name="sport.name" />
  </div>
</template>
