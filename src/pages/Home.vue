<script setup>
import Contact from "../components/Contact.vue";
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div class="content-frame">
    <Contact />
    <Footer />
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
      message: "",
    };
  },
};
</script>
