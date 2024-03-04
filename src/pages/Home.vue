<script setup>
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
  </div>
  <div class="content-frame"></div>
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
