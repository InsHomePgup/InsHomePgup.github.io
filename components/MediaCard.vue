<script setup lang="ts">
const props = defineProps<{
  title: string
  cover?: string
  type?: string
}>()

const placeholderIcon: Record<string, string> = {
  电影: 'i-ri-film-line',
  剧集: 'i-ri-tv-2-line',
  音乐: 'i-ri-music-2-line',
}

const icon = placeholderIcon[props.type ?? ''] ?? 'i-ri-image-line'
</script>

<template>
  <div class="card media-card">
    <img v-if="cover" class="media-cover" :src="cover" :alt="title">
    <div v-else class="media-cover media-cover-placeholder">
      <span :class="icon" />
    </div>
    <div class="media-title">{{ title }}</div>
  </div>
</template>
