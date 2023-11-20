<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" :class="['carousel-item cont opacity-75 slide', index === 0 ? 'active' : '']">
          <img :src="image" class="  img d-block w-100" alt="Slide" />
          <div class="centered fw-bold display-4">
             <span>  WE SOLVE YOUR </span> <br> 
             <span> TRANSPORTATION </span> <br> 
             <span> CHALLANGES </span>  
          </div>
        </div>
      </div>
      <button class="carousel-control-prev carousel-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next carousel-dark" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import bridge from '../assets/images/carousal/carusal0.jpeg';
import lorries from '../assets/images/carousal/carusal1.jpeg';
import lorry from '../assets/images/carousal/carusal2.jpeg';
export default {
  data() {
    return {
      images: [ bridge,lorries,lorry ]
    };
  },
};
</script>

<style>
/* Add custom styles here if necessary */
</style>
