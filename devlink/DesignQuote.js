"use client";
import React from "react";
import * as _Builtin from "./_Builtin";

export function DesignQuote({ as: _Component = _Builtin.Section }) {
  return (
    <_Component
      className="content quote"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Blockquote>
        {
          '"Design is not just what it looks like and feels like. Design is how it works." - Steve Jobs'
        }
      </_Builtin.Blockquote>
    </_Component>
  );
}
