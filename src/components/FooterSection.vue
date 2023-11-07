<template>
    <section>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.css" integrity="sha256-NAxhqDvtY0l4xn+YVa6WjAcmd94NNfttjNsDmNatFVc=" crossorigin="anonymous" />
        <footer class="footer bg-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h4 class="text-light footer-head">QUICK LINKS </h4>
                        <ul class="list-unstyled footer-list mt-4">
                            <li><RouterLink to="/"  class="nav-link active tex-foot" aria-current="page" href="#experience">Home</RouterLink></li>  
                            <li><RouterLink to="/about"  class="nav-link tex-foot" aria-current="page" href="#experience">About us</RouterLink></li> 
                            <li><RouterLink to="/service"  class="nav-link  tex-foot" aria-current="page" href="#experience">Services</RouterLink></li> 
                            <li><RouterLink to="/gallary"  class="nav-link active tex-foot" aria-current="page" href="#experience">Gallary</RouterLink></li>  
                            <li><RouterLink to="/contact" class=" nav-link tex-foot" aria-current="page" href="#experience">Contacts</RouterLink> </li> 
                        </ul>
                    </div><!--end col-->

                    <div class="col-md-4 col-lg-6">
                        <h4 class="text-light footer-head">LOCATION</h4>        
                        <div class="card w-50 ">
                            <div class="card-body">
                              <h5 class="card-title">Head Quaters</h5>
                            </div>
                            <div class="ratio ratio-4x3">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.4496508844227!2d39.264686985377715!3d-6.836569275528865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c4b4b5756532d%3A0x1b447e617e708702!2sOverland%20carriers%20%26%20E.%20Awadh%20company!5e0!3m2!1spl!2spl!4v1698931297389!5m2!1spl!2spl" width="600" height="450" style="border:0;"  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div> 
                    </div><!-- end col -->
                    <div class=" col-lg-0 col-md-4 ">
                        <!-- Gallery -->
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">

                              <img
                              src="../assets/images/clients/tat.png"
                              class="w-100 shadow-1-strong rounded mb-4 my-img"
                              alt="Wintry Mountain Landscape"
                              />

                              <img
                                src="../assets/images/clients/latra.png"
                                class="w-100 shadow-1-strong rounded mb-4 pt-5"
                                alt="Boat on Calm Water"
                              />
                          
                            
                            </div>
                          
                            <div class="col-lg-4 col-md-6 col-sm-12 mb-4 ">
                              <img
                                src="../assets/images/clients/tatoa.png"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="Mountains in the Clouds"
                              />
                          
                              <img
                                src="../assets/images/clients/logo-07.png"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="Boat on Calm Water"
                              />
                            </div>
                          
                            <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                              <img
                                src="../assets/images/clients/osha.png"
                                class="w-100 shadow-1-strong rounded mb-4 "
                                alt="Waves at Sea"
                              />
                          
                              <img
                                src="../assets/images/clients/gcia.png"
                                class="w-100 shadow-1-strong rounded mb-4"
                                alt="Yosemite National Park"
                              />
                            </div>
                        </div>
                          <!-- Gallery -->
                    </div>
                </div><!--end row-->
            </div><!--end container-->
        </footer>
        <footer class="footer bg-footer footer-bar">
            <div class="container text-center">
                <div class="row align-items-center">

                    <div class="col-sm-4">
                        <div class="text-sm-left">
                            <p class=""> Copyright &copy; Overland carriers & forwarders (T) LTD 2023. All right reserve </p>
                        </div>
                    </div><!--end col-->

                    <div class="col-sm-4">
                        <ul class="list-unstyled footer-list mt-4">
                            <li><a class=" nav-link tex-foot" href="https://www.overland.co.tz/Login">Customer Log in</a></li> 
                        </ul>   
                    </div> <!-- end col  -->

                    <div class="col-sm-4 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul class="list-unstyled text-sm-right social-icon social mb-0">
                            <li class=" text-footdd list-inline-item"><a href="" class="rounded"><i class="mdi mdi-facebook" title="Facebook"></i></a></li>
                            <li class="list-inline-item"><a href="https://www.instagram.com/overlandcarriers/?hl=en" class="rounded"><i class="mdi mdi-instagram" title="Instagram"></i></a></li>
                            <li class="list-inline-item"><a href="https://www.overland.co.tz/About-Us#" class="rounded"><i class="mdi mdi-twitter" title="Twitter"></i></a></li>
                            <li class="list-inline-item"><a href="jhttps://www.youtube.com/channel/UC5f_2C5rs0m9nqM15OT_byg" class="rounded"><i class="mdi mdi-youtube" title="YouTube"></i></a></li>
                            <li class="list-inline-item"><a href="https://www.linkedin.com/company/overland-carriers/" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                        </ul><!--end icon-->
                    </div><!--end col-->

                </div><!--end row-->
            </div><!--end container-->
        </footer>
    </section>
</template>

<style>
.my-img{
  width: auto;
  height: auto;
  background-repeat: no-repeat;
  background-size: contain;

}
body{margin-top:20px;}
.bg-footer {
    background-color: #3b4757 !important;
}
.footer {
  padding: 60px 0;
  position: relative;
  color: #adb5bd;
}

.footer .logo-footer {
  font-weight: 700;
  font-size: 22px;
  padding: 3px 0;
  letter-spacing: 1px;
}

.footer .footer-head {
  font-size: 18px;
  letter-spacing: 0.8px;
  font-weight: 600;
}

.footer .text-foot {
  color: #adb5bd;
}

.footer .footer-list {
  margin-bottom: 0;
}

.footer .footer-list li {
  margin-bottom: 10px;
}

.footer .footer-list li a {
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}

.footer .footer-list li a:hover {
  color: #6dc77a !important;
}

.footer .footer-list li:last-child {
  margin-bottom: 0;
}

.footer.footer-bar {
  padding: 30px 0;
  border-top: 1px solid #6c757d;
}

.footer.footer-bar .payment-cards img {
  height: 25px;
}

.social-icon.social li a {
    color: #adb5bd;
    border-color: #adb5bd;
}
.social-icon li a {
    color: #35404e;
    border: 1px solid #35404e;
    display: inline-block;
    height: 32px;
    text-align: center;
    font-size: 15px;
    width: 32px;
    line-height: 30px;
    -webkit-transition: all 0.4s ease;
    transition: all 0.4s ease;
    overflow: hidden;
    position: relative;
}
.rounded {
    border-radius: 5px !important;
}
</style>