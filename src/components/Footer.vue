<script setup>
import House from "../assets/House.vue";
import Star from "../assets/Star.vue";
import Heart from "../assets/Heart.vue";
import ArrowUp from "../assets/ArrowUp.vue";
</script>

<template>
  <div class="content footer center">
    <a class="footer-logo w-inline-block" href="/">
      <img src="../assets/Framecore-light-gray.svg" alt="" />
    </a>
    <div class="footerlink-block center">
      <div class="spacer-s"></div>
      <router-link class="footerlink" :to="{ path: '/', hash: '#services' }">
        Tjänster
      </router-link>
      <a class="footerlink" href="/case">Kunder & Case</a>
      <a class="footerlink" href="/contact">Kontakta oss</a>
    </div>
    <div class="footer-line"></div>
    <div class="some-wrapper">
      <router-link to="/" class="some-icon house">
        <House />
      </router-link>
      <Star class="some-icon star" />
      <Heart class="some-icon heart" />
      <router-link class="some-icon arrow" :to="{ hash: '#navbar' }">
        <ArrowUp />
      </router-link>
      <div class="footer-blob heart">
        This website was made with
        <Heart class="heart-red" />
        by FrameCore 2024
      </div>
      <div class="footer-blob star">You are amazing!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.some-icon.heart:hover ~ .footer-blob.heart {
  margin-left: 0;
  opacity: 1;
}

.some-icon.star:hover ~ .footer-blob.star {
  margin-left: 0;
  opacity: 1;
}
</style>
