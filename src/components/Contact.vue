<template>
  <div class="content contact">
    <div class="contact-form">
      <form
        class="form-wrapper"
        name="wf-form-kontakta-oss"
        data-name="kontakta oss"
        method="get"
        id="kontakta-oss"
      >
        <div class="content-info contact">
          <h4>Hör av er!</h4>
          <p>
            Som en liten leverantör erbjuder vi kreativa lösningar för att
            förbättra din kunds upplevelse. Vi arbetar tillsammans med dig för
            att skapa en långsiktig relation och hjälpa dig att nå dina mål.<br /><br />Vi
            svarar för det mesta snabbt.
          </p>
        </div>
        <div>
          <label class="text-white" for="firstname-2">Förnamn:</label>
          <input
            class="input w-input"
            autofocus="false"
            maxlength="256"
            name="firstname-2"
            data-name="Firstname 2"
            type="text"
            disabled="false"
            required="true"
            id="firstname-2"
          />
        </div>
        <div>
          <label class="text-white" for="lastname-2">Efternamn:</label>
          <input
            class="input w-input"
            autofocus="false"
            maxlength="256"
            name="lastname-2"
            data-name="Lastname 2"
            type="text"
            disabled="false"
            required="true"
            id="lastname-2"
          />
        </div>
        <div>
          <label class="text-white" for="email-2">Email:</label>
          <input
            class="input w-input"
            autofocus="false"
            maxlength="256"
            name="email-2"
            data-name="Email 2"
            type="email"
            disabled="false"
            required="true"
            id="email-2"
          />
        </div>
        <div>
          <label class="text-white" for="phone-2">Telefon:</label>
          <input
            class="input w-input"
            autofocus="false"
            maxlength="256"
            name="phone-2"
            data-name="Phone 2"
            type="tel"
            disabled="false"
            required="true"
            id="phone-2"
          />
        </div>
        <div>
          <label class="text-white" for="company-2">Företag:</label>
          <input
            class="input w-input"
            autofocus="false"
            maxlength="256"
            name="company-2"
            data-name="Company 2"
            type="text"
            disabled="false"
            required="true"
            id="company-2"
          />
        </div>
        <div class="grid-message-input">
          <label class="text-white" for="message-2">Meddelande:</label>
          <textarea
            class="input message w-input"
            name="message-2"
            maxlength="5000"
            data-name="Message 2"
            required="true"
            autofocus="false"
            id="message-2"
          ></textarea>
        </div>
        <div class="hide1">
          <input
            autofocus="false"
            maxlength="256"
            name="clientip-2"
            data-name="Clientip 2"
            placeholder="clientip"
            type="text"
            disabled="false"
            required="false"
            id="clientip-2"
            v-model="extraFields.clientip"
          />
          <input
            autofocus="false"
            maxlength="256"
            name="pageuri-2"
            data-name="Pageuri 2"
            placeholder="pageuri"
            type="text"
            disabled="false"
            required="false"
            id="pageuri-2"
            v-model="extraFields.pageuri"
          />
          <input
            autofocus="false"
            maxlength="256"
            name="pagename-2"
            data-name="Pagename 2"
            placeholder="pagename"
            type="text"
            disabled="false"
            required="false"
            id="pagename-2"
            v-model="extraFields.pagename"
          />
          <input
            autofocus="false"
            maxlength="256"
            name="hubspotutk-2"
            data-name="Hubspotutk 2"
            placeholder="hubspotutk"
            type="text"
            disabled="false"
            required="false"
            id="hubspotutk-2"
            v-model="extraFields.hubspotutk"
          />
          <input
            autofocus="false"
            maxlength="256"
            name="amex-2"
            data-name="Amex 2"
            placeholder="amex"
            type="text"
            disabled="false"
            required="false"
            id="amex-2"
            v-model="extraFields.amex"
          />
        </div>
        <div class="spacer-m contact"></div>
        <div class="div-block">
          <button
            class="button border w-button"
            type="submit"
            value="Skicka"
            data-wait="Vänta..."
            v-on:click="sendForm"
          ></button>
        </div>
      </form>
      <div class="success-message">
        <div>
          Tack för ert meddelande!<br /><br />Vi återkommer till er snart!<br /><br /><br /><br /><br />‍
        </div>
      </div>
      <div class="error-message">
        <p>Oj! Något gick fel när formuläret skulle skickas.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>

