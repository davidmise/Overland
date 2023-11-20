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
                    <div class=" h-100 rounded-5 shadow py-5 px-4">
                    <img src="../assets/images/icons/clear&forward1.png" 
                         alt="" width="200" class="img-fluid rounded-circle mb-3">
                         <h5 class="mb-0" style="color: rgb(32, 32, 98);">CLEARING AND FORWARDING</h5>
                         
                         <div class="card-body pt-2 fs-5" style="color:aliceblue; font-size:large; ">
                             <p> We guarantee timely deliver of sea cargo by offering suitable vessels. ensuring efficient 
                         handling from the origin country to the destination</p>
                        </div>
                    </div>
                </div><!-- End -->
          
                <!-- CARGO TRACKING item -->
                <div class="col-xl-4 col-sm-6 mb-5">
                    <div class=" h-100 rounded-5 shadow py-5 px-4">
                     
                          <img src="../assets/images/icons/cargotrack2.png" 
                          alt="" width="200"  class="img-fluid rounded-circle mb-3 ">
                          <h5 class="mb-0 pt-1" style="color: rgb(32, 32, 98)">CARGO TRACKING</h5>
                          
                          <div class="card-body pt-2 fs-5" style="color:aliceblue">
                             <p>We've developed a user-friendly and robust 
                              shipment management interface that empowers our customers to track 
                              their cargo's journey from the point of loading to its final destination</p> 
                          </div>
                    </div>
                </div><!-- End -->
          
                <!-- ROAD FREIGHT item -->
                <div class="col-xl-4 col-sm-6 mb-5">
                    <div class=" h-100 rounded-5 shadow py-5 px-4">
                      <img src="../assets/images/icons/truckicon.png" 
                      alt="" width="200"  height="200"  class=" img-fluid rounded-circle ">
                        <h5 class="mb-0 pt-3" style="color:rgb(32, 32, 98)">ROAD FREIGHT</h5>
                        <div class="card-body pt-2 fs-5" style="color:aliceblue">
                          <p>  We offer comprehensive door-to-door ground freight services for both 
                               domestic and international shipments, catering to both full truck load
                               and less than a truck load full truck load and less than a truck load
                               requirements
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
  
          <div class="container bg-black rounded-5">
              <div class="row text-center text-white ">
                  <div class="col-xl-6 col-sm-4 mb-5 bg-red">
                      <div class="" style="margin-top:50%">
                          <div class=" text-center">
                            <h3 style="opacity:0.9">
                                We are dedicated to providing added value to our 
                                customers by using cutting-edge technology into our work.
                                That is why the goal for continuous improvement is the 
                                engine behind our transportation company.
                            </h3>
                          </div>
                      </div>
                  </div><!-- End -->
  
               

                  <div class="col-xl-6 col-sm-4 mb-5 pt-0" >
                    <h4> map goes here</h4>
                   <video src="../assets/videos/map0.mp4" class="opacity-75" autoplay style="background:transparent; height: 100vh;"></video>
                     
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