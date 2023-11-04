<template>
  <div>
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div v-for="(image, index) in images" :key="index" :class="['carousel-item', index === 0 ? 'active' : '']">
          <img :src="image" class="d-block w-100" alt="Slide" />
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<script>
import bridge from '../assets/images/carousal/bridge.jpg';
import lorries from '../assets/images/carousal/lorries.jpg';
import lorry from '../assets/images/carousal/lorry.jpg';
export default {
  data() {
    return {
      images: [ bridge,lorries,lorry]
    };
  },
};
</script>

<style>
/* Add custom styles here if necessary */
</style>
