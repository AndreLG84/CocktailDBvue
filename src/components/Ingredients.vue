<template>
  <div class="Ingredients" v-for="item in data">
    <img :src="'https://www.thecocktaildb.com/images/ingredients/' + item.strIngredient1 +'-Medium.png'" class="img" alt="image de l'ingredient">
    <li class="listIngredients">
        <p>{{ item.strIngredient1 }}</p>
    </li>
  </div>
</template>
<script>
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "Ingredients",
  data() {
    return {
      data: null,
    };
  },
  mounted() {
    this.Ingredients()
  },
  methods: {
    async Ingredients () {
      const res = await apiService.getListIngredients()
      const ingredients = await res.json()
      this.data = ingredients.drinks
      console.log(ingredients.drinks)
    }
  }
};
</script>

<style scoped>
.Ingredients {
  width: 200px;
  height: 200px;
  list-style-type: none;
  position: relative;
  margin: 6px;
  background-color: rgba(255, 255, 255, 0.55);
}
.listIngredients {
  position: absolute;
  width: 100%;
  height: 20%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
}
.listIngredients p {
  font-size: 1rem;
  font-weight: 500;
  color: white;
}
.img {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px gray;
}
</style>