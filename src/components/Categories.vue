<template>
  <button @click="toggle = !toggle" class="accordion">Voir les categories&nbsp;<i class='bx bx-expand-alt' ></i></button>
  <div v-show="toggle" class="panel">
    <li class="listCat" v-for="itemC in datalist">
      <p>{{ itemC.strCategory }}</p>
    </li>
  </div>
</template>

<script>
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "Categories",
  data () {
    return {
      datalist: null,
      toggle: false,
    };
  },
  mounted () {
    this.Categories ()
  },
  methods: {
    async Categories () {
      const res = await apiService.getCategories()
      const list = await res.json()
      this.datalist = list.drinks
    }
  }
};
</script>
<style scoped>
.listCat {
  list-style-type: none;
  cursor: pointer;
}
.listCat:hover p {
  background-color:rgba(151, 23, 23, 0.4);
  color: white;
}
p {
  margin: 5px 0;
  padding: 3px 5px;
  border-radius: 5px;
  line-height:30px;
  font-weight: 500;
  color:rgba(151, 23, 23, 0.71);
}
.accordion {
  background-color: rgba(151, 23, 23, 0.4);
  color: white;
  cursor: pointer;
  padding: 10px;
  width: 100%;
  border: none;
  text-align: start;
  outline: none;
  font-size: 1.4rem;
  transition: 0.4s;
  display: inline-flex;
  align-items: center;
}
.accordion:hover {
  background-color: #ccc;
  color: rgba(151, 23, 23, 0.91); 
}
.panel {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  background-color: #ccc;
  overflow: hidden;
}
</style>