<script setup>
import { Vue3Lottie } from "vue3-lottie";
import loading from "../assets/loading.json";
import ChevronLeft from "../assets/ChevronLeft.vue";
import ChevronRight from "../assets/ChevronRight.vue";
import Xmark from "../assets/Xmark.vue";
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

    <div v-if="galleryLightbox" class="gallery-lightbox">
      <div class="image lightbox source-wrapper">
        <img v-if="imageOrVideo" class="image lightbox" :src="imageLightbox" />
        <div v-if="!imageOrVideo" class="image lightbox">
          <video ref="videoplayer" muted playsinline autoplay>
            <source :src="imageLightbox" />
          </video>
        </div>
      </div>
      <div class="lightbox-arrow left">
        <div class="gallery-arrow" @click="leftArrow">
          <ChevronLeft />
        </div>
      </div>
      <div class="lightbox-arrow right">
        <div class="gallery-arrow" @click="rightArrow">
          <ChevronRight />
        </div>
      </div>
      <div class="lightbox-close">
        <div class="gallery-close">
          <Xmark @click="galleryClose" />
        </div>
      </div>
    </div>

    <div class="content gallery">
      <div v-show="displayGallery" class="gallery-wrapper">
        <div class="gallery-item" v-for="(image, index) of images">
          <img
            :src="`${thumbsBaseUrl}${image.thumbname}?${getRandomNumber}`"
            @click="showItem($event, index)"
            @load="galleryItemLoaded"
            class="image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Plyr from "plyr";

export default {
  name: "Gallery",

  data() {
    return {
      images: [],
      galleryLightbox: false,
      displayGallery: false,
      imageLightbox: "",
      galleryLoader: true,
      imageOrVideo: true,
      imageIndex: 0,
      loadedThumbs: 0,
      thumbsBaseUrl: `${import.meta.env.VITE_THUMBSBASEURL}`,
      lightboxBaseUrl: `${import.meta.env.VITE_LIGHTBOXBASEURL}`,
      userName: `${import.meta.env.VITE_USERNAME}`,
      userPass: `${import.meta.env.VITE_USERPASS}`,
    };
  },

  async created() {
    this.images = await this.getImageData;
  },

  computed: {
    async getImageData() {
      const url = "/api/gallery";
      const res = await fetch(url, {
        headers: {
          Authorization: "Basic " + btoa(this.userName + ":" + this.userPass),
        },
      });
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
      this.imageLightbox = `${this.lightboxBaseUrl}${images[index].name}`;

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
        this.displayGallery = true;
        this.galleryLoader = false;
      }
    },
  },
};
</script>

<style scoped>
@import "https://cdn.plyr.io/3.7.8/plyr.css";
</style>
