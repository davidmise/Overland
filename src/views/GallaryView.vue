<template>
    <section>

        <div class="container py-5">
            <div class="row text-center text-white">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-4"> GALLARY </h1>
                </div>
            </div>
        </div><!-- End -->

        <ImageSlideshow></ImageSlideshow>

    </section>
    
</template>

<script>
import ImageSlideshow from "../components/Gallary_Slideshow.vue";
export default{
    data() {
    return {  
    }
},

components:{
        ImageSlideshow
    }
}

</script>