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

console.log(sport, country, league, match)
</script>

<template>
  <div class="match" v-if="match">
    <h2>{{ match.home_team }} vs {{ match.away_team }}</h2>
    <h4>1x2 Odds</h4>

    <!-- Check if markets exist and loop through the markets object -->
    <ul v-if="match.markets && Object.keys(match.markets).length">
      <li v-for="(marketValue, marketKey) in match.markets" :key="marketKey">
        {{ marketKey }}: {{ marketValue.name }}
      </li>
    </ul>

    <!-- Fallback if no markets exist -->
    <p v-else>No markets available for this match.</p>

    <h4>Home/Away Stats</h4>
    <!-- Loop through home_away array -->
    <ul v-if="match.home_away && match.home_away.length">
      <li v-for="(stat, index) in match.home_away" :key="index">
        Home: {{ stat.home }}, Away: {{ stat.away }}
      </li>
    </ul>

    <!-- Fallback if no home_away stats exist -->
    <p v-else>No home/away statistics available for this match.</p>
  </div>

  <!-- Fallback if match data is not found -->
  <div v-else>
    <p>Match data not found.</p>
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
