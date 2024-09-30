<script setup>
import { useRoute } from 'vue-router'
import sportsData from '@/data/sports.json'

const route = useRoute()
const sportId = parseInt(route.params.sportId)
const countryId = parseInt(route.params.countryId)

const sport = sportsData.sports.find((sport) => sport.id === sportId)
const country = sport.countries.find((country) => country.id === countryId)
const leagues = country ? country.divisions : 'league not found'
</script>
<template>
  <div v-if="country">
    <h3>Leagues in {{ country.name }}</h3>
    <ul>
      <li v-for="league in leagues" :key="league.id">
        <router-link
          :to="{
            name: 'leagues',
            params: { sportId: sport.id, countryId: country.id, leagueId: league.id }
          }"
        >
          {{ league.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
