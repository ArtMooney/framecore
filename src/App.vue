<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Page from "./components/Page.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <Suspense>
    <RouterView />
  </Suspense>

  <!--  <div-->
  <!--    class="flex min-h-screen flex-col flex-nowrap items-stretch justify-between"-->
  <!--  >-->
  <!--    <div-->
  <!--      class="grid-rows-auto mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-4 sm:px-4"-->
  <!--    >-->
  <!--      <Navbar />-->
  <!--    </div>-->

  <!--    <router-view />-->

  <!--    <div-->
  <!--      class="grid-rows-auto mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-4 sm:px-4"-->
  <!--    >-->
  <!--      <Footer />-->
  <!--    </div>-->
  <!--  </div>-->
</template>

<script>
export default {
  name: "Framecore",
};
</script>
