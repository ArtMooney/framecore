<script setup>
import Contact from "../components/Contact.vue";
</script>

<template>
  <div class="content-frame">
    <Contact />
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
