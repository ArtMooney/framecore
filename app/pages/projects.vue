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
  <div class="flex w-full grow flex-col px-4 py-10 sm:px-6 lg:px-8">
    <div class="mx-auto w-full max-w-7xl text-center">
      <h1
        class="bg-linear-to-r from-teal-400 to-olive-400 bg-clip-text text-transparent"
      >
        {{ staticContent.header.title }}
      </h1>

      <p class="mt-2 text-neutral-300">
        {{ staticContent.header.subtitle }}
      </p>
    </div>

    <div
      class="mx-auto mt-10 grid w-full max-w-400 grid-cols-1 content-start gap-0 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4"
    >
      <NuxtLink
        v-for="project of projects"
        :to="`${project.url}`"
        target="_blank"
        class="group relative -mr-px -mb-px flex aspect-square overflow-hidden border border-white/10 bg-neutral-950/40 transition duration-500 ease-out hover:z-10 hover:border-teal-400/40 hover:shadow-[0_0_40px_rgba(45,212,191,0.12)]"
        :key="project.id"
      >
        <NuxtImg
          :src="`/cms-files/${project.image}` ?? ''"
          class="absolute inset-0 h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
          densities="1x 2x"
        />

        <div
          class="absolute inset-0 bg-linear-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/10 transition duration-500 group-hover:from-neutral-950 group-hover:via-neutral-950/80"
        />

        <div
          class="relative mt-auto flex w-full flex-col items-start gap-0 p-4 text-left sm:p-5"
        >
          <p
            class="text-base font-medium text-white transition duration-300 group-hover:text-teal-300 sm:text-lg"
          >
            {{ project.title }}
          </p>
          <p
            class="max-w-md text-xs leading-relaxed text-neutral-500 sm:text-sm"
          >
            {{ project.description }}
          </p>
        </div>
      </NuxtLink>
    </div>

    <div class="mt-16 flex items-center justify-center gap-4">
      <NuxtLink to="/" class="text-teal-400 hover:underline">
        {{ staticContent.back.text }}
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>
