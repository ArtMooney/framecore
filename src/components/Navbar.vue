<script setup>
import { Vue3Lottie } from "vue3-lottie";

import Cube from "../assets/Cube.vue";
import MugHot from "../assets/MugHot.vue";
import sandwich from "../assets/burger-menu.json";
</script>

<template>
  <div class="content navbar">
    <a href="../index.html" class="navbar-logo navbar-logo-grid"
      ><img src="../assets/Framecore_color.svg" alt="" class="image contain"
    /></a>
    <div
      id="w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc94-8d4ffc90"
      class="navbar-links"
    >
      <div
        id="w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc95-8d4ffc90"
        class="navbar-arrow"
      ></div>
      <a
        href="/#read-more"
        id="w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc96-8d4ffc90"
        class="navlink"
      >
        <div>Tjänster</div>
        <div class="navicon-wrapper">
          <Cube class="navicon blur" />
          <Cube class="navicon" />
        </div>
      </a>
      <a
        id="w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc9b-8d4ffc90"
        href="../case.html"
        class="navlink"
      >
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

:root {
  --white: white;
  --black: black;
}

body {
  color: #ebebeb;
  background-color: #181717;
  flex-direction: column;
  justify-content: space-between;
  font-family:
    Droid Sans,
    sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5rem;
}

h1 {
  font-variation-settings:
    "opsz" 35.8,
    "wdth" 99.5,
    "wght" 594;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Exo, sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 3.5rem;
}

h2 {
  font-variation-settings: "wdth" 100;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Exo, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 3rem;
}

h3 {
  font-variation-settings: "wdth" 100;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Exo, sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 2.5rem;
}

h4 {
  font-variation-settings: "wdth" 100;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Exo, sans-serif;
  font-size: 2.2rem;
  font-weight: 700;
  line-height: 2.2rem;
}

h5 {
  font-variation-settings: "wdth" 100;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Exo, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.8rem;
}

h6 {
  font-variation-settings: "wdth" 100;
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Exo, sans-serif;
  font-size: 1.4rem;
  font-weight: 700;
  line-height: 1.4rem;
}

p {
  margin-bottom: 0;
}

a {
  color: #fff;
  text-decoration: underline;
}

a:hover {
  color: rgba(255, 255, 255, 0.7);
}

label {
  color: #000;
  margin-bottom: 5px;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.4rem;
  display: block;
}

blockquote {
  font-variation-settings: normal;
  border-left: 0.3rem solid rgba(255, 255, 255, 0.3);
  margin-bottom: 1rem;
  padding: 1rem;
  font-family:
    PT Sans,
    sans-serif;
  font-style: italic;
  font-weight: 400;
}

.button {
  min-width: 10rem;
  text-align: center;
  background-color: #fafafa;
  border-radius: 0.3rem;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  line-height: 1.5rem;
  transition:
    transform 0.4s,
    background-color 0.2s;
}

.button:hover {
  color: rgba(0, 0, 0, 0.7);
  background-color: #e7e7e7;
  transform: translate(-4px);
}

.button.darkmode {
  color: #fff;
  background-color: #5e5e5e;
}

.button.darkmode:hover {
  color: rgba(255, 255, 255, 0.7);
  background-color: gray;
}

.button.darkmode.border {
  border: 0.125rem solid #e6e6e6;
}

.button.border {
  color: #000;
  border: 0.125rem solid #e6e6e6;
}

.button.border.darkmode {
  color: #fff;
}

.button.border.darkmode:hover {
  color: rgba(255, 255, 255, 0.7);
}

.button.border.navbutton {
  min-width: 0;
  color: #000;
  transition:
    transform 0.2s,
    background-color 0.2s;
}

.button.border.navbutton:hover {
  transform: scale(1.05);
}

.button.arrow-anim {
  max-width: 10rem;
  color: #000;
  justify-content: space-between;
  transition:
    padding 0.2s,
    background-color 0.2s;
  display: flex;
}

.button.arrow-anim:hover {
  padding-right: 0.9rem;
  transform: none;
}

.button.black {
  color: #000;
}

.button.outline {
  color: #fff;
  background-color: rgba(0, 0, 0, 0);
  border: 0.125rem solid #e6e6e6;
}

.button.outline.navbutton {
  min-width: 0;
  color: #fff;
  transition:
    transform 0.2s,
    background-color 0.2s;
}

.button.outline.navbutton:hover {
  transform: scale(1.05);
}

.icon-s.solid.navbutton {
  color: #c2a66d;
  margin-left: 0.3rem;
  transition: text-shadow 0.4s;
}

.icon-s.solid.navbutton:hover {
  text-shadow:
    0 0 15px #48b5f8,
    0 0 15px #48b5f8;
}

.navbar-links {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  background-color: rgba(0, 0, 0, 0);
  grid-template-rows: auto;
  grid-template-columns: max-content;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  justify-content: flex-end;
  align-items: center;
  justify-items: stretch;
  display: grid;
}

.navbar-logo {
  width: 86%;
  align-items: center;
  transition: margin 0.2s;
  display: flex;
}

