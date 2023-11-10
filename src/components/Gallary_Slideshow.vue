<template>
    <div>
        
<!-- A Lightbox is basically a slider (carousel) inside of a modal.

  Todos: fix active class (when you click on a photo, carousel in modal reverts to first slide) 
 *solution: added data-slide-to and data-target to imgs
-->
<div class="container py-1">
    <div class="row text-white">
        <div class="col-lg-8 mx-auto">
            <h3> Images </h3>
        </div>
    </div>
</div><!-- End -->
<div class="container">

    <div class="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox">
      <div class="col-12  col-sm-10 col-md-6 col-lg-6">    
         <img src="../assets/images/carousal/carusal0.jpeg" data-target="#indicators" data-slide-to="0" alt="" /> 
      </div>

      <div class="col-12 col-sm-10 col-md-6 col col-lg-6">
           <img src="../assets/images/carousal/carusal2.jpeg" data-target="#indicators" data-slide-to="1" alt="" />
      </div>
    </div>

    <div class="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox">
        <div class="col-12 col-sm-10 col-md-6 col-lg-3">
            <img src="../assets/images/carousal/carusal0.jpeg" data-target="#indicators" data-slide-to="2"  alt="" />
        </div>

        <div class="col-12  col-sm-10 col-md-6 col-lg-3">
            <img src="../assets/images/carousal/carusal1.jpeg" data-target="#indicators" data-slide-to="3" alt="" />
        </div>

        <div class="col-12 col-sm-10 col-md-6 col-lg-3">
            <img src="../assets/images/carousal/carusal2.jpeg" data-target="#indicators" data-slide-to="3"  alt="" />
        </div>

        <div class="col-12 col-sm-10 col-md-6 col-lg-3">
            <img src="../assets/images/carousal/carusal1.jpeg" data-target="#indicators" data-slide-to="4" alt="" />
        </div> 
    </div>
    
    <!-- Modal -->
    <div class="modal fade" id="lightbox" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
            <button type="button" class="close text-right p-2" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          <div id="indicators" class="carousel slide slide carousel-fade" data-bs-ride="carousel" data-interval="false">
      <ol class="carousel-indicators">
        <li data-target="#indicators" data-slide-to="0" class="active"></li>
        <li data-target="#indicators" data-slide-to="1"></li>
        <li data-target="#indicators" data-slide-to="2"></li>
        <li data-target="#indicators" data-slide-to="3"></li>
        <li data-target="#indicators" data-slide-to="4"></li>
        <li data-target="#indicators" data-slide-to="5"></li>
      </ol>
      <div class="carousel-inner">
        
        <div class="carousel-item active">
          
          <img class="d-block w-100" src="../assets/images/carousal/carusal2.jpeg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/carousal/carusal0.jpeg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/carousal/carusal1.jpeg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/carousal/carusal0.jpeg" alt="Fourth slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/carousal/carusal2.jpeg" alt="Fifth slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/carousal/carusal1.jpeg" alt="Sixth slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#indicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#indicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    
        </div>
      </div>
    </div>
 </div>
        
        <div class="container py-1">
            <div class="row text-white">
                <div class="col-lg-8 mx-auto">
                    <h3> Images </h3>
                </div>
            </div>
        </div><!-- End -->

        <!-- <div id="slider" class="carousel slide carousel-fade" data-bs-ride="carousel">
            <input type="radio" name="slider" id="s1" checked>
                <input type="radio" name="slider" id="s2">
                    <input type="radio" name="slider" id="s3" >
                        <input type="radio" name="slider" id="s4">
                            <input type="radio" name="slider" id="s5">
    
    
            <label for="s1" id="slide1">
                <img src="../assets/images/carousal/carusal1.jpeg" alt="" height="50" width="50">
                
            </label>
        
            <label for="s2" id="slide2">
                <img src="../assets/images/carousal/carusal2.jpeg" alt="" height="50%" width="50%">
                
            </label>
            
            <label for="s3" id="slide3">
                <img src="../assets/images/carousal/carusal2.jpeg" alt="" height="100%" width="100%">
                
            </label>
            
            <label for="s4" id="slide4">
                <img src="../assets/images/carousal/carusal1.jpeg" alt="" height="100%" width="100%">
                
            </label>
            
            <label for="s5" id="slide5">
                <img src="../assets/images/carousal/carusal0.jpeg" alt="" height="100%" width="100%">
                
            </label>

        </div> -->
     
    
        <base href="../assets/images/carousal/bridge.png">
        <div id="carousel" @click="galleryspin('-')">
          <figure id="spinner">
            <img src="../assets/images/carousal/carusal0.jpeg" alt="img1">
            <img src="../assets/images/carousal/carusal1.jpeg" alt="img1">
            <img src="../assets/images/carousal/carusal2.jpeg" alt="img1">
            <img src="../assets/images/carousal/carusal0.jpeg" alt="img1">
            <img src="../assets/images/carousal/carusal2.jpeg" alt="img1">
            <img src="../assets/images/carousal/carusal1.jpeg" alt="img1">
            <img src="../assets/images/carousal/carusal0.jpeg" alt="img1">
            <img src="../assets/images/carousal/carusal2.jpeg" alt="img1">
          </figure>
        </div>
        <!-- <span style="float:left" class="ss-icon" @click="galleryspin('-')">&lt;</span>
        <span style="float:right" class="ss-icon" @click="galleryspin('')">&gt;</span> -->
        <div class="container py-1">
            <div class="row text-white">
                <div class="col-lg-8 mx-auto">
                    <h3> Images </h3>
                </div>
            </div>
        </div><!-- End -->
        <!-- 3D Slideshow Section --> 
    <!-- <div id="slideshow">
        <div class="entire-content">
            <div class="content-carrousel">
                <figure class="shadow"><video src="../assets/videos/mm.mp4" controls > </video></figure>
                <figure class="shadow"><img src="../assets/images/carousal/carusal0.jpeg"/></figure>
                <figure class="shadow"><img src="https://images.pexels.com/photos/567973/pexels-photo-567973.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
                <figure class="shadow"><img src="https://images.pexels.com/photos/776653/pexels-photo-776653.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
                <figure class="shadow"><img src="https://images.pexels.com/photos/54630/japanese-cherry-trees-flowers-spring-japanese-flowering-cherry-54630.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
                <figure class="shadow"><img src="https://images.pexels.com/photos/131046/pexels-photo-131046.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
                <figure class="shadow"><img src="https://images.pexels.com/photos/302515/pexels-photo-302515.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
                <figure class="shadow"><img src="https://images.pexels.com/photos/301682/pexels-photo-301682.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
                <figure class="shadow"><img src="https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?w=940&h=650&auto=compress&cs=tinysrgb"/></figure>
            </div>
        </div>
    </div> -->

        <!-- Modal gallery -->

  <!-- Modal gallery -->
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

