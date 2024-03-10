<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="content-frame">
    <Navbar />
  </div>

  <div>
    <router-view />
  </div>

  <!--  <div>{{ message }}</div>-->
</template>

<script>
export default {
  name: "Framecore",

  data() {
    return {
      message: "",
    };
  },

  async mounted() {
    const res = await fetch("/helloworld");
    this.message = await res.text();
  },
};
</script>
