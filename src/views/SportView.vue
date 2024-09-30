<script setup>
import sportsData from '../data/sports.json'
import { useRoute } from 'vue-router'

const route = useRoute()
const sportId = parseInt(route.params.id)

const sport = sportsData.sports.find((sport) => sport.id === sportId)
</script>
<template>
  <div v-if="sport">
    <ul>
      <li v-for="country in sport.countries" :key="country.id">
        <router-link
          :to="{ name: 'countries', params: { sportId: sport.id, countryId: country.id } }"
        >
          {{ country.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
