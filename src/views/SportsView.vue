<script setup>
import sportsData from '../data/sports.json'
</script>
<template>
  <div>
    <ul>
      <li v-for="sport in sportsData.sports" :key="sport.id">
        <router-link :to="{ name: 'sport', params: { id: sport.id } }">
          {{ sport.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
