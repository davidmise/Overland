<template>
  <section>
    <div>
      <div id="carouselExampleControls" class="carousel slide rounded-5 shadow-lg" data-bs-ride="carousel">
        <div class="carousel-inner rounded-5" style="border: 1px solid rgb(32,32,98);">
          <div v-for="(image, index) in images" :key="index" :class="['carousel-item', index === 0 ? 'active' : '']">
            <img :src="image" class="d-block w-100" alt="Slide"  />
          </div>
        </div>
      </div>
    </div>
    <div class="container py-5">
      <div class="row text-center text-white">
          <div class="col-lg-8 mx-auto">
              <h1 class="display-4"> ABOUT US</h1>
          </div>
      </div>
  </div><!-- End -->
  <TimeLine></TimeLine>
  <RoundedCards></RoundedCards>
  <HorizontalTimeline></HorizontalTimeline>
  </section>

</template>
<script>
import bridge from '../assets/images/carousal/about_slide.png';
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