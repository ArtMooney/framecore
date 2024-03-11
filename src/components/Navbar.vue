<script setup>
import { Vue3Lottie } from "vue3-lottie";

import Cube from "../assets/Cube.vue";
import MugHot from "../assets/MugHot.vue";
import sandwich from "../assets/burger-menu.json";
</script>

<template>
  <div class="content navbar">
    <a href="../index.html" class="navbar-logo"
      ><img src="../assets/Framecore_color.svg" alt="" class="image contain"
    /></a>

    <Transition name="navbar-links">
      <div v-if="mobileMenu" class="navbar-links">
        <div class="navbar-arrow"></div>
        <a href="/#read-more" class="navlink">
          <div>Tjänster</div>
          <div class="navicon-wrapper">
            <Cube class="navicon blur" />
            <Cube class="navicon" />
          </div>
        </a>
        <a href="../case.html" class="navlink">
          <div>Kunder &amp; Case</div>
          <div class="navicon-wrapper">
            <MugHot class="navicon blur" />
            <MugHot class="navicon" />
          </div>
        </a>
        <a href="../kontakt.html" class="button border navbutton w-button"
          >Kontakta oss</a
        >
      </div>
    </Transition>

    <div class="navbar-sandwich large" @click="mobileMenu = !mobileMenu">
      <Vue3Lottie
        ref="lottieSandwich"
        :animationData="sandwich"
        :autoPlay="false"
        :loop="false"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",

  data() {
    return {
      mobileMenu: window.innerWidth > 991 ? true : false,
      screenWidth: window.innerWidth,
    };
  },

  created() {
    window.addEventListener("resize", this.updateScreenWidth);
  },

  destroyed() {
    window.removeEventListener("resize", this.updateScreenWidth);
  },

  methods: {
    updateScreenWidth() {
      this.screenWidth = window.innerWidth;
    },
  },

  watch: {
    mobileMenu() {
      if (this.mobileMenu) {
        this.$refs.lottieSandwich.setSpeed(2);
        this.$refs.lottieSandwich.playSegments([7, 25], true);
      } else {
        this.$refs.lottieSandwich.setSpeed(2);
        this.$refs.lottieSandwich.playSegments([25, 7], true);
      }
    },
    screenWidth() {
      if (this.screenWidth > 991) {
        this.mobileMenu = true;
      } else {
        this.mobileMenu = false;
      }
    },
  },
};
</script>

<style>
.navlink:hover .navicon.blur {
  opacity: 100%;
}

.navbar-links-enter-active,
.navbar-links-leave-active {
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;
  display: grid;
}

.navbar-links-enter-from,
.navbar-links-leave-to {
  transform: translate(0, 3rem);
  opacity: 0;
}
</style>
