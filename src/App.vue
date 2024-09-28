<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink :to="{ name: 'home' }">Home</RouterLink>
      <RouterLink :to="{ name: 'sports' }">Sports</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style scoped></style>
