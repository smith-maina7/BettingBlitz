<script setup>
import { useRoute } from 'vue-router'
import sportsData from '@/data/sports.json'

const route = useRoute()
const sportId = parseInt(route.params.sportId)
const countryId = parseInt(route.params.countryId)
const leagueId = parseInt(route.params.leagueId)
const matchId = parseInt(route.params.matchId)

const sport = sportsData.sports.find((sport) => sport.id === sportId)
const country = sport.countries.find((country) => country.id === countryId)
const league = country.divisions.find((league) => league.id === leagueId)
const match = league.games.find((match) => match.id === matchId)
</script>
<template>
  <div class="match">
    <h2>{{ match.home_team }} vs {{ match.away_team }}</h2>
    <h2>1x2 Odds</h2>
    <ul>
      <li v-for="market in markets.home_away" :key="market.id">
        {{ market.name }}: {{ market.odds }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.match {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}

.markets {
  margin-top: 10px;
}

.market {
  margin-top: 5px;
}
</style>
