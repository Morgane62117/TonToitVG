<template>
  <div class="footer">
    <p class="text-center">© 2023 Copyright:
      <span> Ton toit végétal</span>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
    background-color: var(--main-bg-color);
    color: var(--main-txt-color);
    margin-top: 5vh;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    font-weight: var(--txt-bold);
    box-shadow: var(--box-shadow);
    p {
      margin: 2vh;
      @media (max-width: 768px) {
        margin: 3.5vh;
        font-size: 14px;
      }
    }
}
</style>