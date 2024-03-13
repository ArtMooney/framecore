<template>
  <div class="gallery-app" id="gallery-app">
    <div class="gallery-loader" id="w-node-_45dc2f3d-656d-768c-8ca1-a61aff355460-ff35545f">
      <div>
        <p>[Fallback content for unsupported animation]</p>
      </div>
    </div>
    <div class="gallery-lightbox" style="display: {{ displayGalleryLightbox }}">
      <div class="image lightbox source-wrapper">
        <img v-if="imageOrVideo" class="image lightbox" :src="imageLightbox" />
        <div v-if="!imageOrVideo" class="image lightbox">
          <video ref="videoplayer" muted playsinline autoplay>
            <source :src="imageLightbox" />
          </video>
        </div>
      </div>
      <div class="lightbox-arrow left">
        <a href="#" class="icon-s solid arrowbutton" v-on:click="leftArrow"></a>
      </div>
      <div class="lightbox-arrow right">
        <a href="#" class="icon-s solid arrowbutton" v-on:click="rightArrow"></a>
      </div>
      <div class="lightbox-close">
        <a href="#" class="icon-m solid" v-on:click="galleryClose"></a>
      </div>
    </div>
    <div class="content gallery">
      <div class="gallery-wrapper" style="display: {{ displayGallery }}">
        <div class="gallery-item" v-for="(image, index) of images">
          <img :src="`https://filedn.com/lODGkE8bRyjVm8tpT986SXj/framecore/thumbs/${image.thumbname}?${getRandomNumber}`"
               @click="showItem($event, index)"
               @load="galleryItemLoaded"
               @error="$event.target.src=`https://filedn.com/lODGkE8bRyjVm8tpT986SXj/framecore/thumbs/${image.thumbname}?${getRandomNumber}`"
               class="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>
