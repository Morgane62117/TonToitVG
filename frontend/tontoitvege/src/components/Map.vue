<template>
  <div class="map-container">Je suis la carte</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  .map-container {
    background-color: blue;
    height: 100%;
    width: 40%;
    color: var(--main-txt-color);
    box-shadow: var(--box-shadow);
    @media (max-width: 768px) {
        display: none;
    }
  }
</style>