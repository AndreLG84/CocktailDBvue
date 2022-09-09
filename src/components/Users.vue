<template>
  <form class="rate" @submit.prevent="Ratecocktail">
    <h2>Laisser une note:</h2>
    <label for="one">1</label>
    <input type="radio" id="one" value="1" v-model="rating.rate" />
    <br />
    <label for="two">2</label>
    <input type="radio" id="two" value="2" v-model="rating.rate" />
    <br />
    <label for="tree">3</label>
    <input type="radio" id="tree" value="3" v-model="rating.rate" />
    <br />
    <label for="four">4</label>
    <input type="radio" id="four" value="4" v-model="rating.rate" />
    <br />
    <label for="five">5</label>
    <input type="radio" id="five" value="5" v-model="rating.rate" />
    <br />
    <button type="submit" ></button>
  </form>
  
</template>

<script>
import Axios from "axios";
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();

export default {
  name: "Users",
  data() {
    return {
      data: null,
      // dataUser: ['first_name','last_name','email'],
      rating: { 
        idDrink: this.$route.params.id,
        rate: null,
      },
    };
  },
  mounted () {
    this.Ratecocktail(this.id);
  },
  methods: {
    // async createUser () {
    //     const res = await apiService.getAddtoMongo()
    //     const data = await res.json()
    //     const dataUser = async object => {
    //         const collection = db.collection('rating')
    //         const User = await collection.insertOne(object)
    //         return dataUser.res
    //     }
    // const newUser = {
    //     first_name: "",
    //     last_name: "",
    //     email: "",
    // }
    // const insertUser = await createUser(newUser)
    // console.log(newUser)
    async Ratecocktail(id) {
      const urlcreate = "http://localhost:4000/api/insert";
      const res = await Axios.post(urlcreate, this.rating);
      console.log(res);
    },
  },
};
</script>

<style scoped>
h2 {
  font-size: 1.4rem;
  margin: 0 1%;
}
.rate {
  display: flex;
  justify-content: center;
  align-items: center;
}
.well {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
button {
  margin: 1%;
  background-color: #971717;
  border: 1px solid white;
}
</style>
