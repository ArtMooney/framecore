<script setup>
import { Vue3Lottie } from "vue3-lottie";
import loading from "../assets/loading.json";
</script>

<template>
  <div class="gallery-app">
    <div v-if="galleryLoader" class="gallery-loader">
      <Vue3Lottie
        ref="lottieSandwich"
        :animationData="loading"
        :width="150"
        :height="150"
      />
    </div>

    <div class="gallery-lightbox" :style="{ display: displayGalleryLightbox }">
      <div class="image lightbox source-wrapper">
        <img v-if="imageOrVideo" class="image lightbox" :src="imageLightbox" />
        <div v-if="!imageOrVideo" class="image lightbox">
          <video ref="videoplayer" muted playsinline autoplay>
            <source :src="imageLightbox" />
          </video>
        </div>
      </div>
      <div class="lightbox-arrow left">
        <a href="#" class="icon-s solid arrowbutton" v-on:click="leftArrow"
          ></a
        >
      </div>
      <div class="lightbox-arrow right">
        <a href="#" class="icon-s solid arrowbutton" v-on:click="rightArrow"
          ></a
        >
      </div>
      <div class="lightbox-close">
        <a href="#" class="icon-m solid" v-on:click="galleryClose"></a>
      </div>
    </div>

    <div class="content gallery">
      <div class="gallery-wrapper" :style="{ display: displayGallery }">
        <div class="gallery-item" v-for="(image, index) of images">
          <img
            :src="`https://filedn.com/lODGkE8bRyjVm8tpT986SXj/framecore/thumbs/${image.thumbname}?${getRandomNumber}`"
            @click="showItem($event, index)"
            @load="galleryItemLoaded"
            @error="
              $event.target.src = `https://filedn.com/lODGkE8bRyjVm8tpT986SXj/framecore/thumbs/${image.thumbname}?${getRandomNumber}`
            "
            class="image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",

  data() {
    return {
      images: [],
      galleryLightbox: false,
      displayGalleryLightbox: "none",
      displayGallery: "none",
      imageLightbox: "",
      galleryLoader: true,
      imageOrVideo: true,
      imageIndex: 0,
      loadedThumbs: 0,
    };
  },

  async created() {
    this.images = await this.getImageData;
  },

  mounted() {
    // this.displayGalleryLightbox = "flex";
  },

  computed: {
    async getImageData() {
      const url = "https://api.framecore.se/webhook/framecore-gallery";
      const res = await fetch(url);
      return await res.json();
    },

    getRandomNumber() {
      return Math.floor(Math.random() * 9999999999);
    },
  },

  methods: {
    showItem(image, index) {
      const images = JSON.parse(JSON.stringify(this.images));
      if (index < 0) index = images.length - 1;
      if (index > images.length - 1) index = 0;
      this.imageLightbox = `https://filedn.com/lODGkE8bRyjVm8tpT986SXj/framecore/gallery/${images[index].name}`;

      if (
        images[index].contenttype === "image/jpeg" ||
        images[index].contenttype === "image/png"
      ) {
        if (image) {
          // when image is opened from gallery list
          this.imageOrVideo = true;
          this.galleryLightbox = !this.galleryLightbox;
        } else {
          // when jumping between images in gallery
          this.imageOrVideo = true;
        }
      } else if (images[index].contenttype === "video/mp4") {
        if (image) {
          // when video is opened from gallery list
          this.imageOrVideo = false;
          this.galleryLightbox = !this.galleryLightbox;

          this.$nextTick(() => {
            const player = new Plyr(this.$refs.videoplayer);
            player.muted = true;
            player.play();
          });
        } else {
          // when jumping between videos in gallery
          this.imageOrVideo = false;

          this.$nextTick(() => {
            const player = new Plyr(this.$refs.videoplayer);
            player.muted = true;
            player.play();
          });
        }
      }

      this.imageIndex = index;
    },

    galleryClose() {
      this.galleryLightbox = false;
    },

    leftArrow() {
      this.showItem(null, this.imageIndex - 1);
    },

    rightArrow() {
      this.showItem(null, this.imageIndex + 1);
    },

    galleryItemLoaded(event) {
      this.loadedThumbs = this.loadedThumbs + 1;
      if (this.loadedThumbs === this.images.length) {
        this.displayGallery = "block";
        this.galleryLoader = false;
      }
    },
  },
};
</script>
