<template>
    <div class="container-fluid  bg-secondary p-5">
        <div class="container slider">
            <hooper :infiniteScroll="true">

                <slide v-for="(pizza,index) in pizzas" :key="index">
                    <div class="d-flex justify-content-center alig-items-center slider-item">
                        <img :src="pizza" alt="">
                        <p>{{index}}</p>
                        <p>{{pizza}}</p>
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
            pizzas: ['../assets/img/pizza/1.jpg','../assets/img/pizza/2.jpg']

        }
    },
    components: {
      Hooper,
      Slide
    },
    // created() {
    //     let pizzas = require('../assets/pizza.json');
    //     //test
    //     this.pizzas = pizzas.map(el => {
    //         return el.img
    //     })
    //     console.log(this.pizzas);
    // }
  }
</script>
<style lang="sass">
    .slider
        min-height: 600px
    .hooper-list
        min-height: 600px
    .hooper-slide
        display: flex
        align-items: center
        justify-content: center

</style>