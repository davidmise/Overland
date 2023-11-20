<template>
  <section>
    <div>
      <div id="carouselExampleControls" class="carousel slide rounded-5 shadow-lg" data-bs-ride="carousel">
        <div class="carousel-inner rounded-5" >
          <div v-for="(image, index) in images" :key="index" :class="['carousel-item slide rounded-5 opacity-75', index === 0 ? 'active' : '']">
            <img :src="image" class="d-block w-100" alt="Slide"  />
            <div class="centered fw-bold display-1 text-white "> 
              <span> ABOUT US </span> 
           </div>
          </div>
        </div>
      </div>
    </div>
  
  <TimeLine></TimeLine>
  <RoundedCards></RoundedCards>
  <HorizontalTimeline></HorizontalTimeline>
  </section>

</template>
<script>
import bridge from '../assets/images/gallery_page/2.jpeg';
import TimeLine from '../components/About_us_TimeLine.vue'
import RoundedCards from '../components/About_us_RoundedCards.vue';
import HorizontalTimeline from '../components/About_us_Horizontal_Timeline.vue';
export default {
  data() {
    return {
      images: [bridge]
    }
  },
  components:{
    TimeLine,
    RoundedCards,
    HorizontalTimeline
  }
}
</script>