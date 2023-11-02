<template>
  <section>
    <!-- Carousel wrapper -->
    <div class="overlay h1"> <P> WE SOLVE YOUR </P> <p> TRANSPORTATION PROBLEMS</p></div>
    <div class="carouselSize" >
      <div id="carouselMaterialStyle" class="carousel slide carousel-fade carouselSize shadow " data-mdb-ride="carousel">
        <!-- Indicators -->
        <div class="carousel-indicators">
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="0" class="active" aria-current="true"
            aria-label="Slide 1"></button>
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide-to="2" aria-label="Slide 3"></button>
        </div>
      
        <!-- Inner -->
        <div class="carousel-inner rounded shadow-4-strong" >
          <!-- Single item -->
          <div class="carousel-item active">
            <img src="../assets/images/carousal/bridge.heic" class="d-block w-100" alt="bridge" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide </h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
          </div>
      
          <!-- Single item -->
          <div class="carousel-item">
            <img src="../assets/images/carousal/lorries.heic" class="d-block w-100" alt="lorries" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
      
          <!-- Single item -->
          <div class="carousel-item">
            <img src="../assets/images/carousal/lorry.heic" class="d-block w-100" alt=" a single lorry" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </div>
          </div>
        </div>
        <!-- Inner -->
      
        <!-- Controls -->
        <button class="carousel-control-prev" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-mdb-target="#carouselMaterialStyle" data-mdb-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <!-- Carousel wrapper -->
    </div>
    
  </section>
 
</template>

<style>
.overlay { 
  position:absolute;
  z-index:12;
  top:50%;
  left:0;
  width:100%;
  text-align:center;
}


</style>


<!--  style="background-color:rgb(185, 176, 176);" -->