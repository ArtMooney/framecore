import React from "react";
import * as _Builtin from "./_Builtin";

export function Homepages({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="content"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className="content-info homepages" tag="div">
        <_Builtin.Heading className="heading3" tag="h5">
          {"Hemsidor"}
        </_Builtin.Heading>
        <_Builtin.Paragraph>
          {
            "En professionell hemsida är ett måste-ha för alla företag idag. Det är där dina kunder och klienter förväntar sig att hitta information om dig och dina tjänster. Enkelhet och praktisk nytta är nyckeln till en framgångsrik hemsida. Enkelhet i designen gör det enkelt för besökarna att hitta det de letar efter, medan praktisk nytta innebär att hemsidan är anpassad för dina kunders behov och ger dem det de förväntar sig att hitta. En bra hemsida kan öka ditt företags synlighet, öka försäljningen och förbättra kundlojaliteten. Så, skapa en professionell hemsida idag och ta ditt företag till nästa nivå!"
          }
        </_Builtin.Paragraph>
      </_Builtin.Block>
      <_Builtin.Link
        button={false}
        block="inline"
        options={{
          href: "https://kinnahusvagnsservice.se",
          target: "_blank",
        }}
      >
        <_Builtin.Image
          className="image contain"
          id="w-node-_8c38236f-6487-952c-a523-6fc9e0f39955-e0f3994e"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/5a770d8f4323220001d73352/5c2b84e077f283f1dda190e3_kinnahusvagnsservice.jpg"
        />
      </_Builtin.Link>
    </_Component>
  );
}
