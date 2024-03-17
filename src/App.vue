<script setup>
import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="content-frame">
    <Navbar />
  </div>

  <div>
    <router-view />
  </div>

  <div>{{ message }}</div>
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

<style>
body {
  background-color: black;
}

.content-frame {
  width: 100%;
  max-width: 90rem;
  margin-right: auto;
  margin-left: auto;
  padding-right: 2rem;
  padding-left: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  grid-auto-columns: 1fr;
  grid-template-columns: minmax(12rem, 0.25fr) 1fr minmax(12rem, 0.25fr);
  grid-template-rows: auto;
}

@media screen and (max-width: 479px) {
  .content-frame {
    padding-right: 1rem;
    padding-left: 1rem;
  }
}
</style>
