import React from "react";
import * as _Builtin from "./_Builtin";

export function Webdevelopment({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="content heading"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className="image-overlay white-5" tag="div" />
      <_Builtin.Block className="content-info webdevelopment" tag="div">
        <_Builtin.Heading className="heading3" tag="h4">
          {"Webbutveckling"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className="text-white">
          {
            "Webbappar är den ultimata lösningen för företag som vill automatisera och förenkla sina processer. De hjälper till att hålla kunddata organiserad, spara tid på tidrapportering och projekt, automatisera fakturering och mycket mer. Dessutom kan de enkelt samarbeta och integreras med andra verktyg och tjänster, vilket gör det enklare än någonsin att hantera och automatisera verksamhetsprocesser. Gör livet enklare och öka produktiviteten och lönsamheten med webbappar."
          }
        </_Builtin.Paragraph>
        <_Builtin.Block className="spacer-m" tag="div" />
        <_Builtin.Link
          className="button black"
          button={true}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Kontakta oss"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
