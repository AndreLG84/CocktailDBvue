<template>
  <div class="Page2">
    <li class="Cocktails-Drinks">
      <router-link :to="{ name: 'Details', params: { id: id } }">
        <img :src="img" class="image" />
        <div class="middle-name">
          <p>{{ name }}</p>
        </div>
      </router-link>
    </li>
  </div>
</template>

<script>
export default {
  name: "AllDrinks",
  props: ["name", "id", "img"],
};
</script>

<style scoped>
.image {
  width: 200px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 1px 2px 2px 2px gray;
}
.Cocktails-Drinks {
  list-style-type: none;
  position: relative;
}
.middle-name {
  position: absolute;
  width: 100%;
  height: 20%;
  top: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(255, 255, 255, 0.5);
}
.middle-name > p {
  text-align: center;
  font-size: 1rem;
  color: black;
  font-weight: 500;
}
</style>
