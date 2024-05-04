<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="body-full">
    <div class="content-frame">
      <Navbar />
    </div>

    <router-view />

    <div class="content-frame">
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  name: "Framecore",
};
</script>
