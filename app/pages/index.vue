<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
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

const vantaRef = ref(null);
let vantaEffect = null;

onMounted(async () => {
  const THREE = await import("three");
  const { default: BIRDS } = await import("vanta/src/vanta.birds");

  vantaEffect = BIRDS({
    el: vantaRef.value,
    THREE,
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: 0x111118,
    color1: 0x491f89,
    color2: 0x3ba3c8,
    birdSize: 1.2,
    wingSpan: 18.0,
    speedLimit: 4.0,
    separation: 14.0,
    alignment: 28.0,
    cohesion: 48.0,
  });
});

onBeforeUnmount(() => {
  if (vantaEffect) vantaEffect.destroy();
});
</script>

<template>
  <!--  <Heading>-->
  <!--    <template #heading-content>-->
  <!--      <div-->
  <!--        class="absolute inset-0 flex flex-col items-center justify-center bg-amber-700/15 px-4 text-center"-->
  <!--      >-->
  <!--        <h1 class="mx-10 mb-8 md:mx-30">HEADING TITLE</h1>-->

  <!--        <div class="max-w-3xl px-8 text-lg lg:text-2xl">HEADING SUBTITLE</div>-->

  <!--        <NuxtLink-->
  <!--          :to="{ path: '/', hash: '#' }"-->
  <!--          class="absolute bottom-8 flex w-full items-center justify-center"-->
  <!--        >-->
  <!--          <IconChevronDoubleDown16-->
  <!--            class="size-12 cursor-pointer opacity-70 hover:opacity-100"-->
  <!--          ></IconChevronDoubleDown16>-->
  <!--        </NuxtLink>-->
  <!--      </div>-->
  <!--    </template>-->
  <!--  </Heading>-->

  <div
    ref="vantaRef"
    class="relative flex min-h-screen flex-col items-center justify-center px-4 text-center"
  >
    <NuxtImg
      src="framecore-logo.png"
      alt="company logo"
      :class="['h-auto w-2/3', 'drop-shadow-[0_0_80px_rgba(168,85,247,0.8)]']"
      sizes="2000px"
      width="2000"
      height="209"
      format="webp"
    ></NuxtImg>

    <!--    <h1 class="mx-10 mb-8 md:mx-30">Heading Title</h1>-->

    <div class="max-w-3xl py-12 text-2xl">Heading subtitle</div>

    <NuxtLink
      :to="{ path: '/', hash: '#' }"
      class="absolute bottom-8 flex w-full items-center justify-center"
    >
      <IconChevronDoubleDown16
        class="size-12 cursor-pointer opacity-70 hover:opacity-100"
      ></IconChevronDoubleDown16>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: "Index",
};
</script>
