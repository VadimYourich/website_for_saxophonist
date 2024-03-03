<template>
  <HeaderComponent />

  <section class="banner">
    <div class="banner__box center">
      <div class="banner__content">
        <div class="banner__subcontent">
          <h1 class="banner__heading">Музыкальная мастерская</h1>
        </div>
        <router-link class="banner__button" to="/blog">
          Познакомиться
        </router-link>
      </div>
    </div>
  </section>

  <section class="post center">
    <div class="post__mainInfo">
      <!-- <h2 class="post__mainHeading">SAX SANYCH</h2> -->
      <div class="post__logo">
        <h2 class="post__logoText_1">SAX</h2>
        <h2 class="post__logoText_2">SANYCH</h2>
      </div>

      <p class="post__mainText">
        - саксофонист, кларнетист, импровизатор, дирижёр и руководитель
        народного духового оркестра, преподаватель, лауpeат краевых и
        всeроссийских конкурсов, фестивалей, деятель культуры и искусства.
      </p>
    </div>
    <div class="post__box">
      <div class="post__subcontent">
        <div class="post__info">
          <p class="post__text">
            SaxSanych исполняет популярную и джазовую музыку.
          </p>
          <br /><br />
          <p class="post__text">
            Закончил обучение на эстрадно-духовом отделении Краснодарского
            государственного института культуры.
          </p>
        </div>
        <div class="post__details">
          <details class="post__details-button">
            <summary class="post__details-summary" @click="toggleBtn1">
              <span class="post__details-title">{{
                showBtn1 ? "Подробнее" : "Скрыть"
              }}</span>
              <svg
                class="post__svg-details"
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
            </summary>
            <p class="post__text post__text-details">
              Дополнительная информация появится позже, по мере наполнения
              сайта.
            </p>
          </details>
        </div>
      </div>
      <img
        class="post__img"
        src="@/assets/img/biography.jpg"
        alt="post image"
      />
    </div>
    <div class="post__box">
      <img
        class="post__img"
        src="@/assets/img/orchestra.jpg"
        alt="post image"
      />

      <div class="post__subcontent">
        <div class="post__info">
          <p class="post__text">
            Дирижёр и солист народного духового оркестра.
          </p>
          <br /><br />
          <p class="post__text">
            Неоднократно оркестр становился победителем краевых и всероссийских
            конкурсов. Тем самым подтверждая высокий уровень мастерства!
          </p>
        </div>
        <div class="post__details">
          <details class="post__details-button">
            <summary class="post__details-summary" @click="toggleBtn2">
              <span class="post__details-title">{{
                showBtn2 ? "Подробнее" : "Скрыть"
              }}</span>
              <svg
                class="post__svg-details"
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
            </summary>
            <p class="post__text post__text-details">
              Дополнительная информация появится позже, по мере наполнения
              сайта.
            </p>
          </details>
        </div>
      </div>
    </div>
    <div class="post__box">
      <div class="post__subcontent">
        <div class="post__info">
          <p class="post__text">
            Руководитель и преподаватель детской школы искусств с 2004 года. Его
            выпускники поступают в ведущие профессиональные учреждения культуры
            и искусства страны.
          </p>
          <br /><br />
          <p class="post__text">
            Возможны индивидуальные занятия или дистанционные консультации.
          </p>
        </div>
        <div class="post__details">
          <details class="post__details-button">
            <summary class="post__details-summary" @click="toggleBtn3">
              <span class="post__details-title">{{
                showBtn3 ? "Подробнее" : "Скрыть"
              }}</span>
              <svg
                class="post__svg-details"
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
            </summary>
            <p class="post__text post__text-details">
              Дополнительная информация появится позже, по мере наполнения
              сайта.
            </p>
          </details>
        </div>
      </div>
      <img class="post__img" src="@/assets/img/teaching.jpg" alt="post image" />
    </div>
    <div class="post__box">
      <img
        class="post__img"
        src="@/assets/img/companyParty.jpg"
        alt="post image"
      />

      <div class="post__subcontent">
        <div class="post__info">
          <!-- <h3 class="post__title">
              Low Cost Latest Invented Interior Designing Ideas
            </h3> -->
          <p class="post__text">
            Музыкальное сопровождение и сольные выступления на меpопpиятиях по
            Краснодарскому краю и в г. Ростове-на-Дону!
          </p>
          <br /><br />
          <p class="post__text">
            Многолетний опыт, качественное исполнение, разносторонний репертуар!
          </p>
        </div>
        <div class="post__details">
          <details class="post__details-button">
            <summary class="post__details-summary" @click="toggleBtn4">
              <span class="post__details-title">{{
                showBtn4 ? "Подробнее" : "Скрыть"
              }}</span>
              <svg
                class="post__svg-details"
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
            </summary>
            <p class="post__text post__text-details">
              Дополнительная информация появится позже, по мере наполнения
              сайта.
            </p>
          </details>
        </div>
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
  name: "Главная",
  components: { HeaderComponent, FooterComponent },
  setup() {
    useHead({
      title: "Main",
      meta: [
        {
          name: "SaxSanych - главная страница",
          content: "Главная страница",
        },
      ],
    });
  },
  data() {
    return {
      headTitle: "Main",
      showBtn1: true,
      showBtn2: true,
      showBtn3: true,
      showBtn4: true,
    };
  },
  methods: {
    toggleBtn1() {
      this.showBtn1 = !this.showBtn1;
    },
    toggleBtn2() {
      this.showBtn2 = !this.showBtn2;
    },
    toggleBtn3() {
      this.showBtn3 = !this.showBtn3;
    },
    toggleBtn4() {
      this.showBtn4 = !this.showBtn4;
    },
  },
};
</script>

<style scoped></style>
