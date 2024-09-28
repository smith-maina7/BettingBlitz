<script setup></script>

<template>
  <nav>
    <!-- Logo with link to home -->
    <div class="navbar-logo">
      <!-- <router-link to="/">
        <img src="../assets/Images/Others/bettingblitz2.png" alt="logo" class="navbar-logo-img" />
      </router-link> -->
    </div>

    <!-- Navigation Links -->
    <div class="navbar-links">
      <!-- Home link -->
      <router-link to="/" class="navbar-link">Home</router-link>

      <!-- sports link -->
      <div class="navbar-link">
        <router-link :to="{ name: 'sports' }" class="navbar-link">Sports</router-link>
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Your styling remains unchanged */
</style>
