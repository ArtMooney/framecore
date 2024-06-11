<template>
  <div class="relative grid grid-cols-1 md:grid-cols-[0.25fr,1fr,0.25fr]">
    <div class="html-embed w-embed">
      <video
        class="h-full w-full object-cover"
        muted=""
        playsinline=""
        autoplay=""
        loop=""
      >
        <source src="../assets/production%20ID_4374507.mp4" />
      </video>
    </div>
    <div class="absolute bottom-0 left-0 right-0 top-0 bg-black/25"></div>
    <div
      class="relative col-start-2 col-end-2 row-start-1 row-end-1 flex flex-col items-start justify-center p-8"
    >
      <h1 class="text-4xl md:text-5xl">
        Kreativa lösningar för webb och animation
      </h1>
      
      <p class="pb-8 text-white">
        Vi erbjuder anpassade webb- och 3D-animationstjänster för att hjälpa
        ditt företag att skapa nytta. Kontakta oss idag för en kostnadsfri
        konsultation.
      </p>

      <Button
        text="Läs mer"
        link="/"
        hash="#services"
        type="button"
        data-wait=""
      />
    </div>
  </div>
</template>

<script>
import Button from "../elements/Button.vue";

export default {
  name: "VideoHeading",
  components: { Button },
};
</script>
