<script setup>
import NotFound from "../components/NotFound.vue";
</script>

<template>
  <div
    class="grid-rows-auto mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-8 sm:px-4"
  >
    <NotFound />
  </div>
</template>

<script>
export default {
  name: "NotFound",
  metaInfo: {
    title: "",
    meta: [
      {
        name: "keywords",
        content: "",
      },
      { name: "robots", content: "index, follow" },
      {
        name: "description",
        content: "",
      },
      {
        property: "og:title",
        content: "",
      },
      {
        property: "og:description",
        content: "",
      },
      {
        property: "og:image",
        content: "",
      },
    ],
  },
};
</script>
