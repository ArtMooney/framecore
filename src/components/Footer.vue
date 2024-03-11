<script setup>
import House from "../assets/House.vue";
import Star from "../assets/Star.vue";
import Heart from "../assets/Heart.vue";
import ArrowUp from "../assets/ArrowUp.vue";
</script>

<template>
  <div class="content footer center">
    <a href="../index.html" class="footer-logo w-inline-block"
      ><img src="../assets/Framecore-light-gray.svg" alt=""
    /></a>
    <div class="footerlink-block center">
      <div class="spacer-s"></div>
      <a href="/#read-more" class="footerlink">Tjänster</a>
      <a href="../case.html" class="footerlink">Kunder &amp; Case</a>
      <a href="../kontakt.html" class="footerlink">Kontakta oss</a>
    </div>
    <div class="footer-line"></div>
    <div class="some-wrapper">
      <House href="../index.html" class="icon-s solid footer" />
      <Star class="icon-s solid footer star" />
      <Heart class="icon-s solid footer heart" />
      <ArrowUp class="icon-s solid footer" />
      <div class="footer-blob heart">
        This website was made with
        <Heart class="icon-s solid footer heart heart-red" />
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

<style>
.icon-s.solid.footer.heart:hover ~ .footer-blob.heart {
  margin-left: 0rem;
  opacity: 1;
}

.icon-s.solid.footer.star:hover ~ .footer-blob.star {
  margin-left: 0rem;
  opacity: 1;
}

.heart-red {
  color: #dd4141 !important;
  transform: translateY(0.2rem);
}
</style>
