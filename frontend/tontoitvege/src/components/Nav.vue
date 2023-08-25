<template>
  <div class="wrapper">
    <nav class="navbar" v-if="isDesktop">
      <RouterLink to="/" class="navimage">
        <img
          src="@/assets/favicon.png"
          alt="Logo"
          width="50"
          height="50"
        />
      </RouterLink>
      <RouterLink to="/">Accueil</RouterLink>
      <RouterLink to="/chercher-toit">Chercher un toit</RouterLink>
      <RouterLink to="/proposer-toit">Proposer un toit</RouterLink>
    </nav>


    <nav class="navbar navbar-mobile" v-else>
        <RouterLink to="/" class="navimage">
          <img
            src="@/assets/favicon.png"
            alt="Logo"
            width="50"
            height="50"
          />
        </RouterLink>
        <button class="navbar-toggler first-button collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent20"
          aria-controls="navbarSupportedContent20" aria-expanded="false" aria-label="Toggle navigation" @click="openAndCollapseNav">
          <div class="animated-icon1"><span></span><span></span><span></span></div>
        </button>
        <!-- Collapsible content -->
        <div class="navbar-collapse collapse" id="navbarSupportedContent20">
              <RouterLink to="/">Accueil</RouterLink>
              <RouterLink to="/chercher-toit">Chercher un toit</RouterLink>
              <RouterLink to="/proposer-toit">Proposer un toit</RouterLink>
        </div>
        <!-- Collapsible content -->
      </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
  data(){
    return {
      isDesktop: Boolean
    }
  },
  methods: {
    openAndCollapseNav() {
      let button = document.querySelector('.first-button');
      let icon = document.querySelector('.animated-icon1');
      let collapsibleContent = document.querySelector('.navbar-collapse');
      icon.classList.toggle('open');
      if(button.classList.contains('collapsed')) {
        button.classList.remove('collapsed');
      }
      collapsibleContent.classList.toggle('show');
    },
    resize() {
      if(window.matchMedia("(max-width: 768px)").matches) {
        this.isDesktop = false;
      } else {
        this.isDesktop = true;
      }
    }
  },
  created() {
    if(window.matchMedia("(max-width: 768px)").matches) {
      this.isDesktop = false;
    }
    window.addEventListener("resize", this.resize);
  },
  unmounted() {
     window.removeEventListener("resize", this.resize);
  }
}
</script>

<style lang="scss" scoped>
.navbar{
    background-color: var(--main-bg-color);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-weight: var(--txt-bold);
    box-shadow: var(--box-shadow);

    a {
        margin-left: 10vw;
        margin: 0.8vh 10vw 0.8vh 0;
        .router-link-active {
            border-bottom: 2px var(--main-txt-color) solid;
        }
        &:first-child:hover {
            border-bottom: none;
        }
    }
    .navimage {
        margin-left: 3vw;
        img {
            border-radius: 50%;
        }
    }
}

/* CSS ouverture burger menu mobile */ 

.animated-icon1 {
  width: 30px;
  height: 20px;
  position: relative;
  margin: 0px;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;
}

.animated-icon1 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  border-radius: 9px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
}

.animated-icon1 span {
  background: var(--main-txt-color);
}

.animated-icon1 span:nth-child(1) {
  top: 0px;
}

.animated-icon1 span:nth-child(2) {
  top: 10px;
}

.animated-icon1 span:nth-child(3) {
  top: 20px;
}

.animated-icon1.open span:nth-child(1) {
  top: 11px;
  -webkit-transform: rotate(135deg);
  -moz-transform: rotate(135deg);
  -o-transform: rotate(135deg);
  transform: rotate(135deg);
}

.animated-icon1.open span:nth-child(2) {
  opacity: 0;
  left: -60px;
}

.animated-icon1.open span:nth-child(3) {
  top: 11px;
  -webkit-transform: rotate(-135deg);
  -moz-transform: rotate(-135deg);
  -o-transform: rotate(-135deg);
  transform: rotate(-135deg);
}


.navbar-mobile {
  justify-content: space-between;
  .navbar-toggler {
    border: none;
    color: transparent;
  }
  .navbar-collapse {
    display: flex;
    flex-direction: column;
    a {
      margin: 1vh 0;
      padding: 1.5vh 0;
      .router-link-active {
        border-bottom: var(--main-txt-color) 2px solid;
      }
      &:last-child {
        margin-bottom: 1.5vh;
      }
    }
  }
  .collapse:not(.show) {
    display: none;
  }
}
</style>
