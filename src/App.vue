<script setup>
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div>
    <router-view />
  </div>

  <!--  <div>{{ message }}</div>-->
</template>

<script>
export default {
  name: "Framecore",

  data() {
    return {
      message: "",
    };
  },

  async mounted() {
    const res = await fetch("/helloworld");
    this.message = await res.text();
  },
};
</script>
