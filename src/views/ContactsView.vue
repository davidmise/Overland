<template>
    <Section>
        <div id="carouselExampleControls" class="carousel slide rounded-5 shadow-lg" data-bs-ride="carousel">
            <div class="carousel-inner opacity-75 slide rounded-5">
                <div v-for="(image, index) in images" :key="index" :class="['carousel-item', index === 0 ? 'active' : '']">
                    <img :src="image" class="d-block w-100" alt="Slide"  />
                </div>
            </div>
        </div>
        <div class="container py-5">
            <div class="row text-center text-white">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-4"> CONTACTS </h1>
                </div>
            </div>
        </div><!-- End -->

        <ContactUs></ContactUs>
        <cards></cards>
    </Section>
    
</template>

<script>
import cards from '../components/Contact_us_Cards.vue'
import ContactUs from '../components/Contact_us_slide.vue'
import bridge from '../assets/images/gallery_page/6.jpeg'

export default{
    data() {
        return {
            images: [bridge]
        }
    },

    components:{
        ContactUs,
        cards
    }
}

</script>