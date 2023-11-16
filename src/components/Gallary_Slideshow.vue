<template>
    <div>
        
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
         <img src="../assets/images/gallery_page/1.jpeg" data-target="#indicators" data-slide-to="0" alt="" /> 
      </div>

      <div class="col-12 col-sm-10 col-md-6 col col-lg-6">
           <img src="../assets/images/gallery_page/2.jpeg" data-target="#indicators" data-slide-to="1" alt="" />
      </div>
    </div>

    <div class="row d-flex flex-wrap align-items-center" data-toggle="modal" data-target="#lightbox">
        <div class="col-12 col-sm-10 col-md-6 col-lg-3">
            <img src="../assets/images/gallery_page/3.jpeg" data-target="#indicators" data-slide-to="2"  alt="" />
        </div>

        <div class="col-12  col-sm-10 col-md-6 col-lg-3">
            <img src="../assets/images/gallery_page/4.jpeg" data-target="#indicators" data-slide-to="3" alt="" />
        </div>

        <div class="col-12 col-sm-10 col-md-6 col-lg-3">
            <img src="../assets/images/gallery_page/5.jpeg" data-target="#indicators" data-slide-to="3"  alt="" />
        </div>

        <div class="col-12 col-sm-10 col-md-6 col-lg-3">
            <img src="../assets/images/gallery_page/6.jpeg" data-target="#indicators" data-slide-to="4" alt="" />
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
          
          <img class="d-block w-100" src="../assets/images/gallery_page/7.jpeg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/gallery_page/8.jpeg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/gallery_page/9.jpeg" alt="Third slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/gallery_page/10.jpeg" alt="Fourth slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/gallery_page/11.jpeg" alt="Fifth slide">
        </div>
        <div class="carousel-item">
          <img class="d-block w-100" src="../assets/images/gallery_page/12.jpeg" alt="Sixth slide">
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
  <!-- Modal gallery -->


  <div class="container gallery-container">
 
    <h1> Our Gallery</h1>

    <p class="page-description text-center">Grid Layout With Zoom Effect</p>
    
    <div class="tz-gallery  ">

        <div class="row">
            <div class=" overlay zoom  img-fluid col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../assets/images/gallery_page/11.jpeg" class=" rounded hoverable" alt="Park">
                </a>
            </div>
            <div class=" overlay zoom img-fluid   col-sm-6 col-md-4">
                <a class="lightbox">
                    <img src="../assets/images/gallery_page/13.jpeg"   class="rounded" alt="Bridge">
                </a>
            </div>
            <div class="overlay zoom img-fluid  col-sm-12 col-md-4">
                <a class="lightbox" >
                    <img src="../assets/images/gallery_page/12.jpeg" class="rounded"  alt="Tunnel">
                </a>
            </div>
            <div class="overlay zoom img-fluid  col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../assets/images/gallery_page/14.jpeg" class="rounded"  alt="Coast">
                </a>
            </div>
            <div class="overlay zoom img-fluid col-sm-6 col-md-4">
                <a class="lightbox">
                    <img src="../assets/images/gallery_page/15.jpeg" class="rounded" alt="Rails">
                </a>
            </div>
            <div class="overlay zoom img-fluid  col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../assets/images/gallery_page/6.jpeg" class="rounded" alt="Traffic">
                </a>
            </div>
            <div class="overlay zoom img-fluid  col-sm-6 col-md-4">
                <a class="lightbox">
                    <img src="../assets/images/gallery_page/13.jpeg" class="rounded" alt="Rocks">
                </a>
            </div>
            <div class="overlay zoom img-fluid  col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../assets/images/gallery_page/5.jpeg" class="rounded" alt="Benches">
                </a>
            </div>
            <div class="overlay zoom img-fluid  col-sm-6 col-md-4">
                <a class="lightbox" >
                    <img src="../assets/images/gallery_page/8.jpeg" class="rounded" alt="Sky">
                </a>
            </div>
        </div>

    </div>

</div>


<div class="items">
  <div class="gallery">
    <span style="--i:1">
      <img src="../assets/images/gallery_page/10.jpeg" alt="" />
    </span>
    <span style="--i:2">
      <img src="../assets/images/gallery_page/12.jpeg" alt="" />
    </span>
    <span style="--i:3">
      <img src="../assets/images/gallery_page/9.jpeg" alt="" />
    </span>
    <span style="--i:4">
      <img src="../assets/images/gallery_page/8.jpeg" alt="" />
    </span>
    <span style="--i:5">
      <img src="../assets/images/gallery_page/7.jpeg" alt="" />
    </span>
    <span style="--i:6">
      <img src="../assets/images/gallery_page/9.jpeg" alt="" />
    </span>
    <span style="--i:7">
      <img src="../assets/images/gallery_page/6.jpeg" alt="" />
    </span>
    <span style="--i:8">
      <img src="../assets/images/gallery_page/15.jpeg" alt="" />
    </span>
  </div>
</div>

<div class="itemss">
  <div class="galleryy">
    <input type="checkbox" >
    <img src="../assets/images/gallery_page/13.jpeg" alt="a forest after an apocalypse">
    <img src="../assets/images/gallery_page/11.jpeg" alt="a waterfall and many rocks">
    <img src="../assets/images/gallery_page/10.jpeg" alt="a house on a mountain">
    <img src="../assets/images/gallery_page/9.jpeg" alt="sime pink flowers">
    <img src="../assets/images/gallery_page/8.jpeg" alt="big rocks with some trees">
    <img src="../assets/images/gallery_page/1.jpeg" alt="a waterfall, a lot of tree and a great view from the sky">
    <img src="../assets/images/gallery_page/5.jpeg" alt="a cool landscape">
    <img src="../assets/images/gallery_page/6.jpeg" alt="inside a town between two big buildings">
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