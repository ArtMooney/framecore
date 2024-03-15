<script setup>
import Gallery from "../components/Gallery.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <Gallery />
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
