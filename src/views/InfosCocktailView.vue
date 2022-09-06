<template>
<h2>Réalisez votre cocktail</h2>
<div class="details">
  <div class="CocktailTitle">
    <h3>{{ data.strDrink }}</h3>
    <p>({{ data.strAlcoholic }})</p>
  </div>
  <div class="infos">
    <img :src="data.strDrinkThumb" class="image" />
      <div class="ingredients">
        <div class="list_ingredient">
          <h4>Categories</h4>
          <p>{{ data.strCategory }}</p>
          <h4>Ingrédients</h4>
          <p>{{ data.strMeasure1 }}{{ data.strIngredient1 }}</p>
          <p>{{ data.strMeasure2 }}{{ data.strIngredient2 }}</p>
          <p>{{ data.strMeasure3 }}{{ data.strIngredient3 }}</p>
          <p>{{ data.strMeasure4 }}{{ data.strIngredient4 }}</p>
          <p>{{ data.strMeasure5 }}{{ data.strIngredient5 }}</p>
        </div>
        <h4>Instruction</h4>
        <p>{{ data.strInstructions }}</p>
        <button><router-link to="/">Retour</router-link></button>
      </div>
  </div>
</div>
</template>

<script>
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "InfosCocktailView",
  components: {
  },
  data () {
    return {
      data: null,
      id: this.$route.params.id
    };
  },
  created () {
    this.Drinks(this.id)
  },
  methods: {
    async Drinks (id) {
      const res = await apiService.getInfos(id)
      const infos = await res.json()
      this.data = infos.drinks[0]
      console.log(infos.drinks)
    }
  }
};
</script>

<style scoped>
.details {
  width: 70%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  margin: 10px auto;
  border-radius: 5px;
  padding: 1% 2%;
}
button a {
  text-decoration: none;
  line-height: 25px;
}
.CocktailTitle {
  display: inline-flex;
  align-items: center;
}
.infos {
  width: 70%;
  height: 500px;
  padding: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  background: rgb(211,227,226);
  background: linear-gradient(27deg, rgba(211,227,226,1) 0%, rgba(225,199,165,1) 50%, rgba(211,227,226,1) 100%);
  width: 95%;
  border-radius: 5px;
  box-shadow: 1px 2px 1px 1px gray;
}
.image {
  width: 40%;
  height: 95%;
}
.ingredients {
  width: 60%;
  height: 95%;
  background-color:rgba(255, 255, 255, 0.7);
  text-align: center;
}
h2 {
  color: rgba(0,0,0,0.8);
  text-shadow: 1px 2px 2px white;
  font-size: 2.5rem;
  font-weight:500;
  margin: 10px 20px;
}
h3 {
  margin: 10px auto;
  text-align: center;
  display: block;
  font-weight: 500;
  font-size: 2.2rem;
  color: rgba(151, 23, 23, 0.71);
  text-shadow: 2px 2px 1px 3px white;
}
h4 {
  margin: 5px 0;
  color: rgba(151, 23, 23, 0.71);
  line-height: 35px;
  font-size: 1.5rem;
  font-weight: 600;
}
p {
  margin: 5px;
}
.commentaires > .comments {
  margin: 10px auto;
  width: 50%;
  height: 50px;
}
@media screen and (max-width: 1100px) { 
  .infos {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>