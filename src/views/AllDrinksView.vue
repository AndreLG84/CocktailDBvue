<template>
  <Categories></Categories>
  <Search></Search>
  <div class="Page2">
    <h2>Les cocktails</h2>
    <AllDrinks v-for="item in data" :key="item.idDrink" :id="item.idDrink" :name="item.strDrink" :img="item.strDrinkThumb" />
  </div>
</template>

<script>
import Categories from "@/components/Categories.vue";
import AllDrinks from "@/components/AllDrinks.vue";
import Search from "@/components/Search.vue";
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "AllDrinksView",
  components: {
    Search,
    AllDrinks,
    Categories,
  },
  data () {
    return {
      data: null,
    }
  },
  mounted() {
    this.Drinks ()
  },
  methods: {
    async Drinks () {
      const res = await apiService.getCocktails()
      const drinks = await res.json()
      this.data = drinks.drinks.slice(0, 15)
      console.log(drinks.drinks)
    }
  }
};
</script>

<style scoped>
.Page2 {
  flex-wrap: wrap;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 1% 1%;
}
h2 {
  color:rgba(0, 0, 0, 0.8);
  margin: 10px 5px;
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 1px 2px 2px white;
}
</style>