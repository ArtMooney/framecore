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

    <!--    <NuxtImg-->
    <!--      src="framecore-logo.png"-->
    <!--      alt="company logo"-->
    <!--      :class="[-->
    <!--        'relative z-10 h-auto w-2/3',-->
    <!--        'drop-shadow-[0_0_80px_rgba(168,85,247,0.8)]',-->
    <!--      ]"-->
    <!--      sizes="2000px"-->
    <!--      width="2000"-->
    <!--      height="209"-->
    <!--      format="webp"-->
    <!--    ></NuxtImg>-->

    <!--    <div class="relative z-10 max-w-3xl py-12 text-2xl">Heading subtitle</div>-->

    <!--    <NuxtLink-->
    <!--      :to="{ path: '/', hash: '#' }"-->
    <!--      class="absolute bottom-8 z-10 flex w-full items-center justify-center"-->
    <!--    >-->
    <!--      <IconChevronDoubleDown16-->
    <!--        class="size-12 cursor-pointer opacity-70 hover:opacity-100"-->
    <!--      ></IconChevronDoubleDown16>-->
    <!--    </NuxtLink>-->
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
