"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function Commercials({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="content heading slim"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Block className="image-overlay slow-scroll" tag="div">
        <_Builtin.Image
          className="image slow-scroll"
          id="w-node-_4db7cc3f-3306-1a5a-cc2e-69bfa2546b8a-a2546b88"
          loading="lazy"
          width="auto"
          height="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/5a770d8f4323220001d73352/5b93ca6339ac8988109d737b_safsen_snapshot.jpg"
        />
      </_Builtin.Block>
      <_Builtin.Block className="image-overlay black-25" tag="div" />
      <_Builtin.Block className="content-info reklamfilmer" tag="div">
        <_Builtin.Heading className="heading3" tag="h3">
          {"Reklamfilmer"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className="text-white">
          {
            "3D animation är ett kraftfullt verktyg för att skapa minnesvärda reklamfilmer. Det ger möjlighet till realistiska visuella effekter och virtuella miljöer som fångar tittarnas uppmärksamhet och ökar intresset för det som reklamen handlar om."
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
          {"Kunder & Case"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
