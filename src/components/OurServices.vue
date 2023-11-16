<template>
    <div>
         <!-- For demo purpose -->
         <div class="container py-5">
            <div class="row text-center text-white">
                <div class="col-lg-8 mx-auto">
                    <h1 class="display-4">OUR SERVICES</h1>
                   
                </div>
            </div>
          </div><!-- End -->
          
          
          <div class="container">
            <div class="row text-center">
          
                <!-- CLEARING AND FORWARDING item -->
                <div class="col-xl-4 col-sm-6 mb-5">
                    <div class=" h-100 rounded shadow py-5 px-4">
                    <img src="../assets/images/icons/clear&forward1.png" 
                         alt="" width="200" class="img-fluid rounded-circle mb-3">
                         <h5 class="mb-0" style="color: rgb(32, 32, 98);">CLEARING AND FORWARDING</h5>
                         
                         <div class="card-body pt-2 fs-5" style="color:aliceblue; font-size:large; ">
                             <p> We quarantee timel deliver o sea cargo bv oftering suitable vessels. ensuring etticient 
                         handling from the origin countrv to the destination</p> </div>
                    </div>
                </div><!-- End -->
          
                <!-- CARGO TRACKING item -->
                <div class="col-xl-4 col-sm-6 mb-5">
                    <div class=" h-100 rounded shadow py-5 px-4">
                     
                          <img src="../assets/images/icons/cargotrack2.png" 
                          alt="" width="200"  class="img-fluid rounded-circle mb-3 ">
                          <h5 class="mb-0 pt-1" style="color: rgb(32, 32, 98)">CARGO TRACKING</h5>
                          
                          <div class="card-body pt-2 fs-5" style="color:aliceblue">
                             <p>ve've developea a user-triendly ana robust 
                              shipment management intertace that empowers our customers to track 
                              their cargo's journev from the point of loading to its final destination</p> 
                          </div>
                    </div>
                </div><!-- End -->
          
                <!-- ROAD FREIGHT item -->
                <div class="col-xl-4 col-sm-6 mb-5">
                    <div class=" h-100 rounded shadow py-5 px-4">
                      <img src="../assets/images/icons/roadfreight3.png" 
                      alt="" width="200"  height="200"  class=" img-fluid rounded-circle ">
                        <h5 class="mb-0 pt-3" style="color:rgb(32, 32, 98)">ROAD FREIGHT</h5>
                        <div class="card-body pt-2 fs-5" style="color:aliceblue">
                          <p>  We offer comprenensive door-to-door ground freight services for both 
                               domestic and international shipments, catering to both full truck load
                               and less than a truck load full truck load and less than a truck load
                               recuirements
                          </p>
                        </div>
                    </div>
                </div><!-- End -->
            </div>
          </div>
  
          <div class="container py-5">
              <div class="row text-center text-white">
                  <div class="col-lg-8 mx-auto">
                      <h1 class="display-4"> WHY CHOOSE US?</h1>
                  </div>
              </div>
          </div><!-- End -->
  
          <div class="container">
              <div class="row text-center">
                  <div class="col-xl-6 col-sm-4 mb-5 bg-red">
                      <div class="">
                          <div class=" text-center">
                          <h3 style="opacity:0.9">  we are dedicated to providing added value to our 
                              customers by using cutting-edge technology into our work.
                              That is why the goal for continuous improvement is the 
                              engine genie ourtransoortation coman.
                          </h3>
                          </div>
                      </div>
                  </div><!-- End -->
  
                  <div class="col-xl-2 col-sm-4 mb-5 "></div>
                  
  
                  <div class="col-xl-4 col-sm-4 mb-5 pt-0 ">
    
                      <video width="360" height="280" controls>
                          <source :src="main.bgVideo" type="video/mp4">
                      </video>
                  </div>
              </div><!-- End -->
          </div>
    </div>

</template>

<script>
import video from "../assets/videos/mm.mp4"
export default {
    data(){
        return {
            main: {
                bgVideo: video,
                video: video,
            }
        }
    },
    // methods: {
    //     supportType(e,vidType,codType) { 
    //         let vid = document.createElement('video');
    //         isSupp = vid.canPlayType(vidType+';codecs="'+codType+'"');
    //         if (isSupp == "") {
    //             isSupp = "No";
    //         }
    //         e.target.parentNode.innerHTML = "Answer: " + isSupp;
    //     } 
    // },
}
</script>

<style>

body {
    background: #e8cbc0;
    background: -webkit-linear-gradient(to right, #e8cbc0, #636fa4);
    background: linear-gradient(to right, #e8cbc0, #636fa4);
    min-height: 100vh;
  }
  
  .social-link {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
  }
  
  .social-link:hover, .social-link:focus {
    background: #ddd;
    text-decoration: none;
    color: #555;
  }</style>