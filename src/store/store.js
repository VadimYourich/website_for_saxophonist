import { createStore } from "vuex";

export default createStore({
  state: {
    listBlogs: [
      {
        id: 1,
        flag: false,
        src: require("@/assets/img/blog/blog1.png"),
        place: "Центральный парк",
        event: "Выступление оркестра",
        reviews: {},
        date: "20.07.2023г.",
        sliderPictures: [
          {
            src: require("@/assets/img/blog/blog1_details1.jpg"),
            alt: "photo details 1",
          },
          {
            src: require("@/assets/img/blog/blog1_details2.jpg"),
            alt: "photo details 2",
          },
          {
            src: require("@/assets/img/blog/blog1_details3.jpg"),
            alt: "photo details 3",
          },
          {
            src: require("@/assets/img/blog/blog1_details4.jpg"),
            alt: "photo details 4",
          },
          {
            src: require("@/assets/img/blog/blog1_details5.jpg"),
            alt: "photo details 5",
          },
        ],
      },
      {
        id: 2,
        flag: false,
        src: require("@/assets/img/blog/blog2.png"),
        place: 'ресторан "Магадан"',
        event: "Юбилей В.И. Эйдельман",
        reviews: { "В.И. Эйдельман": '"Спасибо! Восхитительное выступление!"' },
        date: "21.01.2023г.",
        sliderPictures: [],
      },
      {
        id: 3,
        flag: false,
        src: require("@/assets/img/blog/blog3.png"),
        place: 'банкет-холл "ДонЭкспоцентр"',
        event: 'Корпоратив "Роствертол"',
        reviews: { "Савелий Максимович Крымский": '"Спасибо, маэстро!"' },
        date: "24.02.2023г.",
        sliderPictures: [
          {
            src: require("@/assets/img/blog/blog3_details1.jpg"),
            alt: "photo details 1",
          },
        ],
      },
      {
        id: 4,
        flag: false,
        src: require("@/assets/img/blog/blog4.png"),
        place: 'джаз-клуб "Эссе"',
        event: "JAM SESSION",
        reviews: {},
        date: "20.04.2023г.",
        sliderPictures: [
          {
            src: require("@/assets/img/blog/blog4_details1.jpg"),
            alt: "photo details 1",
          },
          {
            src: require("@/assets/img/blog/blog4_details2.jpg"),
            alt: "photo details 2",
          },
        ],
      },
      {
        id: 5,
        flag: false,
        src: require("@/assets/img/blog/blog5.jpg"),
        place: 'ресторан "Валери"',
        event: "День рождения В.Ю. Степанько",
        reviews: { "В.Ю. Степанько": '"Спасибо, великолепный вечер!"' },
        date: "21.05.2023г.",
      },
      {
        id: 6,
        flag: false,
        src: require("@/assets/img/blog/blog6.png"),
        place: 'ресторан "Ялла"',
        event: "Вечер встречи выпускников",
        reviews: {
          "Раиса Михайловна Клиновая":
            '"Заказала мелодию моей молодости) Услышала прекрасное исполнение и погрузилась в воспоминания) Спасибо, маэстро!"',

          "Семён Семёныч Горбунков": '"Потрясающая атмосфера!"',
          "Виктор Викторович Попов": '"Музыкальное сопровождение - супер!!!"',
        },

        date: "28.05.2023г.",
      },
      {
        id: 7,
        flag: false,
        src: require("@/assets/img/blog/blog7.png"),
        place: 'итальянский ресторан "Chelentano Bar"',
        event: "День рождения Славко В.М.",
        reviews: {
          "Валентина Викторовна Славко":
            '"Заказала мелодию моей молодости) Услышала прекрасное исполнение и погрузилась в воспоминания) Спасибо, маэстро!"',

          "Виктор Михайлович Славко": '"Потрясающая атмосфера!"',
          "Татьяна Олеговна Иванова": '"Музыкальное сопровождение - супер!!!"',
        },
        date: "02.06.2023г.",
        sliderPictures: [
          {
            src: require("@/assets/img/blog/blog7_details1.jpg"),
            alt: "photo details 1",
          },
        ],
      },
      {
        id: 8,
        flag: false,
        src: require("@/assets/img/blog/blog8.png"),
        place: '​ресторанно-гостиничный комплекс "Тет-а-тет"',
        event: "Свадьба Согомонян",
        reviews: { Валентин: "Спасибо, маэстро!" },
        date: "07.06.2023г.",
      },
      {
        id: 9,
        flag: false,
        src: require("@/assets/img/blog/blog9.jpg"),
        place: 'ресторан "Атаманская усадьба"',
        event: "Юбилей Карена Владимировича Аванисян",
        reviews: {
          "Майя Ашотовна Аванисян": '"Душевное исполнение)"',
          "Самсон Владимирович Аванисян": '"Потрясающая атмосфера!"',
          "Зураб Ашотович Аванисян": '"Музыкальное сопровождение - супер!!!"',
        },
        date: "11.07.2022г.",
        sliderPictures: [
          {
            src: require("@/assets/img/blog/blog9_details1.jpg"),
            alt: "photo details 1",
          },
        ],
      },
      {
        id: 10,
        flag: false,
        src: require("@/assets/img/blog/blog10.png"),
        place: "Embargo Villa",
        event: 'Корпоратив "ЮгМашНефтьГазСтрой"',
        reviews: {},
        date: "09.01.2023г.",
      },
      {
        id: 11,
        flag: false,
        src: require("@/assets/img/blog/blog2.png"),
        place: 'ресторан "Магадан"',
        event: "Юбилей В.И. Эйдельман",
        reviews: {},
        date: "27.08.2023г.",
      },
      {
        id: 12,
        flag: false,
        src: require("@/assets/img/blog/blog12.png"),
        place: 'ресторан "Петровский причал"',
        event: 'Корпоратив "ОборонПромТорг"',
        reviews: {},
        date: "11.08.2023г.",
      },
      {
        id: 13,
        flag: false,
        src: require("@/assets/img/blog/blog13.png"),
        place: 'джаз-клуб "Эссе"',
        event: "JAM SESSION",
        reviews: {},
        date: "14.09.2023г.",
      },
      {
        id: 14,
        flag: false,
        src: require("@/assets/img/blog/blog14.png"),
        place: 'Кафе "Виктория"',
        event: "День рождения В.Ю. Середа",
        reviews: {},
        date: "22.09.2023г.",
      },
      {
        id: 15,
        flag: false,
        src: require("@/assets/img/blog/blog6.png"),
        place: 'ресторан "Ялла"',
        event: "Вечер встречи выпускников",
        reviews: {},
        date: "01.10.2023г.",
      },
      {
        id: 16,
        flag: false,
        src: require("@/assets/img/blog/blog16.png"),
        place: '​Ресторанно-гостиничный комплекс "Шери Холл"',
        event: "Свадьба Соколовых",
        reviews: {},
        date: "21.11.2023г.",
      },
      {
        id: 17,
        flag: false,
        src: require("@/assets/img/blog/blog8.png"),
        place: '​Ресторанно-гостиничный комплекс "Тет-а-тет"',
        event: "Свадьба Согомонян",
        reviews: {},
        date: "29.12.2023г.",
      },
      {
        id: 18,
        flag: false,
        src: require("@/assets/img/blog/blog18.png"),
        place: 'ресторан грузинской кухни "Иверия"',
        event: "Юбилей С.С. Верещагина",
        reviews: {
          "Валентина Ивановна Верещагина":
            '"Заказала мелодию моей молодости) Услышала прекрасное исполнение и погрузилась в воспоминания) Спасибо, дорогой друг!"',

          "Семён Семёныч Верещагин": '"Потрясающая атмосфера!"',
          "Татьяна Олеговна Верещагина":
            '"Музыкальное сопровождение - супер!!!"',
        },
        date: "11.06.2023г.",
        sliderPictures: [
          {
            src: require("@/assets/img/blog/blog18_details1.jpg"),
            alt: "photo details 1",
          },
          {
            src: require("@/assets/img/blog/blog18_details2.jpg"),
            alt: "photo details 2",
          },
          {
            src: require("@/assets/img/blog/blog18_details3.jpg"),
            alt: "photo details 3",
          },
        ],
      },
    ],
  },
  getters: {
    getlistBlogs(state) {
      return state.listBlogs;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
