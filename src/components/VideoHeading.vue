<template>
  <div class="content heading video">
    <div class="html-embed w-embed">
      <video
        class="video-fullscreen"
        muted=""
        playsinline=""
        autoplay=""
        loop=""
      >
        <source src="../assets/production%20ID_4374507.mp4" />
      </video>
    </div>
    <div class="image-overlay black-25"></div>
    <div class="content-info padding">
      <h1 class="heading2">Kreativa lösningar för webb och animation</h1>
      <p class="text-white">
        Vi erbjuder anpassade webb- och 3D-animationstjänster för att hjälpa
        ditt företag att skapa nytta. Kontakta oss idag för en kostnadsfri
        konsultation.
      </p>
      <div class="spacer-m"></div>
      <router-link
        class="button black w-button"
        :to="{ path: '/', hash: '#services' }"
      >
        Läs mer
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "VideoHeading",
};
</script>

<style scoped>
.video-fullscreen {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
