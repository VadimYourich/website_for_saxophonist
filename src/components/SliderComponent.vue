<template>
  <swiper
    :style="{
      '--swiper-navigation-color': '#CDA274',
      '--swiper-pagination-color': '#CDA274',
    }"
    :zoom="true"
    :navigation="true"
    :pagination="{
      clickable: true,
    }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="picture in sliderPictures">
      <div class="swiper-zoom-container">
        <img
          class="blogdetails__img swiper-slide__img"
          :src="picture.src"
          :alt="picture.alt"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/scss";

import "swiper/scss/zoom";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

import { Zoom, Navigation, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
  props: {
    sliderPictures: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.swiper-slide__img {
  margin-bottom: 0px;
}
.swiper-zoom-container > img {
  max-width: 85%;
  max-height: 100vw;
}
</style>
