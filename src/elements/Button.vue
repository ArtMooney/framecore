<template>
  <a
    class="font-exo min-w-40 rounded bg-white/95 px-6 py-2 text-base text-black no-underline duration-500 ease-in-out hover:-translate-x-1 hover:text-black/75"
    :href="link"
    >{{ text }}</a
  >
</template>

<script>
export default {
  name: "Button",

  props: {
    text: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
};
</script>
