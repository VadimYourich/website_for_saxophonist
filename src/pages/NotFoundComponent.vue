<template>
  <HeaderComponent />
  <div class="notfound center">
    <div class="notfound__left">
      <div class="notfound__info">
        <p class="notfound__heading">404</p>
        <p class="notfound__text">
          К сожалению, запрашиваемая вами страница не найдена
        </p>
      </div>
      <router-link to="/" class="notfound__button">
        На главную
        <svg
          class="notfound__icon"
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.85938 8.43542L15.5826 8.29857M10.4776 1.91138L17.0005 8.43436L10.3461 15.0887"
            stroke="#CDA274"
            stroke-width="2"
            stroke-linecap="square"
            stroke-linejoin="round"
          />
        </svg>
      </router-link>
    </div>
    <div class="notfound__right">
      <img
        class="notfound__img"
        src="@/assets/img/notfound.jpg"
        alt="picture not found page"
      />
    </div>
  </div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue";
import { useHead } from "@vueuse/head";

export default {
  name: "404",
  components: { HeaderComponent },
  setup() {
    useHead({
      title: "Страница не существует",
      meta: [
        {
          name: "NotFound",
          content: "Страница не найдена",
        },
      ],
    });
  },
};
</script>

<style lang="scss" scoped></style>
