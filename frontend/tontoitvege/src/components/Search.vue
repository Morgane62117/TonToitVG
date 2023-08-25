<template>
  <div class="search-container">
    <h5>Filtrer par :</h5>
    <div class="filter-container">
        <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Immeuble</option>
            <option value="1">Immeuble</option>
            <option value="2">Parking</option>
            <option value="3">Ecole</option>
            <option value="4">Particulier</option>
            <option value="4">Entrepôt</option>
        </select>
        <label for="floatingSelect">Bâtiment</label>
        </div>
        <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>De 50 à 100m²</option>
            <option value="1">De 10 à 50m²</option>
            <option value="2">De 50 à 100m²</option>
            <option value="3">De 100 à 500m²</option>
            <option value="4">Plus de 500m²</option>
        </select>
        <label for="floatingSelect">Surface</label>
        </div>
        <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Immédiatement</option>
            <option value="1">Immédiatement</option>
            <option value="2">Dans 1 à 3 mois</option>
            <option value="3">Au-delà de 3 mois</option>
        </select>
        <label for="floatingSelect">Date de disponibilité</label>
        </div>
        <div class="form-floating">
        <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Particulier</option>
            <option value="1">Particulier</option>
            <option value="2">Collectivité</option>
            <option value="3">Entreprise</option>
        </select>
        <label for="floatingSelect">Propriétaire</label>
        </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.search-container {
  margin-bottom: 8vh;
    @media (max-width: 768px) {
        margin-bottom: 5vh;    
    }
  .filter-container {
    display: flex;
    justify-content: flex-start;
    @media (max-width: 768px) {
        flex-wrap: wrap;
    }
    .form-floating {
        margin-top: 1vw;
        margin-right: 3vw;
        .form-select{
            box-shadow: var(--box-shadow);
            padding-right: 6vw;
            @media (max-width: 768px) {
                padding-right: 8vw;
            }
        }
    }
   }
}
</style>
