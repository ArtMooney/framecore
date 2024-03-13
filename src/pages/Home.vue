<script setup>
import VideoHeading from "../components/VideoHeading.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <VideoHeading />
  <Footer />
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
      message: "",
    };
  },
};
</script>
