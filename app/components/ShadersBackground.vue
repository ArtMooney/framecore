<script setup>
import { Shader, LinearGradient, CursorTrail } from "shaders/vue";
</script>

<template>
  <Shader class="absolute inset-0 z-0">
    <LinearGradient colorA="#0f172a" colorB="#7c3aed" />
    <CursorTrail />
  </Shader>
</template>

<script>
export default {
  name: "ShadersBackground",
};
</script>
