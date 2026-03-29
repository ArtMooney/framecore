<script setup>
const config = useRuntimeConfig();
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

console.log("Projects data:", projects.value);

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

      <div class="mt-8 flex gap-4 border border-white/10 text-neutral-300">
        <NuxtLink
          v-for="project of projects"
          :to="`${project.url}`"
          target="_blank"
          class="flex w-full flex-row items-center gap-4"
          :key="project.id"
        >
          <NuxtImg
            :src="`/cms-files/${project.image}` ?? ''"
            class="size-20"
          ></NuxtImg>

          <p>{{ project.title }}</p>
        </NuxtLink>
      </div>

      <div class="mt-32 flex items-center justify-center gap-4">
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
