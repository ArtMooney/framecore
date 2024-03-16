import React from "react";
import * as _Builtin from "./_Builtin";

export function Gallery({ as: _Component = _Builtin.Block }) {
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
          <_Builtin.HtmlEmbed
            className="gallery-arrow"
            v-on:click="leftArrow"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%3E%0A%20%20%20%20%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill%3D%22Currentcolor%22%0A%20%20%20%20%20%20d%3D%22M9.4%20233.4c-12.5%2012.5-12.5%2032.8%200%2045.3l192%20192c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L77.3%20256%20246.6%2086.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200l-192%20192z%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block className="lightbox-arrow right" tag="div">
          <_Builtin.HtmlEmbed
            className="gallery-arrow"
            v-on:click="rightArrow"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%3E%0A%20%20%20%20%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill%3D%22Currentcolor%22%0A%20%20%20%20%20%20d%3D%22M310.6%20233.4c12.5%2012.5%2012.5%2032.8%200%2045.3l-192%20192c-12.5%2012.5-32.8%2012.5-45.3%200s-12.5-32.8%200-45.3L242.7%20256%2073.4%2086.6c-12.5-12.5-12.5-32.8%200-45.3s32.8-12.5%2045.3%200l192%20192z%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E"
          />
        </_Builtin.Block>
        <_Builtin.Block className="lightbox-close" tag="div">
          <_Builtin.HtmlEmbed
            className="gallery-close"
            v-on:click="galleryClose"
            value="%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20384%20512%22%3E%0A%20%20%20%20%3C!--!Font%20Awesome%20Free%206.5.1%20by%20%40fontawesome%20-%20https%3A%2F%2Ffontawesome.com%20License%20-%20https%3A%2F%2Ffontawesome.com%2Flicense%2Ffree%20Copyright%202024%20Fonticons%2C%20Inc.--%3E%0A%20%20%20%20%3Cpath%0A%20%20%20%20%20%20fill%3D%22Currentcolor%22%0A%20%20%20%20%20%20d%3D%22M342.6%20150.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200L192%20210.7%2086.6%20105.4c-12.5-12.5-32.8-12.5-45.3%200s-12.5%2032.8%200%2045.3L146.7%20256%2041.4%20361.4c-12.5%2012.5-12.5%2032.8%200%2045.3s32.8%2012.5%2045.3%200L192%20301.3%20297.4%20406.6c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L237.3%20256%20342.6%20150.6z%22%0A%20%20%20%20%2F%3E%0A%20%20%3C%2Fsvg%3E"
          />
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
