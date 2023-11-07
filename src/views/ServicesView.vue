<template>
    <section>
        <div class="container py-5">
            <div class="row text-center text-white">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-4"> SERVICES </h1>
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