div#carousel { 
    perspective: 1200px; 
    padding-top: 10%; 
    font-size:0; 
    margin-bottom:0; 
    overflow: hidden; 
  }
  figure#spinner { 
    transform-style: preserve-3d; 
    height:500px; 
    transform-origin: 50% 50% -500px; 
    transition: 1s; 
  } 
  figure#spinner img { 
    width: 40%; max-width: 425px; 
    position: absolute; left: 30%;
    transform-origin: 50% 50% -500px;
    outline:1px solid transparent; 
  }
  figure#spinner img:nth-child(1) { transform:rotateY(0deg); 
  }
  figure#spinner img:nth-child(2) { transform: rotateY(-45deg); }
  figure#spinner img:nth-child(3) { transform: rotateY(-90deg); }
  figure#spinner img:nth-child(4) { transform: rotateY(-135deg); }
  figure#spinner img:nth-child(5){ transform: rotateY(-180deg); }
  figure#spinner img:nth-child(6){ transform: rotateY(-225deg); }
  figure#spinner img:nth-child(7){ transform: rotateY(-270deg); }
  figure#spinner img:nth-child(8){ transform: rotateY(-315deg); }
  #carousel ~ span { 
    color: #fff; 
    margin: 5%; 
    display: inline-block; 
    text-decoration: none; 
    font-size: 2rem; 
    transition: 0.6s color; 
    position: relative; 
    margin-top: -6rem; 
    border-bottom: none; 
    line-height: 0; }
  #carousel ~ span:hover { color: #888; cursor: pointer; }
</style>

<script>
export default {
    data() {
        return {
            angle:0
        }
    },

    methods: {
        galleryspin(sign) { 
            var spinner = document.querySelector("#spinner");
            if (!sign) { 
                this.angle = this.angle + 45;
             } 
            else { 
               this.angle = this.angle - 45; }
            spinner.setAttribute("style","-webkit-transform: rotateY("+ this.angle +"deg); -moz-transform: rotateY("+ this.angle +"deg); transform: rotateY("+ this.angle +"deg);");
        }
    },
}
 
</script>