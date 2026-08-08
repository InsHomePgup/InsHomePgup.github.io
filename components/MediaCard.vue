<script setup lang="ts">
defineProps<{
  type: string
  title: string
  sub?: string
  note?: string
}>()
</script>

<template>
  <div class="card">
    <div class="media-type">{{ type }}</div>
    <div class="media-title">{{ title }}</div>
    <div v-if="sub" class="media-sub">{{ sub }}</div>
    <div v-if="note" class="media-note">{{ note }}</div>
  </div>
</template>
