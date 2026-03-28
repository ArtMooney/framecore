<script setup>
import IconChevronDoubleDown16 from "~icons/qlementine-icons/chevron-double-down-16";

// const config = useRuntimeConfig();
// const imageBaseUrl = config.public.imageBaseUrl;
// const staticContentStore = useStaticContentStore();
// const staticContent = computed(
//   () => staticContentStore.getContentByTitle("page - Index").content,
// );
//
// useCmsSeo("SEO page - Index");

definePageMeta({
  ssr: true,
});
</script>

<template>
  <div
    class="relative flex grow flex-col items-center justify-center px-4 text-center"
  >
    <ShadersBackground />

    <h1
      class="bg-linear-to-r from-teal-400 to-olive-400 bg-clip-text text-transparent"
    >
      Fullstack Developer
    </h1>

    <p class="text-neutral-300">
      Building websites and web applications with modern web tech
    </p>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
