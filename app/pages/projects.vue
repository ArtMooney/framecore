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

    <div class="relative max-w-2xl">
      <h1
        class="bg-linear-to-r from-teal-400 to-olive-400 bg-clip-text text-transparent"
      >
        {{ staticContent.header.title }}
      </h1>

      <p class="text-neutral-300">
        {{ staticContent.header.subtitle }}
      </p>

      <div
        class="mt-8 flex flex-col gap-x-4 divide-y divide-white/10 border border-white/10 text-neutral-300"
      >
        <NuxtLink
          v-for="project of projects"
          :to="`${project.url}`"
          target="_blank"
          class="trans flex w-full flex-row items-center transition duration-300 ease-in-out hover:bg-white/5"
          :key="project.id"
        >
          <NuxtImg
            :src="`/cms-files/${project.image}` ?? ''"
            class="size-20"
          ></NuxtImg>

          <div class="flex flex-col items-start gap-1 p-4 text-left">
            <p>{{ project.title }}</p>
            <p class="text-xs text-neutral-400">{{ project.description }}</p>
          </div>
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
