<script setup>
import Button from "../elements/Button.vue";
</script>

<template>
  <div
    class="grid-rows-auto mx-auto grid w-full max-w-screen-2xl grid-cols-1 px-4 sm:px-4"
  >
    <div v-if="!loginStatusMessage" class="justify-self-center pb-4">
      {{ isLoggedIn ? "You are already logged in" : "Login to AV Nordic Sync" }}
    </div>

    <Button
      v-if="!loginStatusMessage"
      text="Login"
      :link="loginUrl"
      hash=""
      type="button"
      data-wait=""
      :open-external="true"
      :disabled="isLoggedIn"
      class="justify-self-center"
    />

    <div v-if="loginStatusMessage" class="justify-self-center pb-4">
      You have now logged in.
    </div>
  </div>
</template>

<script>
export default {
  name: "AV Nordic Login",

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

  data() {
    return {
      userName: `${import.meta.env.VITE_USERNAME}`,
      userPass: `${import.meta.env.VITE_USERPASS}`,
      loginUrl:
        "https://apps.fortnox.se/oauth-v1/auth?client_id=fVp5nL0auRhD&redirect_uri=https://www.framecore.se/avnordic-login&scope=customer%20invoice%20settings%20article%20price%20order%20offer&state=somestate123&access_type=offline&response_type=code",
      loginStatusMessage: false,
      isLoggedIn: false,
    };
  },

  mounted() {
    const url = window.location.href;
    let payload = url.split("?")[1];

    if (payload) {
      this.sendPayload(
        payload + "&redirect_uri=" + window.location.href.split("?")[0],
      );
    } else {
      this.validateLogin();
    }
  },

  methods: {
    async sendPayload(payload) {
      const res = await fetch("/avnordic-login", {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa(this.userName + ":" + this.userPass),
        },
        body: JSON.stringify({ payload: payload }),
        redirect: "follow",
      });

      const jsonResponse = await res.json();

      if (!res.ok || jsonResponse.error) {
        throw new Error("Request failed");
      } else {
        this.loginStatusMessage = true;

        // this.$router.replace({
        //   path: this.$route.path,
        //   query: {},
        // });
      }
    },

    async validateLogin() {
      const res = await fetch("/avnordic-login-validation", {
        method: "POST",
        headers: {
          Authorization: "Basic " + btoa(this.userName + ":" + this.userPass),
        },
        body: JSON.stringify({ validate: "true" }),
        redirect: "follow",
      });

      const jsonResponse = await res.json();
      console.log(jsonResponse.status);

      if (!res.ok || jsonResponse.error) {
        throw new Error("Request failed");
      } else if (jsonResponse.status === true) {
        this.isLoggedIn = true;
      }
    },
  },
};
</script>
