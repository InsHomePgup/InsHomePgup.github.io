<script setup lang="ts">
const navLinks = [
  { to: '/', label: '首页' },
  { to: '/books', label: '图书' },
  { to: '/sports', label: '运动' },
  { to: '/life', label: '生活' },
]
</script>

<template>
  <div class="page">
    <nav class="nav">
      <NuxtLink v-for="link in navLinks" :key="link.to" :to="link.to" class="nav-link">
        {{ link.label }}
      </NuxtLink>
    </nav>

    <slot />

    <div class="footer">© 2026 Abra X. Built with an Apple-style bento grid.</div>
  </div>
</template>
