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

<style scoped>
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

.content-frame {
  width: 100%;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  grid-auto-columns: 1fr;
  grid-template-columns: minmax(12rem, 0.25fr) 1fr minmax(12rem, 0.25fr);
  grid-template-rows: auto;
}

@media screen and (max-width: 479px) {
  .content-frame {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}

.hide1 {
  display: none;
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

.navbar-logo {
  display: flex;
  width: 86%;
  align-items: center;
  transition: margin 200ms ease;
}

.navbar-logo:hover {
  margin-left: 0.5rem;
}

@media screen and (max-width: 991px) {
  .navbar-logo {
    width: 80%;
  }
}

@media screen and (max-width: 767px) {
  .navbar-logo {
    width: 100%;
  }
}

.image {
  width: 100%;
  height: 100%;
  transition: transform 400ms ease;
  object-fit: cover;
}

.image:hover {
  transform: scale(1.01);
}

.image.product {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;

  width: 100%;
  height: 100%;
}

.image.blog {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;

  width: 100%;
  height: 100%;
}

.image.contain {
  object-fit: contain;
}

.image.full {
  width: 100%;
  height: 100%;
}

.image.instagram {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;

  width: 100%;
  height: 100%;
}

.image.slow-scroll {
  height: auto;
  min-height: 100vh;
  transition-property: none;
}

.image.lightbox {
  position: relative;

  display: flex;
  max-width: 85%;
  justify-content: center;
  align-items: center;

  object-fit: contain;
}

@media screen and (max-width: 991px) {
  .image.lightbox {
    max-width: 80%;
  }
}

@media screen and (max-width: 479px) {
  .image.lightbox {
    max-width: 100%;
  }
}

.image.lightbox.source-wrapper {
  display: flex;
  max-width: none;
  justify-content: center;
  align-items: center;
}

.navbar-links {
  display: grid;
  justify-content: flex-end;
  justify-items: stretch;
  align-items: center;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template-columns: max-content;
  grid-template-rows: auto;

  background-color: transparent;
}

@media screen and (max-width: 991px) {
  .navbar-links {
    position: absolute;
    left: auto;
    top: 4.7rem;
    right: 0.7rem;
    bottom: auto;
    z-index: 1;

    padding: 1.5rem 1.5rem 2rem;
    justify-items: center;
    align-items: center;
    grid-auto-flow: row;
    grid-auto-columns: max-content;
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
    grid-template-columns: max-content;
    grid-template-rows: auto;

    border-radius: 0.2rem;

    background-color: #444442;
  }
}

@media screen and (max-width: 767px) {
  .navbar-links {
    position: absolute;
    left: auto;
    top: 4rem;
    right: 0.6rem;
    bottom: auto;
    z-index: 1;

    flex-direction: column;
    grid-auto-columns: max-content;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-template-columns: max-content;
    grid-template-rows: auto;
  }
}

@media screen and (max-width: 479px) {
  .navbar-links {
    top: 3.9rem;
    right: 0.4rem;
    grid-column-gap: 0.25rem;
    grid-row-gap: 1rem;
  }
}

.navbar-arrow {
  display: none;
}

@media screen and (max-width: 991px) {
  .navbar-arrow {
    position: absolute;
    left: 88%;
    top: -5%;
    right: auto;
    bottom: auto;

    display: block;
    padding-right: 0px;
    padding-bottom: 0px;

    border-style: solid;
    border-width: 0rem 0.7rem 1rem;
    border-color: hsla(224, 0%, 0%, 0) hsla(126, 0%, 0%, 0) #444442
      hsla(0, 0%, 0%, 0);
  }
}

@media screen and (max-width: 767px) {
  .navbar-arrow {
    left: 86%;
  }
}

.navlink {
  display: flex;
  align-items: center;
  transition: transform 200ms ease;
  text-decoration: none;
}

.navlink:hover {
  transform: scale(1.03);
}

@media screen and (max-width: 991px) {
  .navlink {
    justify-self: end;
  }
}

@media screen and (max-width: 767px) {
  .navlink {
    position: relative;
    padding-right: 0rem;
  }
}

.navicon-wrapper {
  position: relative;
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.3rem;
}

.navicon {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;

  width: 1.1rem;
  height: 1.1rem;

  transition: opacity 400ms ease;

  color: #c2a66d;
  font-size: 1.1rem;
  line-height: 1.1rem;
}

.navicon.blur {
  left: -16%;
  top: -9%;

  width: 1.5rem;
  height: 1.5rem;

  opacity: 0;
  filter: blur(6px);

  color: #48b5f8;
}

.button {
  min-width: 10rem;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 0.5rem 1.5rem;

  border-radius: 0.3rem;

  background-color: hsla(0, 0%, 98%, 1);

  transition:
    transform 400ms ease,
    background-color 200ms ease;

  font-size: 1rem;
  line-height: 1.5rem;
  text-align: center;
}

.button:hover {
  background-color: hsla(0, 0%, 90.67%, 1);
  transform: translate(-4px, 0px);
  color: hsla(0, 0%, 0%, 0.7);
}

@media screen and (max-width: 767px) {
  .button {
    min-width: 8rem;
    padding-right: 1rem;
    padding-left: 1rem;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }
}

.button.darkmode {
  background-color: #5e5e5e;
  color: hsla(0, 0%, 100%, 1);
}

.button.darkmode:hover {
  background-color: hsla(0, 0%, 50%, 1);
  color: hsla(0, 0%, 100%, 0.7);
}

.button.darkmode.border {
  border: 0.125rem solid #e6e6e6;
}

.button.border {
  border: 0.125rem solid #e6e6e6;
  color: hsla(7, 0%, 0%, 1);
}

.button.border.darkmode {
  color: hsla(7, 0%, 100%, 1);
}

.button.border.darkmode:hover {
  color: rgba(255, 255, 255, 0.7);
}

.button.border.navbutton {
  min-width: 0rem;
  transition:
    transform 200ms ease,
    background-color 200ms ease;
  color: hsla(0, 0%, 0%, 1);
}

.button.border.navbutton:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 991px) {
  .button.border.navbutton {
    margin-top: 1rem;
  }
}

.button.arrow-anim {
  display: flex;
  max-width: 10rem;
  justify-content: space-between;
  transition:
    padding 200ms ease,
    background-color 200ms ease;
  color: hsla(0, 0%, 0%, 1);
}

.button.arrow-anim:hover {
  padding-right: 0.9rem;
  transform: none;
}

.button.black {
  color: hsla(0, 0%, 0%, 1);
}

.button.outline {
  border: 0.125rem solid #e6e6e6;
  background-color: transparent;
  color: hsla(7, 0%, 100%, 1);
}

.button.outline.navbutton {
  min-width: 0rem;
  transition:
    transform 200ms ease,
    background-color 200ms ease;
  color: hsla(0, 0%, 100%, 1);
}

.button.outline.navbutton:hover {
  transform: scale(1.05);
}

@media screen and (max-width: 991px) {
  .button.outline.navbutton {
    margin-top: 1rem;
  }
}

.navbar-sandwich {
  position: relative;

  display: none;
  width: 1.6rem;
  height: 1.6rem;

  filter: invert(100%);

  cursor: pointer;
}

@media screen and (max-width: 991px) {
  .navbar-sandwich {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  .navbar-sandwich {
    width: 1.5rem;
    height: 1.5rem;
  }
}

@media screen and (max-width: 479px) {
  .navbar-sandwich {
    width: 1.4rem;
    height: 1.4rem;
  }
}

.navbar-sandwich.large {
  width: 2.2rem;
  height: 2.2rem;
}

@media screen and (max-width: 991px) {
  .navbar-sandwich.large {
    width: 3rem;
    height: 3rem;
    align-self: center;
    justify-self: end;
  }
}

@media screen and (max-width: 479px) {
  .navbar-sandwich.large {
    width: 2.5rem;
    height: 2.5rem;
  }
}
</style>
