import React from "react";
import * as _Builtin from "./_Builtin";

export function ContactForm({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="content contact"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.HtmlEmbed
        className="hide1"
        value="%3Cstyle%3E%0A.input%20%7B%0A%20%20-webkit-appearance%3A%20none%3B%0A%09background-color%3A%20%23504e4e%3B%0A%7D%0A%0Ainput%5Btype%3D%22input%22%5D%3Afocus%20%7B%0A%20%20outline%3A%20none%3B%0A%7D%0A%0Ainput%3Anot(input%3A-webkit-autofill)%3A%3A-webkit-contacts-auto-fill-button%20%7B%0A%20%20background-color%3A%20%23504e4e%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.FormWrapper className="contact-form">
        <_Builtin.FormForm
          className="form-wrapper"
          name="wf-form-kontakta-oss"
          data-name="kontakta oss"
          method="get"
          id="kontakta-oss"
        >
          <_Builtin.Block className="content-info contact" tag="div">
            <_Builtin.Heading tag="h4">{"Hör av er!"}</_Builtin.Heading>
            <_Builtin.Paragraph>
              {
                " Som en liten leverantör erbjuder vi kreativa lösningar för att förbättra din kunds upplevelse. Vi arbetar tillsammans med dig för att skapa en långsiktig relation och hjälpa dig att nå dina mål."
              }
              <br />
              <br />
              {"Vi svarar för det mesta snabbt."}
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel
              className="text-white"
              htmlFor="firstname-2"
            >
              {"Förnamn:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="firstname-2"
              data-name="Firstname 2"
              type="text"
              disabled={false}
              required={true}
              id="firstname-2"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel
              className="text-white"
              htmlFor="lastname-2"
            >
              {"Efternamn:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="lastname-2"
              data-name="Lastname 2"
              type="text"
              disabled={false}
              required={true}
              id="lastname-2"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="email-2">
              {"Email:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="email-2"
              data-name="Email 2"
              type="email"
              disabled={false}
              required={true}
              id="email-2"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="phone-2">
              {"Telefon:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="phone-2"
              data-name="Phone 2"
              type="tel"
              disabled={false}
              required={true}
              id="phone-2"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="company-2">
              {"Företag:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="company-2"
              data-name="Company 2"
              type="text"
              disabled={false}
              required={true}
              id="company-2"
            />
          </_Builtin.Block>
          <_Builtin.Block className="grid-message-input" tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="message-2">
              {"Meddelande:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextarea
              className="input message"
              name="message-2"
              maxLength={5000}
              data-name="Message 2"
              required={true}
              autoFocus={false}
              id="message-2"
            />
          </_Builtin.Block>
          <_Builtin.Block className="hide1" tag="div">
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="clientip-2"
              data-name="Clientip 2"
              placeholder="clientip"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.clientip"
              id="clientip-2"
            />
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="pageuri-2"
              data-name="Pageuri 2"
              placeholder="pageuri"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.pageuri"
              id="pageuri-2"
            />
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="pagename-2"
              data-name="Pagename 2"
              placeholder="pagename"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.pagename"
              id="pagename-2"
            />
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="hubspotutk-2"
              data-name="Hubspotutk 2"
              placeholder="hubspotutk"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.hubspotutk"
              id="hubspotutk-2"
            />
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="amex-2"
              data-name="Amex 2"
              placeholder="amex"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.amex"
              id="amex-2"
            />
          </_Builtin.Block>
          <_Builtin.Block className="spacer-m contact" tag="div" />
          <_Builtin.Block className="div-block" tag="div">
            <_Builtin.FormButton
              className="button border"
              type="submit"
              value="Skicka"
              data-wait="Vänta..."
              v-on:click="sendForm"
            />
          </_Builtin.Block>
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage className="success-message">
          <_Builtin.Block tag="div">
            {"Tack för ert meddelande!"}
            <br />
            <br />
            {"Vi återkommer till er snart!"}
            <br />
            <br />
            <br />
            <br />
            <br />
            {"‍"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage className="error-message">
          <_Builtin.Paragraph>
            {"Oj! Något gick fel när formuläret skulle skickas."}
          </_Builtin.Paragraph>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
