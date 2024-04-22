<template>
  <div class="content contact">
    <div class="contact-form">
      <form v-if="contactForm" class="form-wrapper" name="kontakta-oss">
        <div class="content-info contact">
          <h4>Hör av er!</h4>
          <p>
            Som en liten leverantör erbjuder vi kreativa lösningar för att
            förbättra din kunds upplevelse. Vi arbetar tillsammans med dig för
            att skapa en långsiktig relation och hjälpa dig att nå dina mål.<br /><br />
          </p>
        </div>
        <div>
          <label class="text-white" for="firstname">Förnamn:</label>
          <input
            class="input w-input"
            maxlength="256"
            name="firstname"
            type="text"
            required
          />
        </div>
        <div>
          <label class="text-white" for="lastname">Efternamn:</label>
          <input
            class="input w-input"
            maxlength="256"
            name="lastname"
            type="text"
            required
          />
        </div>
        <div>
          <label class="text-white" for="email">Email:</label>
          <input
            class="input w-input"
            maxlength="256"
            name="email"
            type="email"
            required
          />
        </div>
        <div>
          <label class="text-white" for="phone">Telefon:</label>
          <input
            class="input w-input"
            maxlength="256"
            name="phone"
            type="tel"
            required
          />
        </div>
        <div>
          <label class="text-white" for="company">Företag:</label>
          <input
            class="input w-input"
            maxlength="256"
            name="company"
            type="text"
          />
        </div>
        <div class="grid-2-col">
          <label class="text-white" for="message">Meddelande:</label>
          <textarea
            class="input message w-input"
            name="message"
            maxlength="5000"
            required
          ></textarea>
        </div>
        <div class="hide1">
          <input
            maxlength="256"
            name="clientip"
            placeholder="clientip"
            type="text"
            v-model="extraFields.clientip"
          />
          <input
            maxlength="256"
            name="pageuri"
            placeholder="pageuri"
            type="text"
            v-model="extraFields.pageuri"
          />
          <input
            maxlength="256"
            name="pagename"
            placeholder="pagename"
            type="text"
            v-model="extraFields.pagename"
          />
          <input
            maxlength="256"
            name="hubspotutk"
            placeholder="hubspotutk"
            type="text"
            v-model="extraFields.hubspotutk"
          />
          <input
            maxlength="256"
            name="amex"
            placeholder="amex"
            type="text"
            v-model="extraFields.amex"
          />
        </div>
        <div class="spacer-m contact"></div>
        <div class="grid-2-col">
          <button
            class="button border w-button"
            type="submit"
            data-wait="Vänta..."
            @click="sendForm"
          >
            Skicka
          </button>
        </div>
      </form>

      <div v-if="successMessage" class="success-message">
        <div>
          Tack för ert meddelande!<br /><br />Vi återkommer till er snart!<br /><br /><br /><br /><br />‍
        </div>
      </div>

      <div v-if="errorMessage" class="error-message">
        <p>{{ defaultEmailMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",

  data() {
    return {
      extraFields: {
        clientip: "",
        pageuri: window.location.href,
        pagename: document.title,
        hubspotutk: this.getCookie("hubspotutk"),
        amex: "",
      },
      userName: `${import.meta.env.VITE_USERNAME}`,
      userPass: `${import.meta.env.VITE_USERPASS}`,
      formWebhook: "/api/contact",
      defaultEmailMessage: "Oj! Något gick fel när formuläret skulle skickas.",
      emailErrorMessage:
        "En eller flera emailadresser som ni har angett tycks inte ha ett korrekt format.",
      emailReg:
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      contactForm: true,
      successMessage: false,
      errorMessage: false,
    };
  },

  async created() {
    const res = await fetch("https://api.ipify.org?format=json");
    const ip = await res.json();
    this.extraFields.clientip = ip.ip;
  },

  methods: {
    async sendForm(event) {
      event.target.disabled = true;

      if (this.requiredFields(event.target.form)) {
        let res;

        try {
          res = await fetch(this.formWebhook, {
            method: "POST",
            headers: {
              Authorization:
                "Basic " + btoa(this.userName + ":" + this.userPass),
            },
            body: this.formCollector(event.target.form),
            redirect: "follow",
          });

          const jsonResponse = await res.json();

          if (!res.ok || jsonResponse.error) {
            throw new Error("Request failed");
            this.errorMessage = true;
          } else {
            console.log("success");
            event.target.value = event.target.dataset.wait;

            setTimeout(() => {
              this.contactForm = false;
              this.successMessage = true;
            }, 1500);
          }
        } catch (error) {
          console.error("An error occurred:", error);
          this.errorMessage = true;
        }
      } else {
        event.target.disabled = false;
      }
    },

    requiredFields(form) {
      const inputs = form.querySelectorAll("input");
      const textareas = form.querySelectorAll("textarea");
      const selectors = form.querySelectorAll("select");
      let requiredFilled = true;
      let emailVerificationError = false;
      let radioButtonNames = [];

      // check inputs
      for (const input of inputs) {
        if (input.required) {
          if (!input.value) requiredFilled = false;
          if (input.type === "checkbox" && !input.checked)
            requiredFilled = false;
          if (input.type === "radio") radioButtonNames.push(input.dataset.name); // push to list with radiobutton groups
          if (input.type === "email" && !this.emailReg.test(input.value)) {
            requiredFilled = false;
            emailVerificationError = true;
          }
        }
      }

      // handle radiobuttons
      radioButtonNames = [...new Set(radioButtonNames)]; // removes duplicates

      for (const name of radioButtonNames) {
        let radioButtonCleared = 0;
        for (const input of inputs) {
          if (input.type === "radio" && input.dataset.name === name) {
            if (input.checked) radioButtonCleared++;
          }
        }
        if (!radioButtonCleared) requiredFilled = false;
      }

      // check textareas
      for (const input of textareas) {
        if (input.required) {
          if (!input.value) requiredFilled = false;
        }
      }

      // check selectors
      for (const input of selectors) {
        if (input.required) {
          if (!input.value) requiredFilled = false;
        }
      }

      if (emailVerificationError) this.emailError(form);

      return requiredFilled;
    },

    emailError(form) {
      const savedErrorMessage = this.defaultEmailMessage;
      this.defaultEmailMessage = this.emailErrorMessage;
      this.errorMessage = true;

      setTimeout(() => {
        window.addEventListener(
          "click",
          () => {
            this.errorMessage = false;
            this.defaultEmailMessage = savedErrorMessage;
          },
          { once: true },
        );
      }, 500);
    },

    formCollector(form) {
      let formData = new FormData();
      formData.append("form-name", form.name);

      // append all inputs except submit-button
      for (const item of form.querySelectorAll("input")) {
        if (item.type !== "submit") {
          if (item.type === "file") {
            if (item.files[0]) {
              for (const file of item.files) {
                formData.append(item.name, file, file.name);
              }
            }
          } else if (
            item.name !== "gdpr-confirm" &&
            item.name !== "clientip" &&
            item.name !== "hubspotutk" &&
            item.name !== "pageuri" &&
            item.name !== "pagename" &&
            item.name !== "amex"
          ) {
            if (item.type === "checkbox") {
              formData.append(item.name, item.checked);
            } else if (item.type === "radio") {
              formData.append(item.name, item.checked);
            } else {
              formData.append(item.name, item.value);
            }
          }
        }
      }

      // append all textareas
      for (const item of form.querySelectorAll("textarea")) {
        formData.append(item.name, item.value);
      }

      // Get all relevant selectors
      for (const item of form.querySelectorAll("select")) {
        formData.append(item.name, item.value);
      }

      // add the extra-fields
      for (const [key, value] of Object.entries(this.extraFields)) {
        formData.append(key, value);
      }

      return formData;
    },

    getCookie(name) {
      var value = "; " + document.cookie;
      var parts = value.split("; " + name + "=");
      if (parts.length === 2) {
        return parts.pop().split(";").shift();
      }
    },
  },
};
</script>
