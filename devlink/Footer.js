import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".accordion-item-trigger","originalId":"63b97bda3d3d7a5c1c4a4f82|98c0cf8f-2e1b-48bc-88cf-cdfe19729e5e","appliesTo":"CLASS"},"targets":[{"selector":".accordion-item-trigger","originalId":"63b97bda3d3d7a5c1c4a4f82|98c0cf8f-2e1b-48bc-88cf-cdfe19729e5e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555887741271},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".accordion-item-trigger","originalId":"63b97bda3d3d7a5c1c4a4f82|98c0cf8f-2e1b-48bc-88cf-cdfe19729e5e","appliesTo":"CLASS"},"targets":[{"selector":".accordion-item-trigger","originalId":"63b97bda3d3d7a5c1c4a4f82|98c0cf8f-2e1b-48bc-88cf-cdfe19729e5e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555887741273}},"actionLists":{"a-7":{"id":"a-7","title":"accordion open","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-item-content","selectorGuids":["1a8da2ac-08e5-fe02-93cf-3a20c3a3dabd"]},"heightValue":0,"widthUnit":"PX","heightUnit":"PX","locked":false}},{"id":"a-7-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-s.solid","selectorGuids":["39b6b29e-81a3-b609-53be-ba0943b41606","f5923358-2484-5db1-60de-54a4e86f1f8f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-item-content","selectorGuids":["1a8da2ac-08e5-fe02-93cf-3a20c3a3dabd"]},"widthUnit":"AUTO","heightUnit":"AUTO","locked":false}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".icon-s.solid","selectorGuids":["39b6b29e-81a3-b609-53be-ba0943b41606","f5923358-2484-5db1-60de-54a4e86f1f8f"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1555887748956},"a-8":{"id":"a-8","title":"accordion close","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuad","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-item-content","selectorGuids":["1a8da2ac-08e5-fe02-93cf-3a20c3a3dabd"]},"heightValue":0,"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-8-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inQuad","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".icon-s.solid","selectorGuids":["39b6b29e-81a3-b609-53be-ba0943b41606","f5923358-2484-5db1-60de-54a4e86f1f8f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1555887963005}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Section }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component
      className="content footer center"
      grid={{
        type: "section",
      }}
      tag="div"
    >
      <_Builtin.Link
        className="footer-logo"
        button={false}
        block="inline"
        options={{
          href: "#",
        }}
      >
        <_Builtin.Image
          width="auto"
          height="auto"
          loading="auto"
          alt=""
          src="https://uploads-ssl.webflow.com/5a770d8f4323220001d73352/63b9f327ae7aab6c9694c065_Framecore%20light%20gray.svg"
        />
      </_Builtin.Link>
      <_Builtin.Block className="footerlink-block center" tag="div">
        <_Builtin.Block className="spacer-s" tag="div" />
        <_Builtin.Link
          className="footerlink"
          button={false}
          block=""
          options={{
            href: "#read-more",
          }}
        >
          {"Tjänster"}
        </_Builtin.Link>
        <_Builtin.Link
          className="footerlink"
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Kunder & Case"}
        </_Builtin.Link>
        <_Builtin.Link
          className="footerlink"
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {"Kontakta oss"}
        </_Builtin.Link>
      </_Builtin.Block>
      <_Builtin.Block className="footer-line" tag="div" />
      <_Builtin.Block className="some-wrapper" tag="div">
        <_Builtin.HtmlEmbed
          className="hide1"
          value="%3Cstyle%3E%0A.icon-s.solid.footer.heart%3Ahover%20~%20.footer-blob.heart%20%7B%0A%20%20margin-left%3A%200rem%3B%0A%20%20opacity%3A%201%3B%0A%7D%0A%0A.icon-s.solid.footer.star%3Ahover%20~%20.footer-blob.star%20%7B%0A%20%20margin-left%3A%200rem%3B%0A%20%20opacity%3A%201%3B%0A%7D%0A%3C%2Fstyle%3E"
        />
        <_Builtin.Link
          className="icon-s solid footer"
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {""}
        </_Builtin.Link>
        <_Builtin.Link
          className="icon-s solid footer star"
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {""}
        </_Builtin.Link>
        <_Builtin.Link
          className="icon-s solid footer heart"
          button={false}
          block=""
          options={{
            href: "#",
          }}
        >
          {""}
        </_Builtin.Link>
        <_Builtin.Link
          className="icon-s solid footer"
          button={false}
          block=""
          options={{
            href: "#page-top",
          }}
        >
          {""}
        </_Builtin.Link>
        <_Builtin.Block className="footer-blob heart" tag="div">
          {"This website was made with "}
          <_Builtin.Span className="blob-heart text-span text-span-2 text-span-3 text-span-4 text-span-5 text-span-6 text-span-7 text-span-8 text-span-9 text-span-10 text-span-11">
            {""}
          </_Builtin.Span>
          {" by FrameCore 2023"}
        </_Builtin.Block>
        <_Builtin.Block className="footer-blob star" tag="div">
          {"You are amazing!"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
