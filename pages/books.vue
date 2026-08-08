<script setup lang="ts">
const { data: books } = await useAsyncData('books', () =>
  queryCollection('books').all()
)
</script>

<template>
  <div class="content-grid content-grid-4">
    <MediaCard
      v-for="book in books"
      :key="book.path"
      type="图书"
      :title="book.title"
      :cover="book.cover"
    />
  </div>
</template>
