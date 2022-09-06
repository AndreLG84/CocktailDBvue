export default class ApiService {
  getRandomCocktails() {
    return fetch(`https://www.thecocktaildb.com/api/json/v2/9973533/random.php`)
  }

  getCocktails() {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`)
  }

  getOrdinaryDrinks() {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink`)
  }

  getListIngredients() {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list`)
  }

  getInfos(id) {
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  }

  getSearchCocktail(search) {
    return fetch (`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${search}`)
  }

  getCategories() {
    return fetch (`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
  }
}