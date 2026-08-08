<script setup lang="ts">
defineProps<{
  area: 'proj1' | 'proj2'
  accent: string
  title: string
  desc: string
  tags: string[]
  href: string
}>()
</script>

<template>
  <div class="card card-project" :class="area === 'proj1' ? 'card-proj1' : 'card-proj2'">
    <div class="project-eyebrow" :style="{ color: accent }">Project</div>
    <div class="project-title">{{ title }}</div>
    <div class="project-desc">{{ desc }}</div>
    <div class="project-tags">
      <span v-for="tag in tags" :key="tag" class="project-tag">{{ tag }}</span>
    </div>
    <a class="project-link" :style="{ color: accent }" :href="href" target="_blank" rel="noopener">
      View on GitHub ↗
    </a>
  </div>
</template>
