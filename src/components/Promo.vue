<template>
    <div class="promo">
        <div class="container pt-5 pb-5">
            <div class="row" v-scroll-reveal.reset="{delay: 200}">
                <strong class="promo__title text-center col-md-12 text-uppercase">Hungry?</strong>
            </div>
            <div class="row promo__icons d-flex justify-content-between" v-scroll-reveal.reset="{delay: 300}">
                <img style="max-width: 16%" src="../assets/img/phone-call.svg" alt="">
                <img style="max-width: 10%" src="../assets/img/add.svg" alt="">
                <img style="max-width: 18%" src="../assets/img/delivery-truck.svg" alt="">
                <img style="max-width: 10%" src="../assets/img/equal.svg" alt="">
                <img style="max-width: 18%" src="../assets/img/pizza.svg" alt="">
            </div>
            <div class="row">
                <div class="col-md-12 text-center">
                    <p class="promo__slogan font-weight-bold" v-scroll-reveal.reset="{delay: 400}">Give us a call</p>
                    <p v-scroll-reveal.reset="{delay: 500}">
                        <a href="tel:0998877665" class="promo__number font-weight-bold">0998877665</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass">
    .promo
        background: #ED1B2F
        &__title
            color: white
            font-size: 50px
        &__icons
            img
                display: block
                max-width: 17%
        &__slogan
            color: black
            font-size: 40px
            margin: 20px 0
        &__number
            color: white
            font-size: 30px
                
                
</style>