<script setup>
import Button from "../elements/Button.vue";
</script>

<template>
  <div
    class="grid-rows-auto mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-4 sm:px-4"
  >
    <div class="justify-self-center pb-4">Login to AV Nordic Sync</div>

    <Button
      text="Login"
      :link="loginUrl"
      hash=""
      type="button"
      data-wait=""
      :open-external="true"
      class="justify-self-center"
    />
  </div>
</template>

<script>
export default {
  name: "AV Nordic Login",

  data() {
    return {
      loginUrl:
        "https://apps.fortnox.se/oauth-v1/auth?client_id=fVp5nL0auRhD&redirect_uri=https://www.framecore.se/avnordic-login&scope=customer%20invoice%20settings%20article%20price%20order%20offer&state=somestate123&access_type=offline&response_type=code",
    };
  },

  head: {
    title: "",
    meta: [
      {
        name: "keywords",
        content: "",
      },
      { name: "robots", content: "noindex, nofollow" },
      {
        name: "description",
        content: "",
      },
      {
        property: "og:title",
        content: "",
      },
      {
        property: "og:description",
        content: "",
      },
      {
        property: "og:image",
        content: "",
      },
    ],
  },
};
</script>
