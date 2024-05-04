<script setup>
import NotFound from "../components/NotFound.vue";
</script>

<template>
  <div class="content-frame">
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
