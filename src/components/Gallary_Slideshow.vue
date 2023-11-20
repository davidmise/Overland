<template>
    <div>
                
        <div class="container">

          <div class="container mt-6">
            <div class="row text-white">
                <div class="col-lg-8  mt-5 mx-auto">
                    <h3> Images </h3>
                </div>
            </div>
        </div><!-- End --> 
              <div class="items">
                <div class="gallery">
                  <span style="--i:1">
                    <img src="../assets/images/gallery_page/1.jpeg" class="rounded-5"   alt="" />
                  </span>
                  <span style="--i:2">
                    <img src="../assets/images/gallery_page/2.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:3">
                    <img src="../assets/images/gallery_page/3.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:4">
                    <img src="../assets/images/gallery_page/4.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:5">
                    <img src="../assets/images/gallery_page/5.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:6">
                    <img src="../assets/images/gallery_page/6.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:7">
                    <img src="../assets/images/gallery_page/7.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:8">
                    <img src="../assets/images/gallery_page/8.jpeg" class="rounded-5" alt="" />
                  </span>
                </div>
              </div>

              <div class="items">
                <div class="gallery">
                  <span style="--i:1">
                    <img src="../assets/images/gallery_page/11.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:2">
                    <img src="../assets/images/gallery_page/12.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:3">
                    <img src="../assets/images/gallery_page/13.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:4">
                    <img src="../assets/images/gallery_page/14.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:5">
                    <img src="../assets/images/gallery_page/15.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:6">
                    <img src="../assets/images/gallery_page/12.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:7">
                    <img src="../assets/images/gallery_page/11.jpeg" class="rounded-5" alt="" />
                  </span>
                  <span style="--i:8">
                    <img src="../assets/images/gallery_page/15.jpeg" class="rounded-5" alt="" />
                  </span>
                </div>
              </div>

        

        </div>

        <div class="container mt-6">
          <div class="row text-white">
              <div class="col-lg-8  mt-5 mx-auto">
                  <h3> videos </h3>
              </div>
          </div>
      </div><!-- End -->
      
      <div class="container pb-5">
        <div class="row">
          <div class="col-lg-3 col-md-4 mt-4 col-sm-6 card bg-transparent "> <video class="py-2" src="../assets/videos/gallery_page/1.mp4" controls></video> </div>
          <div class="col-lg-3 col-md-4 mt-4 col-sm-6  card bg-transparent "> <video class="py-2" src="../assets/videos/gallery_page/2.mp4" controls></video></div>
          <div class="col-lg-3 col-md-4 mt-4 col-sm-6 card bg-transparent "> <video class="py-2" src="../assets/videos/gallery_page/3.mp4" controls></video></div>
          <div class="col-lg-3 col-md-4  mt-4 col-sm-6 card bg-transparent"> <video class="py-2" src="../assets/videos/gallery_page/4.mp4" controls></video></div>
        </div>
      </div>
</div>
</template> 

<style> 

.close {
    font-size: 1.5rem;
  }
  
  .col-12 img {
    opacity: 0.7;
    cursor: pointer;
    width: 100%;
  }
  
  .col-12 img:hover {
    opacity: 1;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }


</style> 

<script>
export default {
    data() {
        return {
            angle:0
        }
    },

    methods: {
       
    },
}
 
</script>