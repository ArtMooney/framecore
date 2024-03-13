import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";

const _interactionsData = JSON.parse(
  '{"events":{"e-29":{"id":"e-29","name":"","animationType":"custom","eventTypeId":"MOUSE_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-7","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-30"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".accordion-item-trigger","originalId":"63b97bda3d3d7a5c1c4a4f82|98c0cf8f-2e1b-48bc-88cf-cdfe19729e5e","appliesTo":"CLASS"},"targets":[{"selector":".accordion-item-trigger","originalId":"63b97bda3d3d7a5c1c4a4f82|98c0cf8f-2e1b-48bc-88cf-cdfe19729e5e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555887741271},"e-30":{"id":"e-30","name":"","animationType":"custom","eventTypeId":"MOUSE_SECOND_CLICK","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-8","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-29"}},"mediaQueries":["main","medium","small","tiny"],"target":{"selector":".accordion-item-trigger","originalId":"63b97bda3d3d7a5c1c4a4f82|98c0cf8f-2e1b-48bc-88cf-cdfe19729e5e","appliesTo":"CLASS"},"targets":[{"selector":".accordion-item-trigger","originalId":"63b97bda3d3d7a5c1c4a4f82|98c0cf8f-2e1b-48bc-88cf-cdfe19729e5e","appliesTo":"CLASS"}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1555887741273}},"actionLists":{"a-7":{"id":"a-7","title":"accordion open","actionItemGroups":[{"actionItems":[{"id":"a-7-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-item-content","selectorGuids":["1a8da2ac-08e5-fe02-93cf-3a20c3a3dabd"]},"heightValue":0,"widthUnit":"PX","heightUnit":"PX","locked":false}},{"id":"a-7-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".icon-s.solid","selectorGuids":["39b6b29e-81a3-b609-53be-ba0943b41606","f5923358-2484-5db1-60de-54a4e86f1f8f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]},{"actionItems":[{"id":"a-7-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-item-content","selectorGuids":["1a8da2ac-08e5-fe02-93cf-3a20c3a3dabd"]},"widthUnit":"AUTO","heightUnit":"AUTO","locked":false}},{"id":"a-7-n-5","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"outQuad","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".icon-s.solid","selectorGuids":["39b6b29e-81a3-b609-53be-ba0943b41606","f5923358-2484-5db1-60de-54a4e86f1f8f"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1555887748956},"a-8":{"id":"a-8","title":"accordion close","actionItemGroups":[{"actionItems":[{"id":"a-8-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"inQuad","duration":200,"target":{"useEventTarget":"SIBLINGS","selector":".accordion-item-content","selectorGuids":["1a8da2ac-08e5-fe02-93cf-3a20c3a3dabd"]},"heightValue":0,"widthUnit":"AUTO","heightUnit":"PX","locked":false}},{"id":"a-8-n-3","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"inQuad","duration":200,"target":{"useEventTarget":"CHILDREN","selector":".icon-s.solid","selectorGuids":["39b6b29e-81a3-b609-53be-ba0943b41606","f5923358-2484-5db1-60de-54a4e86f1f8f"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"DEG"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1555887963005}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Gallery({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData);

  return (
    <_Component className="gallery-app" tag="div" id="gallery-app">
      <_Builtin.Block
        className="gallery-loader"
        id="w-node-_45dc2f3d-656d-768c-8ca1-a61aff355460-ff35545f"
        tag="div"
        v-if="galleryLoader"
      >
        <_Builtin.NotSupported _atom="Animation" />
      </_Builtin.Block>
      <_Builtin.Block
        className="gallery-lightbox"
        tag="div"
        v-if="galleryLightbox"
        v-bind:style="{ display: displayGalleryLightbox }"
      >
        <_Builtin.HtmlEmbed
          className="image lightbox source-wrapper"
          value="%3Cimg%20%3Asrc%3D%22imageLightbox%22%20v-if%3D%22imageOrVideo%22%20class%3D%22image%20lightbox%22%20%2F%3E%0A%0A%3Cdiv%20v-if%3D%22!imageOrVideo%22%20class%3D%22image%20lightbox%22%3E%0A%20%20%3Cvideo%20ref%3D%22videoplayer%22%20muted%20playsinline%20autoplay%3E%0A%20%20%20%20%3Csource%20%3Asrc%3D%22imageLightbox%22%20%2F%3E%0A%20%20%3C%2Fvideo%3E%0A%3C%2Fdiv%3E"
        />
        <_Builtin.Block className="lightbox-arrow left" tag="div">
          <_Builtin.Link
            className="icon-s solid arrowbutton"
            button={false}
            v-on:click="leftArrow"
            block=""
            options={{
              href: "#",
            }}
          >
            {""}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className="lightbox-arrow right" tag="div">
          <_Builtin.Link
            className="icon-s solid arrowbutton"
            button={false}
            v-on:click="rightArrow"
            block=""
            options={{
              href: "#",
            }}
          >
            {""}
          </_Builtin.Link>
        </_Builtin.Block>
        <_Builtin.Block className="lightbox-close" tag="div">
          <_Builtin.Link
            className="icon-m solid"
            button={false}
            v-on:click="galleryClose"
            block=""
            options={{
              href: "#",
            }}
          >
            {""}
          </_Builtin.Link>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Section
        className="content gallery"
        grid={{
          type: "section",
        }}
        tag="div"
      >
        <_Builtin.Block
          className="gallery-wrapper"
          tag="div"
          v-bind:style="{ display: displayGallery }"
        >
          <_Builtin.Block
            className="gallery-item"
            tag="div"
            v-for="(image, index) of images"
          >
            <_Builtin.HtmlEmbed value="%3Cimg%0A%20%20%3Asrc%3D%22%60https%3A%2F%2Ffiledn.com%2FlODGkE8bRyjVm8tpT986SXj%2Fframecore%2Fthumbs%2F%24%7Bimage.thumbname%7D%3F%24%7BgetRandomNumber%7D%60%22%0A%20%20%40click%3D%22showItem(%24event%2C%20index)%22%0A%20%20%40load%3D%22galleryItemLoaded%22%0A%20%20%40error%3D%22%24event.target.src%3D%60https%3A%2F%2Ffiledn.com%2FlODGkE8bRyjVm8tpT986SXj%2Fframecore%2Fthumbs%2F%24%7Bimage.thumbname%7D%3F%24%7BgetRandomNumber%7D%60%22%0A%20%20class%3D%22image%22%0A%2F%3E" />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Section>
    </_Component>
  );
}
