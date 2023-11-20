<template>
   <div>

        <div class="container mt-5 mb-5 section">
            <div class="row d-flex justify-content-center">
                <dziv class="col-md-4 col-lg-12 mt-5"  id="Bulk">
                    <span class="display-5 text-white"> 1. Bulk Fuel supply</span>
                    <h4>Our Services </h4>
                    <ul class="timeline">
                        <li>
                            <a style="color: rgb(25, 182, 234);"  class="nav-link" href="#Bulk">Bulk Fuel supply</a>
                        </li>
                        <li>
                            <a  class="nav-link opacity-75 text-white" href="#Transport">Transportation and logistics</a>
                        </li>
                        <li>
                            <a class="nav-link opacity-75 text-white" href="#Clearing">Clearing and forwarding</a>  
                        </li>
                        <li>
                            <a class="nav-link opacity-75 text-white" href="#Warehousing">Warehousing</a> 
                        </li>
                    </ul>
                </dziv>

                <div class="col-md-4 mt-5 col-lg-6">
                    <h3 class=" opacity-75 text-white">
                            Overland Petroleum is an emerging indigenous petroleum
                            products marketing and trading company in Tanzania. Overland
                            Petroleum's grand entry into the oil and gas sector was with 
                            the drive and commitment to meet Tanzanian’s energy needs by 
                            enhancing access to high-quality petroleum
                    </h3>
                </div>
                <div class="col-md-4  col-lg-6 ">
                 
                    <div class="img mb-6  mt-0 pt-0  bg-secondary h-100">
                        <img src="" alt="" >
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5  mb-5 section " id="Transport">
            <div class="row d-flex justify-content-center">
                <span class="display-5 text-white "> 2. Transportation and logistics</span>
                <div class="col-md-3 col-lg-12" >
                    <ul class="timeline">
                        <li>
                            <a   class="nav-link opacity-75 text-white" href="#Bulk">Bulk Fuel supply</a>
                        </li>

                        <li>
                            <a style="color: rgb(25, 182, 234);"  class="nav-link text-whit" href="#Transport">Transportation and logistics</a>
                        </li>

                        <li>
                            <a class="nav-link opacity-75 text-white" href="#Clearing">Clearing and forwarding</a>  
                        </li>

                        <li>
                            <a class="nav-link opacity-75 text-white" href="#wherehousing">Warehousing</a> 
                        </li>
                    </ul>
                </div>

               
                <div class="col-md-4 mt-5 col-lg-6 ">
                    <h3 class=" opacity-75 text-white" >
                        Providing logistics and transportation services is our core competency. Our main functional areas is transportation, We have enough fleet of 550 trucks and equipments that are operated by highly professional persons, who are ready to pick and deliver cargo of nearly any dimension and structure.
                    </h3>
                </div>

                <div class="col-md-5  col-lg-6">
                    <div class="img">
                        <img src="../assets/images/servicesPage/truck1.png" width="800" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="container mt-5 mb-5  section" id="Clearing">
            <div class="row d-flex justify-content-center">
                <span class="display-5 text-white">3. Clearing and forwarding</span>
                <div class="col-md-3 col-lg-12" >
                    <ul class="timeline">
                        <li>
                            <a   class="nav-link opacity-75 text-white" href="#Bulk">Bulk Fuel supply</a>
                        </li>
                        <li>
                            <a  class="nav-link opacity-75 text-white" href="#Transport">Transportation and logistics</a>
                        </li>
                        <li>
                            <a style="color:  rgb(25, 182, 234);" class="nav-link" href="#Clearing">Clearing and forwarding</a>  
                        </li>
                        <li>
                            <a class="nav-link opacity-75 text-white" href="#wherehousing">Warehousina</a> 
                        </li>
                    </ul>
                </div>

                <div class="col-md-5 mt-5 col-lg-6 ">
                    <h3 class=" opacity-75 text-white ">
                        Streamlining cargo operations through expert clearing and forwarding services, ensuring smooth transit and timely delivery.
                        
                    </h3>
                </div>

                <div class="col-md-4 col-lg-6 ">
                    <div class="img-fluid">
                        <img src="../assets/images/servicesPage/clearforward.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="container mb-5 section">
            <div class="row d-flex justify-content-center">
                <span class="display-5 text-white">4. Warehousing</span>
                <div class="col-md-4 col-lg-12" id="wherehousing">
                    <ul class="timeline">
                        <li>
                            <a   class="nav-link opacity-75 text-white" href="#Bulk">Bulk Fuel supply</a>
                        </li>

                        <li>
                            <a  class="nav-link opacity-75 text-white" href="#Transport">Transportation and logistics</a>
                        </li>

                        <li>
                            <a class="nav-link opacity-75 text-white" href="#Clearing">Clearing and forwarding</a>  
                        </li>

                        <li>
                            <a style="color: rgb(25, 182, 234);"  class="nav-link" href="#wherehousing">Warehousing</a> 
                        </li>
                    </ul>
                </div>

               

                <div class="col-md-4 mt-5 col-lg-6 ">
                    <h3 class=" opacity-75 text-white">
                        Discover Our State-of-the-Art Warehouse:
                         Your Trusted Partner for Seamless Storage 
                         and Timely distribution.
                    </h3>
                </div>

                <div class="col-md-4 col-lg-6 ">
                    <img src="../assets/images/servicesPage/warhouse.png" width="500px" height="500px" alt="">
                </div>
            </div>
        </div>
   </div>
</template>

<style>
.section{
    min-height: 75vh;
}
ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: ' ';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
    z-index: 400;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 20px;
}
ul.timeline > li:before {
    content: ' ';
    background: rgb(32, 32, 98);
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid rgb(32, 32, 98);
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 400;
}

</style>
