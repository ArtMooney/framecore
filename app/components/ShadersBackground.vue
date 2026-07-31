<script setup>
import { Shader, Glow, ChromaFlow } from "shaders/vue";

const isActive = ref(true);

onDeactivated(() => {
  isActive.value = false;
});

onActivated(() => {
  isActive.value = true;
});
</script>

<template>
  <Shader
    v-if="isActive"
    class="absolute inset-0 z-0 mx-[calc(-50vw+50%)] w-screen"
  >
    <Glow :intensity="10" :size="0.1" :threshold="1" />
    <ChromaFlow
      baseColor="#0f172a"
      upColor="#a78bfa"
      downColor="#6366f1"
      leftColor="#22d3ee"
      rightColor="#8b5cf6"
      :intensity="1"
      :radius="1"
      :momentum="40"
      blendMode="screen"
      :opacity="1"
    />
  </Shader>
</template>
