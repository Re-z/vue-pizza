<template>
    <div class="container pt-5 pb-5 menu">
        <h2 class="text-center">Our menu</h2>
        <div class="row tabs">
            <div class="col-md-3 tabs__item text-center" :class="{'is-active' : tabActive === 'burgers'}" @click="tabActive = 'burgers'">Burgers</div>
            <div class="col-md-3 tabs__item text-center" :class="{'is-active' : tabActive === 'pizza'}"  @click="tabActive = 'pizza'">Pizza</div>
            <div class="col-md-3 tabs__item text-center" :class="{'is-active' : tabActive === 'salat'}" @click="tabActive = 'salat'">Salat</div>
            <div class="col-md-3 tabs__item text-center" :class="{'is-active' : tabActive === 'drinks'}" @click="tabActive = 'drinks'">Drinks</div>
          
        </div>
        <div class="row box">
            <transition name="fade" mode="out-in">
                <div class="col-md-12"  v-if="tabActive === 'pizza'"  key="1">
                    <div class="d-flex justify-content-center flex-wrap row">

                        <div v-for="pizza in pizzas" class="box__item text-center col-md-3 col-sm-6 col-xs-12" :key="pizza.id">
                            <img :src="pizza.img" alt="">
                            <h4><strong>{{pizza.desc}}</strong></h4>
                        </div>

                    </div>
                </div>
                <div class="col-md-12"  v-else-if="tabActive === 'burgers'" key="2">
                    <div class="d-flex justify-content-center flex-wrap box row">

                        <div v-for="burger in burgers" class="box__item text-center col-md-3 col-sm-6 col-xs-12" :key="burger.id">
                            <img :src="burger.img" alt="">
                            <h4><strong>{{burger.desc}}</strong></h4>
                        </div>

                    </div>
                </div>
                <div class="col-md-12"  v-else-if="tabActive === 'salat'"  key="3">
                    <div class="d-flex justify-content-center flex-wrap box row">

                        <div v-for="salat in salats" class="box__item text-center col-md-3 col-sm-6 col-xs-12" :key="salat.id">
                            <img :src="salat.img" alt="">
                            <h4><strong>{{salat.desc}}</strong></h4>
                        </div>

                    </div>
                </div>
                <div class="col-md-12"  v-else-if="tabActive === 'drinks'" key="4">
                    <div class="d-flex justify-content-center flex-wrap box row mt-4">

                        <div v-for="drink in drinks" class="box__item text-center col-md-3 col-sm-6 col-xs-12" :key="drink.id">
                            <img :src="drink.img" alt="">
                            <h4><strong>{{drink.desc}}</strong></h4>
                        </div>
                        
                    </div>
                </div>
            </transition>
            

        </div>
    </div>
</template>

<script>
import getDataFromFirebase from '../scripts/fetch.js';

export default {
    data() {
        return {
            tabActive: 'pizza',
            pizzas: '',
            burgers: '',
            salats: '',
            drinks: '',
        }
    },
    
    created() {
        getDataFromFirebase('https://vue-pizza-108de.firebaseio.com/burgers.json').then(data => {this.burgers = data});
        getDataFromFirebase('https://vue-pizza-108de.firebaseio.com/pizza.json').then(data => {this.pizzas = data});
        getDataFromFirebase('https://vue-pizza-108de.firebaseio.com/salat.json').then(data => {this.salats = data});
        getDataFromFirebase('https://vue-pizza-108de.firebaseio.com/drinks.json').then(data => {this.drinks = data});
    }
}
</script>

<style lang="sass" scoped>
    .tabs
        border: 1px solid #3E3F3A
        &__item
            cursor: pointer
            padding: 5px 0
            border-right: 1px solid #3E3F3A
            &:last-of-type
                border-right: none
            &.is-active
                background: #3E3F3A
                color: white
    .box
        min-height: 250px
        &__item
            img
                display: block
                width: 100%
                min-height: 250px
                
    .fade-enter-active, .fade-leave-active
        transition: all 1s
    .fade-enter, .fade-leave-to
        opacity: 0
        transform: translateX(-40px)

    
</style>