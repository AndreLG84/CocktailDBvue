<template>
  <div class="thumbhome">
    <router-link :to ="{name: 'Details', params: {id:id}}">
      <img :src="img" alt="image" class="image"/>
      <div class="middle">
        <h3>{{ name }}</h3>
      </div>
    </router-link>
  </div>
</template>

<script>
import ApiService from "@/service/apiServices.js";

const apiService = new ApiService();
export default {
  name: "ThumbHome",
  props: ['name', 'id', 'img']
};
</script>

<style scoped>
.thumbhome {
  position: relative;
}
.image {
  width: 250px;
  height: 250px;
  margin: 5px 0;
  border-radius: 5px;
  box-shadow: 1px 2px 5px 1px gray;
}
.middle {
  width: 100%;
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.thumbhome:hover .image {
  opacity: 0.3;
}
.thumbhome:hover .middle {
  opacity: 1;
}
h3 {
  background-color: rgb(2,0,26,0.7);
  color: white;
  font-size: 15px;
  padding: 5px 5px;
  font-weight: 500;
}
@media screen and (max-width: 530px) {
  .image {
    width: 200px;
    height: 200px;
  }
}
</style>