<script setup>
import VideoHeading from "../components/VideoHeading.vue";
import DesignQuote from "../components/DesignQuote.vue";
import Animations from "../components/Animations.vue";
import Commercials from "../components/Commercials.vue";
import WebDevelopment from "../components/WebDevelopment.vue";
import HomePages from "../components/HomePages.vue";
</script>

<template>
  <VideoHeading />

  <div class="content-frame">
    <DesignQuote />
    <Animations />
    <Commercials />
    <WebDevelopment />
    <HomePages />
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
};
</script>
