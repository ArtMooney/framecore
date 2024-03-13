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

<style scoped>
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

.content {
  position: relative;

  display: grid;
  margin-top: 1rem;
  margin-bottom: 4rem;
  justify-content: stretch;
  justify-items: stretch;
  align-items: stretch;
  align-content: stretch;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-areas: ".";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
}

@media screen and (max-width: 767px) {
  .content {
    grid-template-columns: 1fr;
  }
}

@media screen and (max-width: 479px) {
  .content {
    grid-auto-rows: auto;
  }
}

.content.footer {
  margin-bottom: 0rem;
  padding: 3rem 1rem 5rem;
  grid-template-columns: 1fr 1fr 1fr;

  background-image: linear-gradient(
      to bottom,
      hsla(19.999999999999975, 4.76%, 24.71%, 0.93),
      hsla(19.999999999999975, 4.76%, 24.71%, 0.93)
    ),
    url("https://uploads-ssl.webflow.com/5a770d8f4323220001d73352/63baf057fe573c3e2c66adca_pexels-iva-mu.jpg");
  background-position:
    0px 0px,
    0px 0px;
  background-size: auto, cover;
}

@media screen and (max-width: 479px) {
  .content.footer {
    padding-top: 3rem;
    padding-bottom: 3rem;
    grid-auto-flow: row;
    grid-auto-rows: auto;
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
}

.content.footer.center {
  grid-template-columns: 1fr;
}

.content.navbar {
  z-index: 1;

  overflow: visible;
  margin-top: 0rem;
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-bottom: 0rem;
  grid-template-columns: 0.25fr 1fr;
}

@media screen and (max-width: 991px) {
  .content.navbar {
    z-index: 100;
    margin-bottom: 1.5rem;
    padding-top: 1.5rem;
    grid-template-columns: 0.5fr 1fr;
  }
}

@media screen and (max-width: 767px) {
  .content.navbar {
    margin-bottom: 1rem;
    padding-top: 1rem;
  }
}

@media screen and (max-width: 479px) {
  .content.navbar {
    grid-template-columns: 1fr 1fr;
  }
}

.content.quote {
  padding-top: 2rem;
  padding-bottom: 2rem;
  grid-template-columns: 1fr;
}

@media screen and (max-width: 991px) {
  .content.quote {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.content.heading {
  min-height: 35rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  grid-template-rows: auto auto auto;
}

@media screen and (max-width: 991px) {
  .content.heading {
    grid-template-columns: 2rem 1fr 2rem;
  }
}

@media screen and (max-width: 479px) {
  .content.heading {
    grid-template-columns: 1rem 1fr 1rem;
  }
}

.heading {
  font-family: Exo, sans-serif;
}

.content.heading.slim {
  min-height: 0rem;
  grid-template-rows: auto;
}

.content.heading.full {
  min-height: 50rem;
}

@media screen and (max-width: 767px) {
  .content.heading.full {
    min-height: 35rem;
  }
}

@media screen and (max-width: 479px) {
  .content.heading.full {
    min-height: 50rem;
  }
}

.full {
  height: 100vh;
  min-height: 50rem;
}

.content.heading.video {
  min-height: 0px;
  padding-top: 0rem;
  padding-bottom: 0rem;
  grid-template-rows: auto;
}

@media screen and (max-width: 767px) {
  .content.heading.video {
    grid-template-columns: 1rem 1fr 1rem;
  }
}

@media screen and (max-width: 479px) {
  .content.heading.video {
    grid-template-columns: 2rem 1fr 2rem;
    grid-template-rows: auto auto;
  }
}

.content.instagram {
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
}

@media screen and (max-width: 767px) {
  .content.instagram {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 479px) {
  .content.instagram {
    grid-template-columns: 1fr 1fr;
  }
}

.content.product-list {
  padding-top: 2rem;
  padding-bottom: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

@media screen and (max-width: 991px) {
  .content.product-list {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 767px) {
  .content.product-list {
    padding-top: 0rem;
    padding-bottom: 0rem;
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 479px) {
  .content.product-list {
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
  }
}

.content.full {
  height: auto;
  min-height: 100vh;
}

.content.blog-list {
  grid-template-columns: 1fr 1fr;
}

@media screen and (max-width: 767px) {
  .content.blog-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 479px) {
  .content.blog-list {
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr;
  }
}

.content.contact {
  grid-template-columns: 0.25fr 1fr 0.25fr;
}

@media screen and (max-width: 767px) {
  .content.contact {
    grid-template-columns: 1fr;
  }
}

.content.shifted {
  grid-template-columns: 0.25fr 1fr 1fr 1fr 1fr 0.25fr;
}

@media screen and (max-width: 767px) {
  .content.shifted {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

@media screen and (max-width: 479px) {
  .content.shifted {
    grid-template-columns: 2rem 1fr 2rem;
  }
}

.content.accordition {
  padding-top: 4rem;
  padding-bottom: 5rem;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  grid-template-rows: auto;
}

@media screen and (max-width: 991px) {
  .content.accordition {
    grid-template-columns: 2rem 1fr 2rem;
  }
}

@media screen and (max-width: 767px) {
  .content.accordition {
    padding-top: 2rem;
    padding-bottom: 3rem;
    grid-template-columns: 1fr;
  }
}

.content._1-2 {
  grid-template-columns: 0.5fr 1fr;
}

@media screen and (max-width: 991px) {
  .content._1-2 {
    grid-template-columns: 0.75fr 1fr;
  }
}

@media screen and (max-width: 767px) {
  .content._1-2 {
    grid-template-columns: 1fr;
  }
}

.content._2-1 {
  grid-template-columns: 1fr 0.5fr;
}

@media screen and (max-width: 991px) {
  .content._2-1 {
    grid-template-columns: 1fr 0.75fr;
  }
}

@media screen and (max-width: 767px) {
  .content._2-1 {
    grid-template-columns: 1fr;
  }
}

.content.gallery {
  padding-top: 2rem;
  padding-bottom: 2rem;
  grid-template-columns: 1fr;
}

@media screen and (max-width: 991px) {
  .content.gallery {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}

.footer-logo {
  width: 11.1rem;
  flex-direction: column;
  align-items: center;

  transition-property: transform;
  transition-duration: 400ms;
  transition-timing-function: ease;

  justify-self: center;
}

.footer-logo:hover {
  transform: scale(1.03);
}

@media screen and (max-width: 767px) {
  .footer-logo {
    width: 6.8rem;
  }
}

.footerlink-block {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

@media screen and (max-width: 479px) {
  .footerlink-block {
    width: 100%;
    align-items: center;
  }
}

.footerlink-block.center {
  align-items: center;
}

.spacer-s {
  display: block;
  width: 1rem;
  height: 1rem;
  flex: 0 0 auto;
}

.footerlink {
  margin-bottom: 0.7rem;
  color: #989898;
  text-decoration: none;
}

.footerlink:hover {
  color: hsla(0, 0%, 72.67%, 0.93);
}

@media screen and (max-width: 767px) {
  .footerlink {
    margin-bottom: 0.5rem;
  }
}

.footer-line {
  width: 63%;
  height: 2px;
  margin-top: 2rem;
  margin-bottom: 1rem;

  background-color: hsla(0, 0%, 100%, 0.29);

  justify-self: center;
}

.some-wrapper {
  display: grid;
  justify-content: start;
  justify-items: start;
  align-items: center;
  grid-auto-flow: column;
  grid-auto-columns: auto;
  grid-column-gap: 0.3rem;
  grid-row-gap: 0.3rem;
  grid-template-columns: auto;
  grid-template-rows: auto;

  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: ease;

  justify-self: center;
}

.some-wrapper:hover {
  grid-column-gap: 0.7rem;
}

.hide1 {
  display: none;
}

.icon-s {
  display: inline-block;
  width: 1.1rem;
  height: 1.1rem;

  font-family: "Fa 400";
  font-size: 1.1rem;
  line-height: 1.1rem;

  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .icon-s {
    font-size: 1rem;
    line-height: 1rem;
  }
}

.icon-s.brands {
  font-family: "Fa brands 400";
  font-weight: 400;
  text-decoration: none;
}

.icon-s.brands.footer {
  color: hsla(0, 0%, 74%, 1);
}

.icon-s.brands.footer:hover {
  color: hsla(0, 0%, 84.67%, 1);
}

.icon-s.solid {
  font-family: "Fa solid 900";
  font-weight: 400;
  text-decoration: none;
}

.icon-s.solid.arrowbutton {
  display: flex;
  width: 3rem;
  height: 3rem;
  justify-content: center;
  align-items: center;

  border-style: solid;
  border-width: 0.125rem;
  border-color: hsla(0, 0%, 100%, 1);
  border-radius: 100%;
}

@media screen and (max-width: 767px) {
  .icon-s.solid.arrowbutton {
    width: 2rem;
    height: 2rem;
  }
}

.icon-s.solid.navbutton {
  margin-left: 0.3rem;
  transition: text-shadow 400ms ease;
  color: hsla(40, 40.92%, 59.38%, 1);
}

.icon-s.solid.navbutton:hover {
  text-shadow:
    0 0 15px #48b5f8,
    0 0 15px hsla(203, 92.83%, 62.79%, 1);
}

.icon-s.solid.footer {
  color: #bdbdbd;
}

.icon-s.solid.footer:hover {
  color: #d8d8d8;
}

.footer-blob {
  position: absolute;
  left: auto;
  top: auto;
  right: auto;
  bottom: 1.8rem;

  margin-left: -3rem;
  padding: 0.3rem 0.8rem;

  border-radius: 0.3rem;

  background-color: hsla(0, 0%, 0%, 0.5);

  opacity: 0;

  transition:
    margin-left 200ms ease,
    opacity 200ms ease;

  font-size: 0.9rem;
  line-height: 1.2rem;

  cursor: default;
}

@media screen and (max-width: 991px) {
  .footer-blob.heart {
    left: 14.1rem;
  }
}

@media screen and (max-width: 767px) {
  .footer-blob.heart {
    left: 7.4rem;
  }
}

@media screen and (max-width: 479px) {
  .footer-blob.heart {
    left: 0rem;
    bottom: 4.5rem;
  }
}

@media screen and (max-width: 479px) {
  .footer-blob.star {
    bottom: 5rem;
  }
}

.text-span {
  font-family: Oswald, sans-serif;
}

.text-span-2 {
  font-family: "Open Sans", sans-serif;
}

.text-span-3 {
  font-family: Montserrat, sans-serif;
}

.text-span-4 {
  font-family: Merriweather, serif;
}

.text-span-5 {
  font-family: Neuropol;
}

.text-span-6 {
  font-family: "Fa brands 400";
}

.text-span-7 {
  font-family: "Fa solid 900";
}

.text-span-8 {
  font-family: "Fa brands 400";
}

.text-span-9 {
  font-family: "Fa 400";
}

.text-span-10 {
  font-family: "Fa brands 400";
}

.text-span-11 {
  font-family: "Fa solid 900";
  color: hsla(0, 69.63%, 56.1%, 1);
}
</style>
