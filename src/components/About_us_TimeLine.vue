<template>
	<div class="container py-5">
		<div class="main-timeline-4 fade-in">
		  <div class="timeline-4 left-4" data-mdb-toggle="animation" data-mdb-animation-start="onckick" data-mdb-animation="slide-in-left">
			<div class="card rounded-5 gradient-custom">
			  <div class="card-body p-4"> 
				<p>
					Established in 1990, E. Awadh & Co. LTD is a
					private company with a strong reputation for 
					excellence in the logistics industry.
					In 2006, we expanded our services
					and founded Overland Logistics Clearing and
					Forwarding, based in Dar es Salaam, Tanzania
					With over 30 years of experience,
					our team of professional drivers and dedicated 
					Staff upholds the highest values
					principles of our company.
				</p>
				
			  </div>
			</div>
		   </div>

		  <div class="timeline-4 right-4">
			<div class="card rounded-5  gradient-custom-4" >

				<div class="card-body p-4">
					<p style="opacity:0.9">
						Clients will receive numerous benefits by selecting E
						AWadh & CO, Ltd as a service provider.
					</p>
						<ul>
							<li>The cargo is delivered quickly (on time).</li>
							<li>High safely standards when handling client's goods.</li>
							<li> complete services from customs clearance to door delivery.</li>
							<li> Service (agency) cost is relative low.</li>
							<li>Outstanding customer service</li>
						</ul>
				  </div>
			  
			</div>
		  </div>

		  <div class="timeline-4 left-4">
			<div class="card rounded-5  gradient-custom">
				<div class="card-body p-4 pb-5">
					<p>
						The scope of our operations extends, Burundi, DRC,
						Malawi, Rwanda, Uganda and Zambia. We set up a branch
						in Tanzania to oversee the extensive network.
					</p>
				  </div>
			</div>
		  </div>
		  
		</div>
	  </div>
	  
</template>
  
<style>
/* The actual timeline (the vertical ruler) */
.main-timeline-4 {
	position: relative;
  }
  
  /* The actual timeline (the vertical ruler) */
  .main-timeline-4::after {
	content: "";
	position: absolute;
	width: 3px;
	background-color: #bbb;
	top: 0;
	bottom: 0;
	left: 50%;
	margin-left: -3px;
  }
  
  /* Container around content */
  .timeline-4 {
	position: relative;
	background-color: inherit;
	width: 50%;
  }
  
  /* The circles on the timeline */
  .timeline-4::after {
	content: "";
	position: absolute;
	width: 25px;
	height: 25px;
	right: -11px;
	background-color: #bbb;
	top: 15px;
	border-radius: 50%;
	z-index: 1;
  }
  
  /* Place the container to the left */
  .left-4 {
	padding: 0px 40px 20px 0px;
	left: 0;
  }
  
  /* Place the container to the right */
  .right-4 {
	padding: 0px 0px 20px 40px;
	left: 50%;
  }
  
  /* Add arrows to the left container (pointing right) */
  .left-4::before {
	content: " ";
	position: absolute;
	top: 18px;
	z-index: 1;
	right: 30px;
	border: medium solid rgb(32,32,98);
	border-width: 10px 0 10px 10px;
	border-color: transparent transparent transparent rgb(32,32,98);
  }
  
  /* Add arrows to the right container (pointing left) */
  .right-4::before {
	content: " ";
	position: absolute;
	top: 18px;
	z-index: 1;
	left: 30px;
	border: medium solid rgb(32,32,98);
	;
	border-width: 10px 10px 10px 0;
	border-color: transparent  rgb(32,32,98) transparent transparent;
  }
  
  /* Fix the circle for containers on the right side */
  .right-4::after {
	left: -14px;
  }
  
  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
	/* Place the timelime to the left */
	.main-timeline-4::after {
	  left: 31px;
	}
  
	/* Full-width containers */
	.timeline-4 {
	  width: 100%;
	  padding-left: 70px;
	  padding-right: 25px;
	}
  
	/* Make sure that all arrows are pointing leftwards */
	.timeline-4::before {
	  left: 60px;
	  border: medium solid rgb(32,32,98);
	  border-width: 10px 10px 10px 0;
	  border-color: transparent rgb(32,32,98) transparent transparent;
	}
  
	/* Make sure all circles are at the same spot */
	.left-4::after,
	.right-4::after {
	  left: 18px;
	}
  
	.left-4::before {
	  right: auto;
	}
  
	/* Make all right containers behave like the left ones */
	.right-4 {
	  left: 0%;
	}
  }
  
 
  
  .gradient-custom-4 {
	/* fallback for old browsers */
	background: #f093fb;
  
	/* Chrome 10-25, Safari 5.1-6 */
	background: -webkit-linear-gradient(
	  to right,
	  rgba(240, 147, 251, 1),
	  rgba(245, 87, 108, 1)
	);
  
	/* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
	background: linear-gradient(
	  to right,
	  rgba(240, 147, 251, 1),
	  rgb(87, 80, 148)
	);
  }
</style>

<script>
import $ from 'jquery'
/**********************Scroll Animation "START"************************************/
$(document).ready(function(){
var $animation_elements = $('.anim');
var $window = $(window);

function check_if_in_view() {
var window_height = $window.height();
var window_top_position = $window.scrollTop();
var window_bottom_position = (window_top_position + window_height);

$.each($animation_elements, function() {
var $element = $(this);
var element_height = $element.outerHeight();
var element_top_position = $element.offset().top;
var element_bottom_position = (element_top_position + element_height);

//check to see if this current container is within viewport
if ((element_bottom_position >= window_top_position) &&
(element_top_position <= window_bottom_position)) {
$element.addClass('animated');
} else {
$element.removeClass('animated');
}
});
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
});
/**********************Scroll Animation "END"************************************/

/**********************Change color of center aligned animated content small Circle  "START"************************************/
$(document).ready(function(){
$(" .debits").hover(function(){
    $(" .center-right").css("background-color", "#4997cd");
    }, function(){
    $(" .center-right").css("background-color", "#fff");
}); 
});
$(document).ready(function(){
$(".credits").hover(function(){
    $(".center-left").css("background-color", "#4997cd");
    }, function(){
    $(".center-left").css("background-color", "#fff");
}); 
});
/**********************Change color of center aligned animated content small Circle  "END"************************************/
</script>