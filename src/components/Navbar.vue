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
    <div class="navbar-links">
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

    <Vue3Lottie
      :animationData="sandwich"
      class="navbar-sandwich large"
      :autoPlay="false"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
  metaInfo: {
    title: "Home",
    meta: [
      {
        name: "description",
        content: "Welcome to Framecore!",
      },
      // Add more meta tags as needed
    ],
  },

  data() {
    return {
      sandwich,
      message: "",
    };
  },
};
</script>

<style>
.navlink:hover .navicon.blur {
  opacity: 100%;
}
</style>
