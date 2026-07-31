<script setup>
import IconGrid from "~icons/glyphs/grid-sm-bold";
</script>

<template>
  <div
    class="relative z-10 mx-[calc(-50vw+50%)] w-screen border-b border-b-white/10 bg-neutral-950"
  >
    <div class="flex w-full items-center justify-between p-4">
      <router-link to="/">
        <NuxtImg
          src="framecore-logo.svg"
          alt="company logo"
          class="h-auto w-24 p-1 sm:w-52 sm:p-2"
        />
      </router-link>

      <NuxtLink to="/projects" class="items flex">
        <IconGrid
          class="size-7 cursor-pointer text-neutral-400 transition duration-300 ease-in-out hover:text-neutral-300"
        />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>
