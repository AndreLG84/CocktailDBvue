import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import IngredientView from "../views/IngredientView.vue";
import AllDrinksView from "../views/AllDrinksView.vue";
import InfosCocktailView from "../views/InfosCocktailView.vue";
import Users from "../components/Users.vue";
import Sidebar from "../components/Sidebar.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/Ingredients",
    name: "Ingredients",
    component: IngredientView,
  },
  {
    path: "/CocktailsAndDrinks",
    name: "CocktailsAndDrinks",
    component: AllDrinksView,
  },
  {
    path: "/Details/:id",
    name: "Details",
    component: InfosCocktailView,
  },
  {
    path: "/Users",
    name: "Users",
    component: Users,
  },
  {
    path: "/CocktailsAndDrinks",
    name: "CocktailsAndDrinks",
    component: Sidebar,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
