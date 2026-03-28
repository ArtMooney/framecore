<script setup>
import IconEmojioneV1GrowingHeart from "~icons/emojione-v1/growing-heart";
</script>

<template>
  <div
    ref="footer"
    class="relative mx-[calc(-50vw+50%)] grid w-screen bg-neutral-950"
  >
    <div
      class="grid w-full items-start justify-items-center border-t border-t-white/10 p-6"
    >
      <a
        class="flex justify-self-center text-xs opacity-20 hover:opacity-30 md:col-span-3"
        href="https://www.framecore.se"
        target="_blank"
      >
        Powered by
        <span>
          <IconEmojioneV1GrowingHeart class="mx-1.5 size-4" />
        </span>
        FrameCore
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
