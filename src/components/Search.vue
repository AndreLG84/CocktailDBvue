<template>
  <div class="SearchInput">
    <h2>Recherchez votre cocktail</h2>
    <p>Entrez la premiere lettre</p>
    <input v-model="search" type="text" placeholder="Search..." class="text" @input="search = $event.target.value" />
    <div class="SearchResult">
      <div class="result" v-for="item in result" :key="item.idDrink">
        <div class="item">
          <img :src="item.strDrinkThumb" class="image">
          <div class="middle">
            <h4>{{ item.strDrink }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ApiService from '@/service/apiServices.js'

const apiService = new ApiService()

export default {
  name: 'Search',
  components: {
  },
  data () {
    return {
      result: null,
      search: ''
    }
  },
  update () {
    this.searchDrinks(this.search)
  },
  watch: {
    search () {
      this.searchDrinks(this.search)
    }
  },
  methods: {
    async searchDrinks (search) {
      const res = await apiService.getSearchCocktail(search)
      const drinks = await res.json()
      this.result = drinks.drinks
    }
  }
}
</script>

<style scoped>
.SearchInput {
  text-align: center;
}
.SearchResult {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
}
.text {
  width: 60%;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 20px;
}
.image {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px gray;
}
.item {
  position: relative;
  margin: 10px 10px;
}
.middle {
  position: absolute;
  width: 100%;
  height: 20%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.5);
}
h2 {
  color:rgba(0, 0, 0, 0.8);
  margin: 10px 5px;
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 1px 2px 3px white;
}
h4 {
  text-align: center;
  font-size: 16px;
  color: black;
  font-weight: 500;
}
</style>