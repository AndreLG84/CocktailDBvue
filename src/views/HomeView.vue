<template>
  <div class="home">
    <p>
      EasyCocktails.com<br/> vous accompagne pour réussir tout vos cocktails,impressionnez vos amis avec nos recettes inratables<br/>Partagez
      vos recettes, vos idées et vos photos!
    </p>
  </div>
  <div class="slice1">
    <h2>Partagez vos plus belles photos&nbsp;<i class='bx bxs-camera'></i></h2>
    <ThumbHome v-for="item in data1" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :img="item.strDrinkThumb"></ThumbHome>
  </div>
  <RandomCocktails v-for="item in dataR" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :img="item.strDrinkThumb" :MeasureA="item.strMeasure1" :MeasureB="item.strMeasure2" :MeasureC="item.strMeasure3" :IngredientA="item.strIngredient1" :IngredientB="item.strIngredient2" :IngredientC="item.strIngredient3" />
  <Slider></Slider>
</template>

<script>
// @ is an alias to /src
import RandomCocktails from "@/components/RandomCocktails.vue";
import ThumbHome from "@/components/ThumbHome.vue";
import Slider from "@/components/Slider.vue";
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "HomeView",
  components: {
    RandomCocktails,
    ThumbHome,
    Slider,
  },
  data() {
    return {
      dataR: null,
      data1: null,
    }
  },
  mounted() {
    this.Cocktails (),
    this.Drinks ()
  },
  methods: {
    async Cocktails () {
      const res = await apiService.getRandomCocktails()
      const cocktails = await res.json()
      this.dataR = cocktails.drinks
      console.log(cocktails.drinks)
    },
    async Drinks () {
      const res = await apiService.getCocktails()
      const drinks = await res.json()
      this.data1 = drinks.drinks.slice(0, 9)
    }
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
  background-image:url('C:\Users\Stagiaire\Bureau\easycocktails\src\assets\background.png');
  background-size: 100%;
  background-repeat: no-repeat;
}
p {
  text-align: center;
  margin: 0 auto;
  color: white;
  font-size: 1.3rem;
  padding: 5px;
}
.slice1 {
  padding: 10px 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
}
h2 {
  color:rgba(0, 0, 0, 0.8);
  margin: 10px 5px;
  font-size: 1.8rem;
  font-weight: 500;
  text-shadow: 1px 2px 3px white;
  display: inline-flex;
  align-items: center;
}
</style>
