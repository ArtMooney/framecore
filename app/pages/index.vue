<script setup>
import IconVue from "~icons/logos/vue";
import IconNuxt from "~icons/logos/nuxt-icon";
import IconTailwind from "~icons/devicon/tailwindcss";
import IconNode from "~icons/material-icon-theme/nodejs-alt";
import IconJS from "~icons/vscode-icons/file-type-js-official";

const staticContentStore = useStaticContentStore();
const staticContent = computed(
  () => staticContentStore.getContentByTitle("page - Index").content,
);

useCmsSeo("SEO page - Index");

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
        class="bg-linear-to-r from-teal-400 to-olive-400 bg-clip-text pb-4 text-transparent"
        v-html="formatText(staticContent.header.title)"
      ></h1>

      <p class="text-neutral-300">
        {{ staticContent.header.subtitle }}
      </p>

      <div
        class="mx-auto mt-8 flex w-fit items-center justify-center gap-3 border border-white/10 p-4"
      >
        <NuxtLink to="https://vuejs.org/" target="_blank" class="items flex">
          <IconVue class="size-8" />
        </NuxtLink>

        <NuxtLink to="https://nuxt.com/" target="_blank" class="items flex">
          <IconNuxt class="size-8" />
        </NuxtLink>

        <NuxtLink to="https://nitro.build/" target="_blank" class="items flex">
          <NitroIcon class="size-8" />
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

      <p
        v-html="formatText(staticContent.contact.text)"
        class="mt-32 text-sm text-neutral-400 [&_a]:text-mist-500 [&_a]:underline [&_a]:hover:text-mist-400"
      ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
