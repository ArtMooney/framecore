import React from "react";
import * as _Builtin from "./_Builtin";

export function Footer({ as: _Component = _Builtin.Section }) {
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
          value="%3Cstyle%3E%0A.some-icon.heart%3Ahover%20~%20.footer-blob.heart%20%7B%0A%20%20margin-left%3A%200rem%3B%0A%20%20opacity%3A%201%3B%0A%7D%0A%0A.some-icon.star%3Ahover%20~%20.footer-blob.star%20%7B%0A%20%20margin-left%3A%200rem%3B%0A%20%20opacity%3A%201%3B%0A%7D%0A%3C%2Fstyle%3E"
        />
        <_Builtin.HtmlEmbed
          className="some-icon house"
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%3E%0A%20%20%20%20%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill%3D%22Currentcolor%22%0A%20%20%20%20%20%20d%3D%22M575.8%20255.5c0%2018-15%2032.1-32%2032.1h-32l.7%20160.2c0%202.7-.2%205.4-.5%208.1V472c0%2022.1-17.9%2040-40%2040H456c-1.1%200-2.2%200-3.3-.1c-1.4%20.1-2.8%20.1-4.2%20.1H416%20392c-22.1%200-40-17.9-40-40V448%20384c0-17.7-14.3-32-32-32H256c-17.7%200-32%2014.3-32%2032v64%2024c0%2022.1-17.9%2040-40%2040H160%20128.1c-1.5%200-3-.1-4.5-.2c-1.2%20.1-2.4%20.2-3.6%20.2H104c-22.1%200-40-17.9-40-40V360c0-.9%200-1.9%20.1-2.8V287.6H32c-18%200-32-14-32-32.1c0-9%203-17%2010-24L266.4%208c7-7%2015-8%2022-8s15%202%2021%207L564.8%20231.5c8%207%2012%2015%2011%2024z%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E"
        />
        <_Builtin.HtmlEmbed
          className="some-icon star"
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20576%20512%22%3E%0A%20%20%20%20%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill%3D%22Currentcolor%22%0A%20%20%20%20%20%20d%3D%22M316.9%2018C311.6%207%20300.4%200%20288.1%200s-23.4%207-28.8%2018L195%20150.3%2051.4%20171.5c-12%201.8-22%2010.2-25.7%2021.7s-.7%2024.2%207.9%2032.7L137.8%20329%20113.2%20474.7c-2%2012%203%2024.2%2012.9%2031.3s23%208%2033.8%202.3l128.3-68.5%20128.3%2068.5c10.8%205.7%2023.9%204.9%2033.8-2.3s14.9-19.3%2012.9-31.3L438.5%20329%20542.7%20225.9c8.6-8.5%2011.7-21.2%207.9-32.7s-13.7-19.9-25.7-21.7L381.2%20150.3%20316.9%2018z%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E"
        />
        <_Builtin.HtmlEmbed
          className="some-icon heart"
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%0A%20%20%20%20%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill%3D%22Currentcolor%22%0A%20%20%20%20%20%20d%3D%22M47.6%20300.4L228.3%20469.1c7.5%207%2017.4%2010.9%2027.7%2010.9s20.2-3.9%2027.7-10.9L464.4%20300.4c30.4-28.3%2047.6-68%2047.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347%2036.5%20300.6%2051.4%20268%2084L256%2096%20244%2084c-32.6-32.6-79-47.5-124.6-39.9C50.5%2055.6%200%20115.2%200%20185.1v5.8c0%2041.5%2017.2%2081.2%2047.6%20109.5z%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E"
        />
        <_Builtin.HtmlEmbed
          className="some-icon arrow"
          value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20384%20512%22%3E%0A%20%20%20%20%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill%3D%22Currentcolor%22%0A%20%20%20%20%20%20d%3D%22M214.6%2041.4c-12.5-12.5-32.8-12.5-45.3%200l-160%20160c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L160%20141.2V448c0%2017.7%2014.3%2032%2032%2032s32-14.3%2032-32V141.2L329.4%20246.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3l-160-160z%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E"
        />
        <_Builtin.HtmlEmbed
          className="footer-blob heart"
          id="w-node-c440224c-eb27-a6d8-6a12-da9b0e0b28e7-9313cf35"
          value="This%20website%20was%20made%20with%0A%20%20%3Csvg%20class%3D%22heart-red%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%3E%0A%20%20%20%20%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill%3D%22Currentcolor%22%0A%20%20%20%20%20%20d%3D%22M47.6%20300.4L228.3%20469.1c7.5%207%2017.4%2010.9%2027.7%2010.9s20.2-3.9%2027.7-10.9L464.4%20300.4c30.4-28.3%2047.6-68%2047.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347%2036.5%20300.6%2051.4%20268%2084L256%2096%20244%2084c-32.6-32.6-79-47.5-124.6-39.9C50.5%2055.6%200%20115.2%200%20185.1v5.8c0%2041.5%2017.2%2081.2%2047.6%20109.5z%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E%0Aby%20FrameCore%202023"
        />
        <_Builtin.Block className="footer-blob star" tag="div">
          {"You are amazing!"}
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
