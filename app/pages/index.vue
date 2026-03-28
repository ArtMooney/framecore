<script setup>
import IconVue from "~icons/logos/vue";
import IconNuxt from "~icons/logos/nuxt-icon";
import IconNitro from "~icons/unjs/nitro";
import IconTailwind from "~icons/devicon/tailwindcss";
import IconNode from "~icons/logos/nodejs-icon-alt";
import IconJS from "~icons/vscode-icons/file-type-js-official";

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
    <ClientOnly>
      <ShadersBackground />
    </ClientOnly>

    <div class="relative">
      <h1
        class="bg-linear-to-r from-teal-400 to-olive-400 bg-clip-text text-transparent"
      >
        Fullstack Developer
      </h1>

      <p class="text-neutral-300">
        Building websites and web applications with modern web tech
      </p>

      <div
        class="mt-8 flex w-fit items-center justify-center gap-3 border border-white/10 p-4 mx-auto"
      >
        <NuxtLink to="https://vuejs.org/" target="_blank" class="items flex">
          <IconVue class="size-8" />
        </NuxtLink>

        <NuxtLink to="https://nuxt.com/" target="_blank" class="items flex">
          <IconNuxt class="size-8" />
        </NuxtLink>

        <NuxtLink to="https://nitro.build/" target="_blank" class="items flex">
          <IconNitro class="size-8" />
        </NuxtLink>

        <NuxtLink
          to="https://tailwindcss.com/"
          target="_blank"
          class="items flex"
        >
          <IconTailwind class="size-8" />
        </NuxtLink>

        <NuxtLink to="https://nodejs.org/en" target="_blank" class="items flex">
          <IconNode class="size-8" />
        </NuxtLink>

        <NuxtLink
          to="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          class="items flex"
        >
          <IconJS class="size-8" />
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
