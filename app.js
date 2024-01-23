//  header change background on scroll
 $(function() {
	$(window).on("scroll", function() {
			if($(window).scrollTop() > 50) {
					$(".header").addClass("active");
			} else {
					//remove the background property so it comes transparent again (defined in your css)
				 $(".header").removeClass("active");
			}
	});
});



// background ibg class
function ibg(){
   let ibg=document.querySelectorAll(".ibg"); 
 for (var i = 0; i < ibg.length; i++) { 
   if(ibg[i].querySelector('img')){ 
     ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')'; 
   } 
 }
 }
 ibg();


 // burger
 document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.menu__list').classList.toggle('open');
 })
 


// testimonial slider
var swiper = new Swiper(".slide-content", {
	slidesPerView: 3,
	spaceBetween: 25,
	loop: true,
	centerSlide: 'true',
	fade: 'true',
	grabCursor: 'true',
	autoplay: {
		 delay: 2000,
	},
	pagination: {
		el: ".swiper-pagination",
		dynamicBullets: true,
		clickable: true,
	},
	navigation: {
		 nextEl: ".swiper-button-next",
		 prevEl: ".swiper-button-prev",
	},
	breakpoints:{
		 0: {
				slidesPerView: 1,
		 },
		 767: {
				slidesPerView: 2,
		 },
		 1200: {
				slidesPerView: 3,
		 },
	},
});













    

