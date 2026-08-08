<script setup lang="ts">
defineProps<{
  icon: string
  name: string
}>()
</script>

<template>
  <div class="card sport-card">
    <span class="sport-icon" :class="icon" />
    <span class="sport-name">{{ name }}</span>
  </div>
</template>
