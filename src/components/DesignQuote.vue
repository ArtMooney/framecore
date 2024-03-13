<template>
  <div class="content quote">
    <blockquote>
      &quot;Design is not just what it looks like and feels like. Design is how
      it works.&quot; - Steve Jobs
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "DesignQuote",
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
</style>
