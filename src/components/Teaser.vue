<script setup>
defineProps({ blok: Object });
</script>

<template>
  <div
    v-editable="blok"
    class="mb-6 py-8 text-center text-5xl font-bold text-gray-600"
  >
    {{ blok.headline }}
  </div>
</template>