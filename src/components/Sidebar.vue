<template>
    <div class="sidebar">
        <div class="overlay" @click.stop="$emit('hideSidebar')"></div>

        <div class="sidebar__box">
            <div class="container pt-3">
                <h2 class="text-center">Menu</h2>
                <ul class="sidebar__nav list-group">
                    <li
                        v-for="(menuItem, index) in menu"
                        class="sidebar__nav-item mb-1" :key="index">
                        <a class="list-group-item sidebar__nav-link" href="#">{{ menuItem }}</a>
                     </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menu: ['Pizza', 'Burgers', 'Satat', 'Drinks', 'Delivery', 'Contacts']
        }
    }
    
}
</script>

<style lang="sass">
    .overlay
        position: fixed
        left: 0
        top: 0
        bottom: 0
        right: 0
        background: rgba(0,0,0,.5)
        width: 100%
        height: 100vh
    .sidebar
        &__box
            width: 30%
            min-width: 300px
            position: fixed
            right: 0
            top: 0
            height: 100vh
            background: white
        &__nav
            list-style: none
        &__nav-link
            color: #ED1B2F
            &:hover
                color: #ED1B2F

        
</style>