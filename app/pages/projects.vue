<script setup>
const staticContentStore = useStaticContentStore();
const staticContent = computed(
  () => staticContentStore.getContentByTitle("page - Projects").content,
);

useCmsSeo("SEO page - Projects");

const { data: projects, error } = await useFetch("/api/projects", {
  method: "GET",
  headers: {
    Authorization:
      "Basic " + btoa(config.public.userName + ":" + config.public.userPass),
  },
  default: () => [],
});

definePageMeta({
  ssr: true,
});
</script>

<template>
  <div
    class="relative flex grow flex-col items-center justify-center px-4 py-12 text-center"
  >
    <ClientOnly>
      <ShadersBackground />
    </ClientOnly>

    <div class="relative">
      <h1
        class="bg-linear-to-r from-teal-400 to-olive-400 bg-clip-text text-transparent"
      >
        {{ staticContent.header.title }}
      </h1>

      <p class="text-neutral-300">
        {{ staticContent.header.subtitle }}
      </p>

      <div class="mt-8 flex items-center justify-center gap-4">
        <NuxtLink to="/" class="text-teal-400 hover:underline">
          <NuxtImg src=""></NuxtImg>
        </NuxtLink>
      </div>

      <div class="mt-8 flex items-center justify-center gap-4">
        <NuxtLink to="/" class="text-teal-400 hover:underline">
          {{ staticContent.back.text }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
