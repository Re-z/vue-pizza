<template>
  <div class="container-fluid bg-primary">
    <div class="container">
      <header class="row bg-primary d-flex align-items-center p-2">
        <div class="col-md-6 col-sm-12">
          <img src="../assets/img/logo.png" class="logo" alt="Jacks Pizza">
        </div>
        <div class="col-md-6 col-sm-12 text-right">
          <button @click="$emit('showSidebar')" class="btn btn-success">Test Btn</button>
        </div>
      </header>
    </div>
    
  </div>

</template>



<script>
export default {
  data() {

  },
  
}
</script>
<style lang="sass" scoped>
  .logo
    display: block
    width: 150px

</style>