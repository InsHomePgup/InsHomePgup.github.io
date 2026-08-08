<script setup lang="ts">
const { data: movies } = await useAsyncData('movies', () =>
  queryCollection('movies').all()
)
</script>

<template>
  <div class="content-grid">
    <MediaCard
      v-for="movie in movies"
      :key="movie.path"
      :type="movie.type"
      :title="movie.title"
      :cover="movie.cover"
    />
  </div>
</template>
