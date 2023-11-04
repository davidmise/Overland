<template>
  <section>
    <div class="container py-5">
      <div class="row text-center text-white">
          <div class="col-lg-8 mx-auto">
              <h1 class="display-4"> ABOUT US</h1>
          </div>
      </div>
  </div><!-- End -->
  <TimeLine></TimeLine>
  <RoundedCards></RoundedCards>
  </section>

</template>
<script>
import TimeLine from '../components/About_us_TimeLine.vue'
import RoundedCards from '../components/About_us_RoundedCards.vue';
export default {
  data() {
    return {
      
    }
  },
  components:{
    TimeLine,
    RoundedCards
  }
}
</script>