.navbar-logo:hover {
  margin-left: 0.5rem;
}

.navbar-sandwich {
  width: 1.6rem;
  height: 1.6rem;
  filter: invert();
  cursor: pointer;
  display: none;
  position: relative;
}

.navbar-sandwich.large {
  width: 2.2rem;
  height: 2.2rem;
}

.content {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-template:
    "."
    / 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-auto-flow: row;
  align-content: stretch;
  justify-content: stretch;
  align-items: stretch;
  justify-items: stretch;
  margin-top: 1rem;
  margin-bottom: 4rem;
  display: grid;
  position: relative;
}

.content.footer {
  background-image: linear-gradient(
      rgba(66, 62, 60, 0.93),
      rgba(66, 62, 60, 0.93)
    ),
    url("../images/pexels-iva-mu.jpg");
  background-position:
    0 0,
    0 0;
  background-size: auto, cover;
  grid-template-columns: 1fr 1fr 1fr;
  margin-bottom: 0;
  padding: 3rem 1rem 5rem;
}

.content.footer.center {
  grid-template-columns: 1fr;
}

.content.navbar {
  z-index: 1;
  grid-template-columns: 0.25fr 1fr;
  margin-top: 0;
  margin-bottom: 1rem;
  padding-top: 1rem;
  padding-bottom: 0;
  overflow: visible;
}

