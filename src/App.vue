<template>
  <nav>
    <img class="logo" alt="/" src="./assets/logoeasycocktails.png" />
    <button class="btn-burger" @click="toggle = !toggle">
      <i class="bx bx-menu"></i>
    </button>
    <div class="menu" v-show="toggle">
      <router-link to="/"
        ><img class="icon" src="./assets/home-icons.png" />Home</router-link
      >
      <router-link to="/CocktailsAndDrinks"
        ><img
          class="icon"
          src="./assets/search-icons.png"
        />Cocktails</router-link
      >
      <router-link to="/Ingredients"
        ><img
          class="icon"
          src="./assets/glasse-icons.png"
        />Ingredients</router-link
      >
    </div>
  </nav>
  <router-view :key="$route.fullPath" />
  <footer>
    <p>“L’abus de l’alcool est dangereux pour la santé”</p>
    <div class="mediasocial">
      <p>
        Suivez nous sur les réseaux <br />
        et partagez vos plus beaux cocktails.
      </p>
      <span><i class="bx bxl-facebook-circle"></i>EasyCocktail</span><br />
      <span><i class="bx bxl-instagram"></i>EasyCocktail</span><br />
      <span><i class="bx bxl-twitter"></i>EasyCocktail</span><br />
      <img alt="logo" src="./assets/logoeasycocktails.png" />
    </div>
    <p>© 2022 EasyCocktail.com</p>
  </footer>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      toggle: true,
    };
  },
};
</script>

<style>
@import URL("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200");

#app {
  font-family: Verdana;
  background: rgb(225, 199, 165);
  background: linear-gradient(
    125deg,
    rgba(123, 197, 193, 1) 0%,
    rgba(225, 199, 165, 1) 50%,
    rgba(123, 197, 193, 1) 100%
  );
}
.btn-burger {
  display: none;
}
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  background: linear-gradient(
    27deg,
    rgba(234, 184, 117, 1) 0%,
    rgba(123, 197, 193, 1) 50%,
    rgba(234, 184, 117, 1) 100%
  );
}
nav .logo {
  width: 140px;
  height: 150px;
}
.menu a {
  padding: 1%;
  font-weight: 500;
  color: rgba(151, 23, 23, 0.7);
  font-size: 1.6rem;
  opacity: 0.9;
  text-decoration: none;
  display: flex;
  align-items: center;
  border-radius: 5px;
  font-family: Verdana;
  text-shadow: 1px 1px 1px gray;
}
.menu {
  width: 800px;
  height: auto;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
.menu a:hover {
  border-radius: 5px;
  color: white;
  text-shadow: 1px 1px 2px red;
}
.icon {
  width: 25px;
  height: 25px;
}
footer {
  margin: 1% 0;
  padding: 1% 0;
  min-height: 300px;
  height: auto;
  background-color: rgba(123, 197, 193, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
}
footer > p {
  font-size: 0.9rem;
  margin: 5px 0;
}
.mediasocial {
  margin: 1% 0;
  display: inline-flex;
  justify-content: space-evenly;
  align-items: center;
}
footer span {
  display: inline-flex;
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
  .menu a {
    font-size: 1.8rem;
  }
}
@media screen and (max-width: 850px) {
  .mediasocial {
    display: flex;
    flex-direction: column;
    height: auto;
  }
}
@media screen and (max-width: 500px) {
  .menu {
    background-color: #ccc;
    visibility: none;
    justify-content: space-evenly;
    flex-direction: column;
  }
  .menu a {
    font-size: 1.5rem;
  }
  .btn-burger {
    margin: 1%;
    display: block;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 5px;
    color: white;
    background-color: rgba(151, 23, 23, 0.6);
    transition: 0.4s;
  }
}
@media screen and (max-width: 500px) {
}
</style>
