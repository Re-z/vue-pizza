<template>
    <div class="wrap">
      <app-header @showSidebar="showSidebar"></app-header>
      <app-slider></app-slider>
      <app-menu></app-menu>

      <transition name="fade">
        <app-sidebar v-if="sidebarIsVisible"  @hideSidebar="hideSidebar"></app-sidebar>
      </transition>

    </div>
</template>



<script>
require ('@/assets/bootstrap.min.css');
export default {
  data() {
    return {
      sidebarIsVisible: false
    }
  },
  methods: {
    showSidebar() {
      this.sidebarIsVisible = true
    },
    hideSidebar() {
      this.sidebarIsVisible = false
    }
  },
}
</script>



<style lang="sass">
@keyframes fading
  from
    opacity: 0
  to
    opacity: 1


.fade-enter-active 
  animation: fading 1s

.fade-leave-active
  animation: fading 1s reverse

</style>