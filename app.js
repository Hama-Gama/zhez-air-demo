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














    

