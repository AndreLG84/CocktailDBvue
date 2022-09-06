<template>
  <div class="PageIngredients">
    <h2>Tout les ingrédients</h2>
    <Ingredients></Ingredients>
  </div>
</template>

<script>
// @ is an alias to /src
import Ingredients from "@/components/Ingredients.vue";
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "IngredientView",
  components: {
    Ingredients,
  },
};
</script>

<style scoped>
.PageIngredients {
  padding: 20px;
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