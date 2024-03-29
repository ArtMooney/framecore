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
          method="post"
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
              <br />
            </_Builtin.Paragraph>
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="Firstname">
              {"Förnamn:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="Firstname"
              data-name="Firstname"
              type="text"
              disabled={false}
              required={true}
              id="Firstname"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="Lastname">
              {"Efternamn:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="Lastname"
              data-name="Lastname"
              type="text"
              disabled={false}
              required={true}
              id="Lastname"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="Email">
              {"Email:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="Email"
              data-name="Email"
              type="email"
              disabled={false}
              required={true}
              id="Email"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="Phone">
              {"Telefon:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="Phone"
              data-name="Phone"
              type="tel"
              disabled={false}
              required={true}
              id="Phone"
            />
          </_Builtin.Block>
          <_Builtin.Block tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="Company">
              {"Företag:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextInput
              className="input"
              autoFocus={false}
              maxLength={256}
              name="Company"
              data-name="Company"
              type="text"
              disabled={false}
              required={true}
              id="Company"
            />
          </_Builtin.Block>
          <_Builtin.Block className="grid-2-col" tag="div">
            <_Builtin.FormBlockLabel className="text-white" htmlFor="Message">
              {"Meddelande:"}
            </_Builtin.FormBlockLabel>
            <_Builtin.FormTextarea
              className="input message"
              name="Message"
              maxLength={5000}
              data-name="Message"
              required={true}
              autoFocus={false}
              id="Message"
            />
          </_Builtin.Block>
          <_Builtin.Block className="hide1" tag="div">
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="Clientip"
              data-name="Clientip"
              placeholder="clientip"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.clientip"
              id="Clientip"
            />
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="Pageuri"
              data-name="Pageuri"
              placeholder="pageuri"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.pageuri"
              id="Pageuri"
            />
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="Pagename"
              data-name="Pagename"
              placeholder="pagename"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.pagename"
              id="Pagename"
            />
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="Hubspotutk"
              data-name="Hubspotutk"
              placeholder="hubspotutk"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.hubspotutk"
              id="Hubspotutk"
            />
            <_Builtin.FormTextInput
              autoFocus={false}
              maxLength={256}
              name="Amex"
              data-name="Amex"
              placeholder="amex"
              type="text"
              disabled={false}
              required={false}
              v-model="extraFields.amex"
              id="Amex"
            />
          </_Builtin.Block>
          <_Builtin.Block className="spacer-m contact" tag="div" />
          <_Builtin.Block className="grid-2-col" tag="div">
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
