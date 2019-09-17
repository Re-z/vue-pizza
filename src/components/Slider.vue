<template>
    <div class="container-fluid p-3">
        <h1 class="text-center">Taste our pizza</h1>
        <div class="container slider">
            <hooper :infiniteScroll="true" :autoPlay="true" :playSpeed="3000" :transition="1000">

                <slide v-for="(pizza,index) in pizzas" :key="index">
                    <div class="d-flex justify-content-center alig-items-center slider-item">
                        <img :src="pizza" alt="">
                    </div>
                </slide>
               
            </hooper>
        </div>
    </div>
    
</template>
<script>
  import { Hooper, Slide } from 'hooper';
  import 'hooper/dist/hooper.css';

  export default {
    data: function() {
        return {
            pizzas: []

        }
    },
    components: {
      Hooper,
      Slide
    },
    created() {
        let pizzas = require('../assets/pizza.json');
        //test
        this.pizzas = pizzas.map(el => {
            return el.img
        })
    }
  }
</script>
<style lang="sass">
    .slider
        min-height: 500px
    .hooper-list
        min-height: 500px
    .hooper-slide
        display: flex
        align-items: center
        justify-content: center

</style>