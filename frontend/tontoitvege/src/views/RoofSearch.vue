<template>
  <div class="list-container-page">
    <Search></Search>
    <div class="list-container-main">
      <CardList></CardList>
      <Map></Map>
    </div>
    <Pagination></Pagination>
  </div>
</template>

<script>
import CardList from '../components/CardList.vue'
import Map from '../components/Map.vue'
import Search from '../components/Search.vue'
import Pagination from '../components/Pagination.vue'

export default {
  components: { Map, CardList, Search, Pagination },
}
</script>

<style lang="scss" scoped>
.list-container-page {
    margin-bottom: 14vh;
    width: 90vw;
    margin: auto;
    margin-top: 5vh;
    .list-container-main {
    display: flex;
    @media (max-width: 768px) {
      flex-direction: column;
    }
  }
}
</style>