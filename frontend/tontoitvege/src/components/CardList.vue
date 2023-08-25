<template>
  <div class="list-container">
    <div class="card-container card text-center">
      <img src="@/assets/toitvg.png" class="card-img-top" />
      <div class="card-body">
        <h2 class="card-title">Toit d'immeuble</h2>
        <div class="card-body-left">
            <h3 class="card-subtitle">Caractéristiques</h3>
            <p class="card-text"><span class="card-subtitle-info">Bâtiment concerné : </span>Ecole</p>
            <p class="card-text"><span class="card-subtitle-info">Surface : </span> 60m²</p>
            <p class="card-text"><span class="card-subtitle-info">Exposition : </span>Sud</p>
            <p class="card-text"><span class="card-subtitle-info">Disponible dans : Moins de 3 mois</span></p>
            <p class="card-text"><span class="card-subtitle-info">Propriétaire : </span>Collectivité</p>
        </div>
        <button type="button" class="card-btn btn btn-lg">Découvrir ce toit</button>
      </div>
    </div>
    <div class="card-container card text-center">
      <img src="@/assets/toitvg.png" class="card-img-top" />
      <div class="card-body">
        <h2 class="card-title">Toit de parking</h2>
        <div class="card-body-left">
            <h3 class="card-subtitle">Caractéristiques</h3>
            <p class="card-text"><span class="card-subtitle-info">Bâtiment concerné : </span>Ecole</p>
            <p class="card-text"><span class="card-subtitle-info">Surface : </span> 60m²</p>
            <p class="card-text"><span class="card-subtitle-info">Exposition : </span>Sud</p>
            <p class="card-text"><span class="card-subtitle-info">Disponible dans : Moins de 3 mois</span></p>
            <p class="card-text"><span class="card-subtitle-info">Propriétaire : </span>Collectivité</p>
        </div>
        <button type="button" class="card-btn btn btn-lg">Découvrir ce toit</button>
      </div>
    </div>
    <div class="card-container card text-center">
      <img src="@/assets/toitvg.png" class="card-img-top" />
      <div class="card-body">
        <h2 class="card-title">Toit pour apiculture</h2>
        <div class="card-body-left">
            <h3 class="card-subtitle">Caractéristiques</h3>
            <p class="card-text"><span class="card-subtitle-info">Bâtiment concerné : </span>Ecole</p>
            <p class="card-text"><span class="card-subtitle-info">Surface : </span> 60m²</p>
            <p class="card-text"><span class="card-subtitle-info">Exposition : </span>Sud</p>
            <p class="card-text"><span class="card-subtitle-info">Disponible dans : Moins de 3 mois</span></p>
            <p class="card-text"><span class="card-subtitle-info">Propriétaire : </span>Collectivité</p>
        </div>
        <button type="button" class="card-btn btn btn-lg">Découvrir ce toit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.list-container {
    width: 60%;
    @media (max-width: 768px) {
        width: 100%;
    }
    .card-container {
        margin-bottom: 7vh;
        box-shadow: var(--box-shadow);
        &:hover {
            opacity: 0.7;
        }
        @media (min-width: 768px) {
            width: 65vh;
        }
        img {
            width: 100%;
            height: 30vh;
        }
        .card-img-top {
            height: 27vh;
        }
        .card-title {
            padding: 4vh 0;
        }
        .card-body-left{
            text-align: left;
            padding: 0 2.5vw;
        }
        .card-subtitle {
            font-size: 20px;
            font-weight: var(--txt-bold);
            color: var(--main-bg-color);
            padding-bottom: 1vh;
            &-info {
                font-size: 16px;
                font-weight: var(--txt-bold);
            }
        }
        .card-text {
            text-align: left;
            margin-bottom: 0;
        }
        .card-btn {
            background-color: var(--main-bg-color);
            color: var(--main-txt-color);
            font-weight: var(--txt-bold);
            font-size: 17px;
            width: 70%;
            margin: 3vh 0 2vh;
        }
    }
}
</style>
