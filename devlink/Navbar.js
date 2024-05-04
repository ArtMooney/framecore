"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-21":{"id":"e-21","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-22"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63b97bda3d3d7a5c1c4a4f82|90ea9308-3dce-5432-bb73-59bb4e61834f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63b97bda3d3d7a5c1c4a4f82|90ea9308-3dce-5432-bb73-59bb4e61834f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673189216852},"e-22":{"id":"e-22","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-21"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"63b97bda3d3d7a5c1c4a4f82|90ea9308-3dce-5432-bb73-59bb4e61834f","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"63b97bda3d3d7a5c1c4a4f82|90ea9308-3dce-5432-bb73-59bb4e61834f","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673189216852},"e-23":{"id":"e-23","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-24"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9822749f-bf8c-f0dc-8cd3-09148d4ffca2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9822749f-bf8c-f0dc-8cd3-09148d4ffca2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673257332277},"e-24":{"id":"e-24","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-23"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9822749f-bf8c-f0dc-8cd3-09148d4ffca2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9822749f-bf8c-f0dc-8cd3-09148d4ffca2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673257332277},"e-25":{"id":"e-25","name":"","animationType":"preset","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-3","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-26"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9822749f-bf8c-f0dc-8cd3-09148d4ffca2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9822749f-bf8c-f0dc-8cd3-09148d4ffca2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673257332277},"e-26":{"id":"e-26","name":"","animationType":"preset","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-4","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-25"}},"mediaQueries":["medium","small","tiny"],"target":{"id":"9822749f-bf8c-f0dc-8cd3-09148d4ffca2","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"9822749f-bf8c-f0dc-8cd3-09148d4ffca2","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1673257332277}},"actionLists":{"a-3":{"id":"a-3","title":"open navbar links","actionItemGroups":[{"actionItems":[{"id":"a-3-n-2","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-links","selectorGuids":["37f8eeae-0bac-d0f9-f559-4d7efc7b65d8"]},"yValue":1,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-3-n-3","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-links","selectorGuids":["37f8eeae-0bac-d0f9-f559-4d7efc7b65d8"]},"value":0,"unit":""}}]},{"actionItems":[{"id":"a-3-n-4","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-links","selectorGuids":["37f8eeae-0bac-d0f9-f559-4d7efc7b65d8"]},"value":"grid"}}]},{"actionItems":[{"id":"a-3-n-5","actionTypeId":"TRANSFORM_MOVE","config":{"delay":0,"easing":"easeInOut","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-links","selectorGuids":["37f8eeae-0bac-d0f9-f559-4d7efc7b65d8"]},"yValue":0,"xUnit":"PX","yUnit":"rem","zUnit":"PX"}},{"id":"a-3-n-6","actionTypeId":"STYLE_OPACITY","config":{"delay":0,"easing":"easeInOut","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-links","selectorGuids":["37f8eeae-0bac-d0f9-f559-4d7efc7b65d8"]},"value":1,"unit":""}}]}],"useFirstGroupAsInitialState":false,"createdOn":1596184255148},"a-4":{"id":"a-4","title":"close navbar links","actionItemGroups":[{"actionItems":[{"id":"a-4-n","actionTypeId":"GENERAL_DISPLAY","config":{"delay":0,"easing":"","duration":0,"target":{"useEventTarget":"SIBLINGS","selector":".navbar-links","selectorGuids":["37f8eeae-0bac-d0f9-f559-4d7efc7b65d8"]},"value":"none"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1596184255148},"a":{"id":"a","title":"animate sandwich in","actionItemGroups":[{"actionItems":[{"id":"a-n-4","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"63ba02b8ae7aabeb7495cd5b|43f7c9ac-2f0d-d9c0-bf35-395e7c5f9239"},"value":7}}]},{"actionItems":[{"id":"a-n-5","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":true,"id":"63ba02b8ae7aabeb7495cd5b|43f7c9ac-2f0d-d9c0-bf35-395e7c5f9239"},"value":35}}]}],"useFirstGroupAsInitialState":true,"createdOn":1596184255148},"a-2":{"id":"a-2","title":"animate sandwich out","actionItemGroups":[{"actionItems":[{"id":"a-2-n-3","actionTypeId":"PLUGIN_LOTTIE","config":{"delay":0,"easing":"","duration":200,"target":{"useEventTarget":true,"id":"6117fd5fc32ebaa030ac7983|2045faef-9202-4492-2b08-2d1af3ef2575"},"value":7}}]}],"useFirstGroupAsInitialState":false,"createdOn":1596184255148}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Navbar({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="content-frame" tag="div" id="page-top">
      <_Builtin.HtmlEmbed
        className="hide1"
        value="%3Cstyle%3E%0A.navlink%3Ahover%20.icon-s.solid.navbutton%20%7B%0A%20%20%20%20text-shadow%3A%200%200%2015px%20%2348b5f8%2C%200%200%2015px%20hsla(203%2C%2092.83%25%2C%2062.79%25%2C%201.00)%3B%0A%7D%0A%0A.navlink%3Ahover%20.navicon.blur%20%7B%0A%20%20%20%20opacity%3A%20100%25%3B%0A%7D%0A%3C%2Fstyle%3E"
      />
      <_Builtin.Section
        className="content navbar"
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Link
          className="navbar-logo"
          button={false}
          block="inline"
          options={{
            href: "#",
          }}
        >
          <_Builtin.Image
            className="image contain"
            width="auto"
            height="auto"
            loading="auto"
            alt=""
            src="https://uploads-ssl.webflow.com/5a770d8f4323220001d73352/63b9f32ee6b85ee47069798a_Framecore_color.svg"
          />
        </_Builtin.Link>
        <_Builtin.Block className="navbar-links" tag="div">
          <_Builtin.Block className="navbar-arrow" tag="div" />
          <_Builtin.Link
            className="navlink"
            button={false}
            dyn={{
              bind: {},
            }}
            block="inline"
            options={{
              href: "#read-more",
            }}
          >
            <_Builtin.Block
              dyn={{
                bind: {},
              }}
              tag="div"
            >
              {"Tjänster"}
            </_Builtin.Block>
            <_Builtin.Block className="navicon-wrapper" tag="div">
              <_Builtin.HtmlEmbed
                className="navicon blur"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%3Cpath%20fill%3D%22Currentcolor%22%20d%3D%22M234.5%205.7c13.9-5%2029.1-5%2043.1%200l192%2068.6C495%2083.4%20512%20107.5%20512%20134.6V377.4c0%2027-17%2051.2-42.5%2060.3l-192%2068.6c-13.9%205-29.1%205-43.1%200l-192-68.6C17%20428.6%200%20404.5%200%20377.4V134.6c0-27%2017-51.2%2042.5-60.3l192-68.6zM256%2066L82.3%20128%20256%20190l173.7-62L256%2066zm32%20368.6l160-57.1v-188L288%20246.6v188z%22%2F%3E%3C%2Fsvg%3E"
              />
              <_Builtin.HtmlEmbed
                className="navicon"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%3Cpath%20fill%3D%22Currentcolor%22%20d%3D%22M234.5%205.7c13.9-5%2029.1-5%2043.1%200l192%2068.6C495%2083.4%20512%20107.5%20512%20134.6V377.4c0%2027-17%2051.2-42.5%2060.3l-192%2068.6c-13.9%205-29.1%205-43.1%200l-192-68.6C17%20428.6%200%20404.5%200%20377.4V134.6c0-27%2017-51.2%2042.5-60.3l192-68.6zM256%2066L82.3%20128%20256%20190l173.7-62L256%2066zm32%20368.6l160-57.1v-188L288%20246.6v188z%22%2F%3E%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className="navlink"
            button={false}
            dyn={{
              bind: {},
            }}
            block="inline"
            options={{
              href: "#",
            }}
          >
            <_Builtin.Block
              dyn={{
                bind: {},
              }}
              tag="div"
            >
              {"Kunder & Case"}
            </_Builtin.Block>
            <_Builtin.Block className="navicon-wrapper" tag="div">
              <_Builtin.HtmlEmbed
                className="navicon blur"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%3Cpath%20fill%3D%22Currentcolor%22%20d%3D%22M234.5%205.7c13.9-5%2029.1-5%2043.1%200l192%2068.6C495%2083.4%20512%20107.5%20512%20134.6V377.4c0%2027-17%2051.2-42.5%2060.3l-192%2068.6c-13.9%205-29.1%205-43.1%200l-192-68.6C17%20428.6%200%20404.5%200%20377.4V134.6c0-27%2017-51.2%2042.5-60.3l192-68.6zM256%2066L82.3%20128%20256%20190l173.7-62L256%2066zm32%20368.6l160-57.1v-188L288%20246.6v188z%22%2F%3E%3C%2Fsvg%3E"
              />
              <_Builtin.HtmlEmbed
                className="navicon"
                value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%3Cpath%20fill%3D%22Currentcolor%22%20d%3D%22M88%200C74.7%200%2064%2010.7%2064%2024c0%2038.9%2023.4%2059.4%2039.1%2073.1l1.1%201C120.5%20112.3%20128%20119.9%20128%20136c0%2013.3%2010.7%2024%2024%2024s24-10.7%2024-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5%2047.7%20112%2040.1%20112%2024c0-13.3-10.7-24-24-24zM32%20192c-17.7%200-32%2014.3-32%2032V416c0%2053%2043%2096%2096%2096H288c53%200%2096-43%2096-96h16c61.9%200%20112-50.1%20112-112s-50.1-112-112-112H352%2032zm352%2064h16c26.5%200%2048%2021.5%2048%2048s-21.5%2048-48%2048H384V256zM224%2024c0-13.3-10.7-24-24-24s-24%2010.7-24%2024c0%2038.9%2023.4%2059.4%2039.1%2073.1l1.1%201C232.5%20112.3%20240%20119.9%20240%20136c0%2013.3%2010.7%2024%2024%2024s24-10.7%2024-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5%2047.7%20224%2040.1%20224%2024z%22%2F%3E%3C%2Fsvg%3E"
              />
            </_Builtin.Block>
          </_Builtin.Link>
          <_Builtin.Link
            className="button border navbutton"
            button={true}
            block=""
            options={{
              href: "#",
            }}
          >
            {"Kontakta oss"}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.NotSupported _atom="Animation" />
      </_Builtin.Section>
    </_Component>
  );
}
