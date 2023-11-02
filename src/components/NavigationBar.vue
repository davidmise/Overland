<template>
    <nav class="navbar shadow navbar-expand-lg ">
        <div class="container-fluid">
          <!-- <a class="navbar-brand" href="#">Logo</a> -->
          <RouterLink to="/" style="color: teal;" class="navbar-brand" aria-current="page" href="#experience">
             <img src="../assets/images/logo/IMG_1089.png" width="150" height="150" class="img-fluid" alt="Overland logo"> 
             <!-- <span> Overland </span> -->
            </RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <RouterLink to="/" style="color: teal;" class="nav-link active" aria-current="page" href="#experience">Home</RouterLink>
                <RouterLink to="/about" style="color: teal;" class="nav-link col" aria-current="page" href="#experience">About us</RouterLink>
                <RouterLink to="/service" style="color: teal;" class="nav-link active" aria-current="page" href="#experience">Services</RouterLink>
                <RouterLink to="/gallary" style="color: teal;" class="nav-link active" aria-current="page" href="#experience">Gallary</RouterLink>
                <RouterLink to="/contact" style="color: teal;" class="nav-link active" aria-current="page" href="#experience">Contacts</RouterLink>
            </div>
          </div>
        </div>
      </nav>
</template>
