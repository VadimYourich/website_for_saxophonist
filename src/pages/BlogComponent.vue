<template>
  <HeaderComponent />

  <section class="blogBanner center">
    <h1 class="blogBanner__title">Блог</h1>
  </section>

  <section class="blogs center">
    <p class="blogs__title">Добро пожаловать на мои недавние выступления!</p>
    <div class="blogs__box">
      <div v-for="item in paginatedProducts" :key="item.id" class="blogs__blog">
        <img class="blogs__img" :src="item.src" alt="photo blog" />
        <div class="blogs__content">
          <div class="blogs__info">
            <h2 class="blogs__heading">{{ item.place }}</h2>
            <p class="blogs__text">{{ item.event }}</p>
          </div>
          <p class="blogs__reviews">Подробнее</p>
          <router-link
            :to="{ name: 'BlogDetails', params: { id: item.id } }"
            class="blogs__bloglink"
          >
            <svg
              class="blogs__icon"
              width="52"
              height="53"
              viewBox="0 0 52 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="26" cy="26.5" r="26" fill="#F4F0EC" />
              <path
                d="M23.771 33.1855L29.7139 26.4998L23.771 19.8141"
                stroke="#292F36"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </div>
      </div>
    </div>
    <div class="blogs__pagination" v-if="totalPages > 1">
      <div class="blogs__paginationbox">
        <router-link
          v-for="pageNumber in totalPages"
          :key="pageNumber"
          :to="getPageLink(pageNumber)"
          @click="activePageNumber(pageNumber)"
          :class="[
            'blogs__paginationlink',
            pageNumber === pageNumberActive
              ? 'blogs__paginationlink_active'
              : false,
          ]"
          >{{ pageNumber }}</router-link
        >
        <router-link
          class="blogs__paginationlink"
          :to="getPageLinkByArrow(pageNumberActive + 1)"
          @click="activePageNumber(pageNumberActive + 1)"
        >
          <svg
            class="blogs__paginationimg"
            width="53"
            height="52"
            viewBox="0 0 53 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274" />
            <path
              d="M23.5571 32L29.5 25.3143L23.5571 18.6286"
              stroke="#292F36"
              stroke-width="1"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </router-link>
      </div>
    </div>
  </section>

  <FooterComponent />
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import FooterComponent from "../components/FooterComponent.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "Блог",
  components: { HeaderComponent, FooterComponent },
  setup() {
    useHead({
      title: "SaxSanych | Блог",
      meta: [
        {
          name: "Blog",
          content: "Блог саксофониста SaxSanych",
        },
      ],
    });
  },
  data() {
    return {
      headTitle: "Blog",
      listBlogs: this.$store.state.listBlogs,
      itemsPerPage: 9,
      countPages: 1,
      pageNumberActive: 1,
    };
  },
  methods: {
    activePageNumber(clickPage) {
      if (clickPage <= this.countPages) {
        this.pageNumberActive = clickPage;
      } else {
        this.pageNumberActive = 1;
      }
    },
    getCurrentPageNumber() {
      const pageNumberParam = parseInt(this.$route.params.pageNumber);
      return isNaN(pageNumberParam) || pageNumberParam < 1
        ? 1
        : pageNumberParam;
    },
    getPageLink(pageNumber) {
      return `/blog/${pageNumber}`;
    },
    getPageLinkByArrow(pageNumberNext) {
      if (pageNumberNext <= this.countPages) {
        return `/blog/${pageNumberNext}`;
      } else {
        return `/blog/1`;
      }
    },
  },
  computed: {
    totalPages() {
      this.countPages = Math.ceil(this.listBlogs.length / this.itemsPerPage);
      return Math.ceil(this.listBlogs.length / this.itemsPerPage);
    },
    paginatedProducts() {
      const pageNumber = this.getCurrentPageNumber();
      const startIndex = (pageNumber - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.listBlogs.slice(startIndex, endIndex);
    },
  },
};
</script>

<!-- <style lang="scss" scoped></style> -->
