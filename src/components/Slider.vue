<template>
  <div class="slider">
    <h2>Clique pour suivant:</h2>
    <div
      class="carousel"
      v-for="item in data"
      :key="item.idDrink"
      :name="item.strDrink"
      :img="item.strDrinkThumb"
    ></div>
    <carousel :itemsToShow="3" :wrapAround="true">
      <slide v-for="slide in data" :key="slide" class="img_slide">
        <img :src="slide.strDrinkThumb" alt="image" class="image" />
        <div class="content_slide">
          <p>{{ slide.strDrink }}</p>
        </div>
      </slide>
      <template #addons>
        <navigation />
      </template>
    </carousel>
  </div>
</template>

<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { Carousel, Slide, Navigation } from "vue3-carousel";

import "vue3-carousel/dist/carousel.css";

import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "Slider",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.Drinks();
  },
  methods: {
    async Drinks() {
      const res = await apiService.getOrdinaryDrinks();
      const cocktails = await res.json();
      this.data = cocktails.drinks.slice(0, 10);
    },
  },
};
</script>
<style scoped>
.slider {
  margin: 30px auto;
}
h2 {
  color: rgba(0, 0, 0, 0.8);
  margin: 10px 5px 10px 15px;
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 1px 2px 3px white;
}
.carousel {
  margin: 20px auto;
  width: 90%;
  background-color: rgba(151, 23, 23, 0.4);
}
.image {
  width: 350px;
  height: 350px;
  margin: 2%;
  box-shadow: 2px 1px 5px 1px grey;
}
.img_slide {
  position: relative;
}
.img_slide:hover .image {
  opacity: 0.3;
}
.img_slide:hover .content_slide {
  opacity: 1;
}
.content_slide {
  width: 50%;
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.content_slide p {
  color: black;
  font-size: 25px;
  font-weight: 500;
  padding: 5px 5px;
}
.carousel__prev,
.carousel__next {
  background-color: hsl(0deg 74% 34% / 71%);
}
@media screen and (max-width: 450px) {
  .slider {
    display: none;
  }
}
</style>