<!--<script type="application/javascript">-->
<!--const { createApp } = Vue;-->
<!--const formApps = document.querySelectorAll("[form-app]");-->

<!--formApps.forEach((formApp) => {-->
<!--  createApp({-->
<!--    data() {-->
<!--      return {-->
<!--        extraFields: {-->
<!--          clientip: "",-->
<!--          pageuri: window.location.href,-->
<!--          pagename: document.title,-->
<!--          hubspotutk: this.getCookie("hubspotutk"),-->
<!--          amex: "",-->
<!--        },-->
<!--        userName: "Henrik",-->
<!--        userPass: "Schnabel",-->
<!--        formWebhook: "https://api.framecore.se/webhook/framecore-kontakt",-->
<!--        emailErrorMessage:-->
<!--            "En eller flera emailadresser som ni har angett tycks inte ha ett korrekt format.",-->
<!--        emailReg:-->
<!--            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,-->
<!--      };-->
<!--    },-->

<!--    async created() {-->
<!--      const res = await fetch("https://api.ipify.org?format=json");-->
<!--      const ip = await res.json();-->
<!--      this.extraFields.clientip = ip.ip;-->
<!--    },-->

<!--    methods: {-->
<!--      sendForm(event) {-->
<!--        event.target.disabled = true;-->

<!--        const successMessage =-->
<!--            event.target.form.parentElement.getElementsByClassName(-->
<!--                "success-message"-->
<!--            )[0];-->
<!--        const errorMessage =-->
<!--            event.target.form.parentElement.getElementsByClassName(-->
<!--                "error-message"-->
<!--            )[0];-->

<!--        // disable webflow form submit-->
<!--        Webflow.push(function () {-->
<!--          $("form").submit(function () {-->
<!--            return false;-->
<!--          });-->
<!--        });-->

<!--        if (this.requiredFields(event.target.form)) {-->
<!--          var requestOptions = {-->
<!--            method: "POST",-->
<!--            headers: {-->
<!--              Authorization:-->
<!--                  "Basic " + btoa(this.userName + ":" + this.userPass),-->
<!--            },-->
<!--            body: this.formCollector(event.target.form),-->
<!--            redirect: "follow",-->
<!--          };-->

<!--          fetch(this.formWebhook, requestOptions)-->
<!--          .then((response) => {-->
<!--            if (!response.ok) throw new Error();-->
<!--          })-->
<!--          .then((result) => {-->
<!--            console.log("success");-->
<!--            event.target.value = event.target.dataset.wait;-->

<!--            setTimeout(() => {-->
<!--              event.target.form.style.display = "none";-->
<!--              successMessage.style.display = "block";-->
<!--            }, 1500);-->
<!--          })-->
<!--          .catch((error) => {-->
<!--            console.log("error");-->
<!--            errorMessage.style.display = "block";-->
<!--          });-->
<!--        } else {-->
<!--          event.target.disabled = false;-->
<!--        }-->
<!--      },-->

<!--      requiredFields(form) {-->
<!--        const inputs = form.querySelectorAll("input");-->
<!--        const textareas = form.querySelectorAll("textarea");-->
<!--        const selectors = form.querySelectorAll("select");-->
<!--        let requiredFilled = true;-->
<!--        let emailVerificationError = false;-->
<!--        let radioButtonNames = [];-->

<!--        // check inputs-->
<!--        for (const input of inputs) {-->
<!--          if (input.required) {-->
<!--            if (!input.value) requiredFilled = false;-->
<!--            if (input.type === "checkbox" && !input.checked)-->
<!--              requiredFilled = false;-->
<!--            if (input.type === "radio")-->
<!--              radioButtonNames.push(input.dataset.name); // push to list with radiobutton groups-->
<!--            if (input.type === "email" && !this.emailReg.test(input.value)) {-->
<!--              requiredFilled = false;-->
<!--              emailVerificationError = true;-->
<!--            }-->
<!--          }-->
<!--        }-->

<!--        // handle radiobuttons-->
<!--        radioButtonNames = [...new Set(radioButtonNames)]; // removes duplicates-->

<!--        for (const name of radioButtonNames) {-->
<!--          let radioButtonCleared = 0;-->
<!--          for (const input of inputs) {-->
<!--            if (input.type === "radio" && input.dataset.name === name) {-->
<!--              if (input.checked) radioButtonCleared++;-->
<!--            }-->
<!--          }-->
<!--          if (!radioButtonCleared) requiredFilled = false;-->
<!--        }-->

<!--        // check textareas-->
<!--        for (const input of textareas) {-->
<!--          if (input.required) {-->
<!--            if (!input.value) requiredFilled = false;-->
<!--          }-->
<!--        }-->

<!--        // check selectors-->
<!--        for (const input of selectors) {-->
<!--          if (input.required) {-->
<!--            if (!input.value) requiredFilled = false;-->
<!--          }-->
<!--        }-->

<!--        if (emailVerificationError) this.emailError(form);-->

<!--        return requiredFilled;-->
<!--      },-->

<!--      emailError(form) {-->
<!--        const errorMessage =-->
<!--            form.parentElement.getElementsByClassName("error-message")[0];-->

<!--        const savedErrorMessage = errorMessage.innerText;-->
<!--        errorMessage.innerText = this.emailErrorMessage;-->
<!--        errorMessage.style.display = "block";-->

<!--        setTimeout(() => {-->
<!--          window.addEventListener(-->
<!--              "click",-->
<!--              () => {-->
<!--                errorMessage.style.display = "none";-->
<!--                errorMessage.innerText = savedErrorMessage;-->
<!--              },-->
<!--              { once: true }-->
<!--          );-->
<!--        }, 500);-->
<!--      },-->

<!--      formCollector(form) {-->
<!--        let formData = new FormData();-->
<!--        formData.append("form-name", form.dataset.name);-->

<!--        // append all inputs except submit-button-->
<!--        for (const item of form.querySelectorAll("input")) {-->
<!--          if (item.type !== "submit") {-->
<!--            if (item.type === "file") {-->
<!--              if (item.files[0]) {-->
<!--                for (const file of item.files) {-->
<!--                  formData.append(item.name, file, file.name);-->
<!--                }-->
<!--              }-->
<!--            } else if (-->
<!--                item.name !== "gdpr-confirm" &&-->
<!--                item.name !== "clientip" &&-->
<!--                item.name !== "hubspotutk" &&-->
<!--                item.name !== "pageuri" &&-->
<!--                item.name !== "pagename" &&-->
<!--                item.name !== "amex"-->
<!--            ) {-->
<!--              if (item.type === "checkbox") {-->
<!--                formData.append(item.name, item.checked);-->
<!--              } else if (item.type === "radio") {-->
<!--                formData.append(item.name, item.checked);-->
<!--              } else {-->
<!--                formData.append(item.name, item.value);-->
<!--              }-->
<!--            }-->
<!--          }-->
<!--        }-->

<!--        // append all textareas-->
<!--        for (const item of form.querySelectorAll("textarea")) {-->
<!--          formData.append(item.name, item.value);-->
<!--        }-->

<!--        // Get all relevant selectors-->
<!--        for (const item of form.querySelectorAll("select")) {-->
<!--          formData.append(item.name, item.value);-->
<!--        }-->

<!--        // add the extra-fields-->
<!--        for (const [key, value] of Object.entries(this.extraFields)) {-->
<!--          formData.append(key, value);-->
<!--        }-->

<!--        return formData;-->
<!--      },-->

<!--      getCookie(name) {-->
<!--        var value = "; " + document.cookie;-->
<!--        var parts = value.split("; " + name + "=");-->
<!--        if (parts.length === 2) {-->
<!--          return parts.pop().split(";").shift();-->
<!--        }-->
<!--      },-->
<!--    },-->
<!--  }).mount(formApp);-->
<!--});-->
<!--</script>-->

<style>
.input {
  -webkit-appearance: none;
  background-color: #504e4e;
}

input[type="input"]:focus {
  outline: none;
}

input:not(input:-webkit-autofill)::webkit-contacts-auto-fill-button {
  background-color: #504e4e;
}
</style>
