<script setup>
import { useRoute } from 'vue-router'
import sportsData from '@/data/sports.json'

const route = useRoute()
const sportId = parseInt(route.params.sportId)
const countryId = parseInt(route.params.countryId)
const leagueId = parseInt(route.params.leagueId)

const sport = sportsData.sports.find((sport) => sport.id === sportId)
const country = sport.countries.find((country) => country.id === countryId)
const league = country.divisions.find((league) => league.id === leagueId)
const matches = league ? league.games : 'no matches found for this league'
</script>
<template>
  <div v-if="matches">
    <h1>{{ sport.name }}</h1>
    <h2>{{ country.name }} - {{ league.name }}</h2>
    <ul>
      <li v-for="match in matches" :key="match.id">
        <router-link
          :to="{
            name: 'markets',
            params: {
              sportId: sport.id,
              countryId: country.id,
              leagueId: league.id,
              matchId: match.id
            }
          }"
        >
          {{ match.home_team }} vs
          {{ match.away_team }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
