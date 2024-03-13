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