.content.quote {
  grid-template-columns: 1fr;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.content.heading {
  min-height: 35rem;
  grid-template-rows: auto auto auto;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  padding-top: 2rem;
  padding-bottom: 3rem;
}

.content.heading.slim {
  min-height: 0;
  grid-template-rows: auto;
}

.content.heading.full {
  min-height: 50rem;
}

.content.heading.video {
  min-height: 0;
  grid-template-rows: auto;
  padding-top: 0;
  padding-bottom: 0;
}

.content.instagram {
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
}

.content.product-list {
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.content.full {
  height: auto;
  min-height: 100vh;
}

.content.blog-list {
  grid-template-columns: 1fr 1fr;
}

.content.contact {
  grid-template-columns: 0.25fr 1fr 0.25fr;
}

.content.shifted {
  grid-template-columns: 0.25fr 1fr 1fr 1fr 1fr 0.25fr;
}

.content.accordition {
  grid-template-rows: auto;
  grid-template-columns: 0.25fr 1fr 0.25fr;
  padding-top: 4rem;
  padding-bottom: 5rem;
}

.content._1-2 {
  grid-template-columns: 0.5fr 1fr;
}

.content._2-1 {
  grid-template-columns: 1fr 0.5fr;
}

.content.gallery {
  grid-template-columns: 1fr;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s;
}

.image:hover {
  transform: scale(1.01);
}

.image.product,
.image.blog {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.image.contain {
  object-fit: contain;
}

.image.full {
  width: 100%;
  height: 100%;
}

.image.instagram {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.image.slow-scroll {
  height: auto;
  min-height: 100vh;
  transition-property: none;
}

.image.lightbox {
  max-width: 85%;
  object-fit: contain;
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
}

.image.lightbox.source-wrapper {
  max-width: none;
  justify-content: center;
  align-items: center;
  display: flex;
}

.navlink {
  align-items: center;
  text-decoration: none;
  transition: transform 0.2s;
  display: flex;
}

.navlink:hover {
  transform: scale(1.03);
}

.navbar-arrow {
  display: none;
}

.navicon-wrapper {
  width: 1.1rem;
  height: 1.1rem;
  margin-left: 0.3rem;
  position: relative;
}

.navicon {
  width: 1.1rem;
  height: 1.1rem;
  color: #c2a66d;
  font-size: 1.1rem;
  line-height: 1.1rem;
  transition: opacity 0.4s;
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.navicon.blur {
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0;
  filter: blur(6px);
  color: #48b5f8;
  top: -9%;
  left: -16%;
}

@media screen and (max-width: 991px) {
  h1 {
    font-size: 3rem;
    line-height: 3rem;
  }

  h2 {
    font-size: 2.7rem;
    line-height: 2.7rem;
  }

  h3 {
    font-size: 2.3rem;
    line-height: 2.3rem;
  }

  h4 {
    font-size: 2rem;
    line-height: 2rem;
  }

  .button.border.navbutton,
  .button.outline.navbutton {
    margin-top: 1rem;
  }

  .navbar-links {
    z-index: 1;
    grid-column-gap: 0.5rem;
    grid-row-gap: 1rem;
    background-color: #444442;
    border-radius: 0.2rem;
    grid-template-rows: auto;
    grid-template-columns: max-content;
    grid-auto-columns: max-content;
    grid-auto-flow: row;
    align-items: center;
    justify-items: center;
    padding: 1.5rem 1.5rem 2rem;
    display: none;
    position: absolute;
    top: 4.7rem;
    bottom: auto;
    left: auto;
    right: 0.7rem;
  }

  .navbar-logo {
    width: 80%;
  }

  .navbar-sandwich {
    display: block;
    //grid-area: 1 / 2 / 2 / 3;
    align-self: center;
    justify-self: end;
  }

  .navbar-sandwich.large {
    width: 3rem;
    height: 3rem;
  }

  .content.navbar {
    z-index: 100;
    grid-template-columns: 0.5fr 1fr;
    margin-bottom: 1.5rem;
    padding-top: 1.5rem;
  }

  .content.quote {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .content.heading {
    grid-template-columns: 2rem 1fr 2rem;
  }

  .content.product-list {
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
  }

  .content.accordition {
    grid-template-columns: 2rem 1fr 2rem;
  }

  .content._1-2 {
    grid-template-columns: 0.75fr 1fr;
  }

  .content._2-1 {
    grid-template-columns: 1fr 0.75fr;
  }

  .content.gallery {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  .image.lightbox {
    max-width: 80%;
  }

  .navbar-arrow {
    border: 0.7rem solid rgba(0, 0, 0, 0);
    border-top-width: 0;
    border-bottom: 1rem solid #444442;
    padding-bottom: 0;
    padding-right: 0;
    display: block;
    position: absolute;
    top: -5%;
    bottom: auto;
    left: 88%;
    right: auto;
  }
}

@media screen and (max-width: 767px) {
  body {
    font-size: 1rem;
    line-height: 1.3rem;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;
  }

  h2 {
    font-size: 2.3rem;
    line-height: 2.3rem;
  }

  h3 {
    font-size: 2rem;
    line-height: 2rem;
  }

  h4 {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }

  h5 {
    font-size: 1.4rem;
    line-height: 1.4rem;
  }

  h6 {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.3rem;
  }

  label {
    font-size: 0.9rem;
    line-height: 0.9rem;
  }

  .button {
    min-width: 8rem;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 0.9rem;
    line-height: 1.2rem;
  }

  .navbar-links {
    z-index: 1;
    grid-column-gap: 1rem;
    grid-row-gap: 1rem;
    flex-direction: column;
    grid-template-rows: auto;
    grid-template-columns: max-content;
    grid-auto-columns: max-content;
    position: absolute;
    top: 4rem;
    bottom: auto;
    left: auto;
    right: 0.6rem;
  }

  .navbar-logo {
    width: 100%;
  }

  .navbar-sandwich {
    width: 1.5rem;
    height: 1.5rem;
  }

  .content {
    grid-template-columns: 1fr;
  }

  .content.navbar {
    margin-bottom: 1rem;
    padding-top: 1rem;
  }

  .content.heading.full {
    min-height: 35rem;
  }

  .content.heading.video {
    grid-template-columns: 1rem 1fr 1rem;
  }

  .content.instagram {
    grid-template-columns: 1fr 1fr 1fr;
  }

  .content.product-list {
    grid-template-columns: 1fr 1fr;
    padding-top: 0;
    padding-bottom: 0;
  }

  .content.blog-list {
    grid-template-columns: 1fr 1fr;
  }

  .content.contact {
    grid-template-columns: 1fr;
  }

  .content.shifted {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  .content.accordition {
    grid-template-columns: 1fr;
    padding-top: 2rem;
    padding-bottom: 3rem;
  }

  .content._1-2,
  .content._2-1 {
    grid-template-columns: 1fr;
  }

  .navlink {
    padding-right: 0;
    position: relative;
  }

  .navbar-arrow {
    left: 86%;
  }
}

@media screen and (max-width: 479px) {
  h1 {
    font-size: 2.2rem;
    line-height: 2.2rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2rem;
  }

  h3 {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .navbar-links {
    grid-column-gap: 0.25rem;
    grid-row-gap: 1rem;
    top: 3.9rem;
    right: 0.4rem;
  }

  .navbar-sandwich {
    width: 1.4rem;
    height: 1.4rem;
  }

  .navbar-sandwich.large {
    width: 2.5rem;
    height: 2.5rem;
  }

  .content {
    grid-auto-rows: auto;
  }

  .content.footer {
    grid-template-rows: auto;
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
    grid-auto-flow: row;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }

  .content.navbar {
    grid-template-columns: 1fr 1fr;
  }

  .content.heading {
    grid-template-columns: 1rem 1fr 1rem;
  }

  .content.heading.full {
    min-height: 50rem;
  }

  .content.heading.video {
    grid-template-rows: auto auto;
    grid-template-columns: 2rem 1fr 2rem;
  }

  .content.instagram {
    grid-template-columns: 1fr 1fr;
  }

  .content.product-list,
  .content.blog-list {
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
  }

  .content.shifted {
    grid-template-columns: 2rem 1fr 2rem;
  }

  .image.lightbox {
    max-width: 100%;
  }

  .navbar-logo-grid {
    align-self: stretch;
    justify-self: stretch;
  }

  #w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc94-8d4ffc90,
  #w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc9b-8d4ffc90 {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }
}

@media screen and (max-width: 991px) {
  #w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc95-8d4ffc90 {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }

  #w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc96-8d4ffc90,
  #w-node-_9822749f-bf8c-f0dc-8cd3-09148d4ffc9b-8d4ffc90 {
    justify-self: end;
  }
}
</style>
