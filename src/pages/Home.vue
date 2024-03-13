<script setup>
import Commercials from "../components/Commercials.vue";
import Footer from "../components/Footer.vue";
import Test from "../components/Test.vue";
</script>

<template>
  <Commercials />
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
