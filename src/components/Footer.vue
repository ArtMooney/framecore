<script setup>
import House from "../assets/House.vue";
import Star from "../assets/Star.vue";
import Heart from "../assets/Heart.vue";
import ArrowUp from "../assets/ArrowUp.vue";
</script>

<template>
  <div class="content footer center">
    <a class="footer-logo w-inline-block" href="#">
      <img src="../assets/Framecore-light-gray.svg" alt="" />
    </a>
    <div class="footerlink-block center">
      <div class="spacer-s"></div>
      <a class="footerlink" href="#read-more">Tjänster</a>
      <a class="footerlink" href="#">Kunder & Case</a>
      <a class="footerlink" href="#">Kontakta oss</a>
    </div>
    <div class="footer-line"></div>
    <div class="some-wrapper">
      <House href="../index.html" class="some-icon house" />
      <Star class="some-icon star" />
      <Heart class="some-icon heart" />
      <ArrowUp class="some-icon arrow" />
      <div class="footer-blob heart">
        This website was made with
        <Heart class="heart-red" />
        by FrameCore 2023
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
  margin-left: 0rem;
  opacity: 1;
}

.some-icon.star:hover ~ .footer-blob.star {
  margin-left: 0rem;
  opacity: 1;
}
</style>
