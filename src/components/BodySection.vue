<template>
    <section class="sectionB">
      <div class="container">
        <div class=" pt-5 text-center">
          <p class="card-title text-center text-white display-4" >WHO WE ARE </p>
          <!-- <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6> -->
          <h3 style="opacity:0.9" class="pt-4">E Awadh & Co Ltd offers transportation services of containers
            dr cargo and tuel, clearing and torwarding can be done by the sister company overland Carriers thus makes
            E. Awadh & Co. Ltd the companv of choice for one stop service
            LATRA TAT®A
          </h3>
          <!-- <a href="#" class="card-link">Card link</a>
          <a href="#" class="card-link">Another link</a> -->
        </div>
      </div>
      <OurServices></OurServices>
    
  

    </section>
</template>
<style>
.card{
  max-width: 100;
}




</style>

<script>
  import OurServices from './OurServices.vue';

  export default{
    data() {
    },
    component: {
        OurServices,
      
    },
    components: { OurServices }
}
</script>