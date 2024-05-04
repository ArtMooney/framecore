<script setup>
import Gallery from "../components/Gallery.vue";
</script>

<template>
  <div class="content-frame">
    <Gallery />
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
