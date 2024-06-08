<script setup>
import { Vue3Lottie } from "vue3-lottie";
import NavbarLink from "../elements/NavbarLink.vue";
import Cube from "../assets/Cube.vue";
import MugHot from "../assets/MugHot.vue";
import sandwich from "../assets/burger-menu.json";
</script>

<template>
  <!--    <div id="navbar" class="content navbar">-->
  <div
    id="navbar"
    class="relative z-10 mb-4 mt-0 grid grid-cols-2 items-stretch justify-stretch justify-items-stretch gap-4 overflow-visible pb-0 pt-4 sm:grid-cols-[0.5fr,1fr] md:grid-cols-[0.25fr,1fr]"
  >
    <!--    <a href="/" class="navbar-logo"-->
    <a
      href="/"
      class="flex w-[86%] items-center transition-all duration-500 ease-in-out hover:m-2"
      ><img
        src="../assets/Framecore_color.svg"
        alt=""
        class="h-full w-full object-contain"
    /></a>

    <!--    <Transition name="navbar-links">-->
    <!--      <div v-if="mobileMenu" class="navbar-links">-->
    <!--      class="col-auto grid h-full auto-cols-max auto-rows-auto grid-cols-1 content-end items-stretch justify-end gap-1"-->
    <div
      v-if="mobileMenu"
      class="grid grid-flow-col content-end items-stretch justify-end gap-4 bg-transparent"
    >
      <NavbarLink path="/" hash="#services" :icon="Cube">Tjänster</NavbarLink>
      <NavbarLink path="/case" hash="" :icon="MugHot"
        >Kunder &amp; Case
      </NavbarLink>

      <a href="/contact" class="button navbutton w-button border"
        >Kontakta oss</a
      >
    </div>
    <!--    </Transition>-->

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

<style scoped>
.navlink:hover .navicon.blur {
  opacity: 100%;
}
</style>
