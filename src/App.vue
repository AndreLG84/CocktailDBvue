<template>
  <nav>
    <img class="logo" alt="/" src="./assets/logoeasycocktails.png" />
    <div class="menu">
      <router-link to="/"><img class="icon" src="./assets/home-icons.png" />Home</router-link>
      <router-link to="/CocktailsAndDrinks"><img class="icon" src="./assets/search-icons.png" />Cocktails</router-link>
      <router-link to="/Ingredients"><img class="icon" src="./assets/glasse-icons.png" />Ingredients</router-link>
    </div>
  </nav>
  <div class="sidebar">
    <sidebar-menu />
  </div>
  <router-view :key="$route.fullPath" />
  <footer>
    <p>“L’abus de l’alcool est dangereux pour la santé”</p>
    <div class="mediasocial">
      <p>Suivez nous sur les réseaux <br> et partagez vos plus beaux cocktails.</p>
      <span><i class='bx bxl-facebook-circle'></i>EasyCocktail</span><br>
      <span><i class='bx bxl-instagram' ></i>EasyCocktail</span><br>
      <span><i class='bx bxl-twitter' ></i>EasyCocktail</span><br>
      <img alt="logo" src="./assets/logoeasycocktails.png" />
    </div>
    <p>© 2022 EasyCocktail.com</p>
  </footer>
</template>

<script>
import SidebarMenu from "@/components/Sidebar-menu.vue";

export default {
  name: "App",
  components: {
    SidebarMenu,
  },
  methods: {
    search(val) {
    }
  }
}
</script>

<style>
@import URL('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

#app {
  font-family: Verdana;
  background: rgb(225,199,165);
  background: linear-gradient(125deg, rgba(123,197,193,1) 0%, rgba(225,199,165,1) 50%, rgba(123,197,193,1) 100%);
}
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(27deg, rgba(234,184,117,1) 0%, rgba(123,197,193,1) 50%, rgba(234,184,117,1) 100%);
}
nav .logo {
  width: 140px;
  height: 150px;
}
.menu a {
  padding: 1%;
  font-weight: 500;
  color: #2c3e50;
  font-size: 1.4vw;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-family: Verdana;
}
.menu {
  width: 800px;
  height:auto;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
.menu a:hover {
  background-color: rgba(151, 23, 23, 0.6);
  border-radius: 5px;
  color: white;
}
.icon {
  width: 25px;
  height: 25px;
}
footer {
  margin: 1% 0;
  padding-top: 1%;
  min-height: 300px;
  height: auto;
  background-color: rgba(123,197,193,0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
footer p {
  font-size: 0.9rem;
}
.mediasocial {
  margin: 1% 0;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
footer span {
  display:inline-flex;
  align-items: center;
}
.router-link-active {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (max-width: 1020px) {
  nav {
    height: auto;
  }
  .menu {
    margin-bottom: 1%;
  }
}
@media screen and (max-width: 850px) {
  .mediasocial {
    display: flex;
    flex-direction:column;
    height:auto;
  }
}
@media screen and (max-width: 450px) {
  .menu {
    display: none;
  }
}
</style>
