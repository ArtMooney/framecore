<script setup>
import Animations from "../components/Animations.vue";
import Footer from "../components/Footer.vue";
import Test from "../components/Test.vue";
</script>

<template>
  <Animations />
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
