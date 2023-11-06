<template>
  <div>
    <Slideshow></Slideshow>
    <BodySection></BodySection>
  </div>

<!-- <FooterSection></FooterSection> -->
</template>
<script>
import Slideshow from '../components/Slide_show.vue';
import BodySection from '../components/BodySection.vue';
// import FooterSection from '../components/footerSection.vue'
export default {
  data() {
    return {
      
    }
  },

  components:{
    Slideshow,
    BodySection,
    // FooterSection
  }
}
</script>