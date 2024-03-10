<script setup>
import Navbar from "../components/Navbar.vue";
import Test from "../components/Test.vue";
</script>

<template>
  <div class="content-frame">
    <!--    <Navbar />-->
    <!--    <Test />-->
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
