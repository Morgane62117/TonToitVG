<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
import { RouterLink } from 'vue-router';
</script>

<template>
<div class="home-container">
  <div class="logo-container">
    <img src="@/assets/logo.png" width="400" height="400">
  </div>
  <RouterLink to="/chercher-toit">
    <div class=" card-container card">
      <img src="@/assets/toitvg.png" class="card-img-top">
      <div class="card-body">
        <h2 class="card-title">Je cherche un toit</h2>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </RouterLink>
  <RouterLink to="/proposer-toit">
    <div class="card">
      <img src="@/assets/toitvg2.png" class="card-img-top">
      <div class="card-body">
        <h2 class="card-title">Je propose un toit</h2>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
  </RouterLink>
</div>
</template>
<style lang="scss" scoped>
  .home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    .logo-container {
      @media (min-width: 768px) {
        margin-right: 5vw;
      }
      img {
        @media (max-width: 768px) {
          width: 100%;
        }
      }
    }

    .card {
      margin-right: 5vw;
      width: 25vw;
      box-shadow: var(--box-shadow);
      &:hover {
        opacity: 0.7;
      }
      @media (max-width: 768px) {
        width: 80%;
        margin: 5vh auto;
      }
      .card-img-top {
        height: 27vh;
      }
      .card-title {
        text-align: center;
        padding: 4vh 0;
      }
      .card-text {
        padding: 0 2.5vw 3.5vh;
        text-align: center;
      }
    }
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
</style>
