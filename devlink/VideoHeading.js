import React from "react";
import * as _Builtin from "./_Builtin";

export function VideoHeading({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="content heading video"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.HtmlEmbed
        className="html-embed"
        value="%3Cvideo%20style%3D%22width%3A%20100%25%3B%20height%3A%20100%25%3B%20object-fit%3A%20cover%22%20muted%20playsinline%20autoplay%20loop%3E%0A%20%20%20%20%3Csource%20src%3D%22https%3A%2F%2Ffiledn.com%2FlODGkE8bRyjVm8tpT986SXj%2Fframecore%2Fproduction%2520ID_4374507.mp4%22%2F%3E%0A%3C%2Fvideo%3E"
      />
      <_Builtin.Block className="image-overlay black-25" tag="div" />
      <_Builtin.Block className="content-info video-heading" tag="div">
        <_Builtin.Heading className="heading2" tag="h1">
          {"Kreativa lösningar för webb och animation"}
        </_Builtin.Heading>
        <_Builtin.Paragraph className="text-white">
          {
            "Vi erbjuder anpassade webb- och 3D-animationstjänster för att hjälpa ditt företag att skapa nytta. Kontakta oss idag för en kostnadsfri konsultation."
          }
        </_Builtin.Paragraph>
        <_Builtin.Block className="spacer-m" tag="div" />
        <_Builtin.Link
          className="button black"
          button={true}
          block=""
          options={{
            href: "#read-more",
          }}
        >
          {"Läs mer"}
        </_Builtin.Link>
      </_Builtin.Block>
    </_Component>
  );
}
