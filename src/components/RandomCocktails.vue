<template>
  <li class="selection">
    <h2>Notre selection</h2>
    <div class="random">
      <img :src="img" alt="image" class="image"/>
      <div class="content">
        <h3>{{ name }}</h3>
        <p>{{ MeasureA }}&nbsp;{{ IngredientA }}</p>
        <p>{{ MeasureB }}&nbsp;{{ IngredientB }}</p>
        <p>{{ MeasureB }}&nbsp;{{ IngredientC }}</p>
        <router-link :to ="{name: 'Details', params: {id:id}}" class="linkMore">More Infos
        </router-link>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: "RandomCocktails",
  props: ['id', 'name', 'img', 'MeasureA','MeasureB', 'MeasureC', 'IngredientA', 'IngredientB', 'IngredientC'],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selection {
  margin: 30px auto;
  list-style-type: none;
  width: 80%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.image {
  width: 33%;
  height: 95%;
}
.random {
  padding: 1% 1%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85%;
  height: 350px;
  background: rgb(211,227,226);
  background: linear-gradient(27deg, rgba(211,227,226,1) 0%, rgba(225,199,165,1) 50%, rgba(211,227,226,1) 100%);
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px gray;
}
.content {
  width: 60%;
  height: 95%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
}
.instructions {
  margin-top: 5%;
  text-overflow: clip ellipsis;
  overflow: hidden;
  white-space: wrap;
}
h3 {
  font-size: 1.9rem;
  margin: 0 1%;
  font-weight: 500;
  display: block;
  line-height: 30px;
}
h2 {
  color:rgba(0, 0, 0, 0.8);
  margin: 10px 5px;
  font-size: 2rem;
  font-weight: 500;
  text-shadow: 1px 2px 3px white;
}
p {
  font-family: Tahoma, Verdana, sans-serif;
}
a.linkMore {
  display: block;
  padding: 5px 8px;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 25px;
  text-decoration: none;
  color: rgba(151, 23, 23, 0.69);
  border-radius: 3px;
  border: 1px solid rgba(151, 23, 23, 0.8);
  background-color: #D3E3E2;
}
a.linkMore:hover {
  background-color:rgba(151, 23, 23, 0.69);
  color: white;
} 
@media screen and (max-width: 600px) {
  .random {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 5px;
  }
  .random > .image {
    width: 95%;
    height: 45%;
  }
  .content {
    width: 95%;
    padding: 5px;
  }
}
</style>
