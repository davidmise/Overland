<template>
    <section class="bg-dark p-0" style="width:100%; height:fit-content">
        <div class="container py-5">
            <div class="row text-center text-white">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-4"> OUR SERVICES </h1>
                </div>
            </div>
        </div><!-- End -->
        <VerticalTimelne></VerticalTimelne>

    </section>
    
</template>

<script>
import VerticalTimelne from '../components/Services_VerticalTimeline.vue'
export default {
    data() {
        return {      
        }
    },
    components:{
        VerticalTimelne
    }
}
</script>