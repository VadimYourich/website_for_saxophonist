<template>
  <HeaderComponent />

  <section class="blogdetails-banner center"></section>
  <section class="blogdetails center">
    <div class="blogdetails__content">
      <p class="blogdetails__heading">
        Мероприятие "{{
          getlistBlogs[getCurrentFeedbackNumber].event
        }}"<br /><span class="blogdetails__text"
          >состоялось {{ getlistBlogs[getCurrentFeedbackNumber].date }}</span
        >
      </p>
      <p class="blogdetails__text">
        Место проведения: {{ getlistBlogs[getCurrentFeedbackNumber].place }}
      </p>
      <br />
      <p class="blogdetails__text">Отзывы посетителей мероприятия:</p>
      <p
        class="blogdetails__text"
        v-for="(value, name, index) in getlistBlogs[getCurrentFeedbackNumber]
          .reviews"
      >
        {{ index + 1 }}. {{ name }}: {{ value }}
      </p>
      <p
        class="blogdetails__text"
        v-if="
          Object.keys(getlistBlogs[getCurrentFeedbackNumber].reviews).length ==
          0
        "
      >
        Не оставлены
      </p>
    </div>
    <div class="blogdetailsSlider"></div>
    <SliderComponent
      :slider-pictures="getlistBlogs[getCurrentFeedbackNumber].sliderPictures"
    />
  </section>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import SliderComponent from "../components/SliderComponent.vue";
import { mapGetters } from "vuex";
import { useHead } from "@vueuse/head";

export default {
  name: "BlogDetails",
  components: { HeaderComponent, FooterComponent, SliderComponent },
  setup() {
    useHead({
      title: "SaxSanych | Подробнее о мероприятии",
      meta: [
        {
          name: "BlogDetails",
          content:
            "Фотографии и отзывы с различных мероприятий саксофониста SaxSanych",
        },
      ],
    });
  },
  computed: {
    ...mapGetters(["getlistBlogs"]),
    getCurrentFeedbackNumber() {
      const FeedbackNumberParam = parseInt(this.$route.params.id) - 1;
      return FeedbackNumberParam;
    },
  },
};
</script>

<!-- <style lang="scss" scoped>
</style> -->
