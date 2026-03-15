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
  <Heading>
    <template #heading-content>
      <div
        class="absolute inset-0 flex flex-col items-center justify-center bg-amber-700/15 px-4 text-center"
      >
        <h1 class="mx-10 mb-8 md:mx-30">HEADING TITLE</h1>

        <div class="max-w-3xl px-8 text-lg lg:text-2xl">HEADING SUBTITLE</div>

        <NuxtLink
          :to="{ path: '/', hash: '#' }"
          class="absolute bottom-8 flex w-full items-center justify-center"
        >
          <IconChevronDoubleDown16
            class="h-12 min-h-12 w-12 min-w-12 cursor-pointer opacity-70 hover:opacity-100"
          ></IconChevronDoubleDown16>
        </NuxtLink>
      </div>
    </template>
  </Heading>

  <div class="mx-4 my-20 flex flex-col gap-8 sm:mx-8">HEJ</div>
</template>

<script>
export default {
  name: "Index",
};
</script>
