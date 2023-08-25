<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div>
    <header>
      <Nav />
    </header>
    <main>
      <RouterView />
    </main>
    <footer>
    <Footer />
    </footer>
  </div>
</template>

<style scoped>

</style>
