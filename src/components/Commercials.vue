<template>
  <div class="content heading slim">
    <div class="image-overlay slow-scroll">
      <img
        class="image slow-scroll"
        id="w-node-_4db7cc3f-3306-1a5a-cc2e-69bfa2546b8a-a2546b88"
        data-w-id="4db7cc3f-3306-1a5a-cc2e-69bfa2546b8a"
        loading="lazy"
        width="auto"
        height="auto"
        alt=""
        src="https://uploads-ssl.webflow.com/5a770d8f4323220001d73352/5b93ca6339ac8988109d737b_safsen_snapshot.jpg"
      />
    </div>
    <div class="image-overlay black-25"></div>
    <div class="content-info reklamfilmer">
      <h3 class="heading3">Reklamfilmer</h3>
      <p class="text-white">
        3D animation är ett kraftfullt verktyg för att skapa minnesvärda
        reklamfilmer. Det ger möjlighet till realistiska visuella effekter och
        virtuella miljöer som fångar tittarnas uppmärksamhet och ökar intresset
        för det som reklamen handlar om.
      </p>
      <div class="spacer-m"></div>
      <a class="button black w-button" href="#">Kunder & Case</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Commercials",
};
</script>

<style scoped>
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

.image-overlay {
  position: absolute;
  left: 0%;
  top: 0%;
  right: 0%;
  bottom: 0%;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.image-overlay.black-25 {
  background-color: hsla(0, 0%, 0%, 0.25);
}

@media screen and (max-width: 479px) {
  .hide4 {
    display: none;
  }
}

.image-overlay.white-5 {
  background-color: hsla(0, 0%, 100%, 0.05);
}

.image-overlay.slow-scroll {
  display: flex;
  overflow: hidden;
}

.image-overlay.fixed-image--name {
  background-image: url("https://uploads-ssl.webflow.com/5a770d8f4323220001d73352/63b99779944baf3b5092f8a7_pexels-rachel-claire-4825701.jpg");
  background-position: 50% 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
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

.content-info {
  position: relative;

  display: flex;
  padding-top: 1rem;
  padding-bottom: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

@media screen and (max-width: 767px) {
  .content-info {
    padding-bottom: 1rem;
  }
}

@media screen and (max-width: 479px) {
  .content-info {
    width: 100%;
  }
}

.content-info.instagram {
  padding: 0rem;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
}

.content-info.center {
  align-items: center;
  text-align: center;
}

.content-info.padding {
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  grid-area: 1 / 2 / 2 / 3;
}

@media screen and (max-width: 767px) {
  .content-info.padding {
    padding: 1rem;
  }
}

@media screen and (max-width: 479px) {
  .content-info.padding {
    grid-area: 2 / 1 / 2 / 4;
  }
}

.content-info._1-2 {
  padding: 2rem;
}

@media screen and (max-width: 767px) {
  .content-info._1-2 {
    padding: 1rem;
  }
}

.content-info.video-heading {
  padding-top: 2rem;
  padding-right: 2rem;
  padding-bottom: 2rem;
  padding-left: 2rem;
  grid-area: 1 / 2 / 2 / 3;
}

@media screen and (max-width: 767px) {
  .content-info.video-heading {
    padding: 1rem;
  }
}

@media screen and (max-width: 479px) {
  .content-info.video-heading {
    grid-area: 2 / 1 / 2 / 4;
  }
}

.content-info.reklamfilmer {
  grid-area: 1/2/1/2;
}

.content-info.webdevelopment {
  align-items: center;
  text-align: center;
  grid-area: 2/2/2/2;
}

.content-info.homepages {
  padding: 2rem;
}

@media screen and (max-width: 767px) {
  .content-info.homepages {
    padding-top: 1rem;
    padding-right: 1rem;
    padding-bottom: 1rem;
    padding-left: 1rem;
    grid-area: 2/1/2/1;
  }
}

.content-info.contact {
  grid-area: span 1 / span 2 / span 1 / span 2;
}

@media screen and (max-width: 767px) {
  .content-info.contact {
    grid-area: span 1 / span 2;
  }
}

@media screen and (max-width: 479px) {
  .content-info.contact {
    grid-area: span 1 / span 1;
  }
}

.heading3 {
  font-size: 2.5rem;
  line-height: 2.5rem;
}

@media screen and (max-width: 991px) {
  .heading3 {
    font-size: 2.3rem;
    line-height: 2.3rem;
  }
}

@media screen and (max-width: 767px) {
  .heading3 {
    font-size: 2rem;
    line-height: 2rem;
  }
}

@media screen and (max-width: 479px) {
  .heading3 {
    font-size: 1.7rem;
    line-height: 1.7rem;
  }
}

.text-white {
  color: hsla(187.20000000000002, 0%, 100%, 1);
}

.spacer-m {
  display: block;
  width: 2rem;
  height: 2rem;
  flex: 0 0 auto;
}

.spacer-m.contact {
  grid-area: span 1 / span 2 / span 1 / span 2;
}

@media screen and (max-width: 767px) {
  .spacer-m.contact {
    grid-area: span 1 / span 2;
  }
}

@media screen and (max-width: 479px) {
  .spacer-m.contact {
    grid-area: span 1 / span 1 / span 1 / span 1;
  }
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

#w-node-_4db7cc3f-3306-1a5a-cc2e-69bfa2546b8a-a2546b88 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 4;
}
</style>
