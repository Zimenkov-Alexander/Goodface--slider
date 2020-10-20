$(document).ready(function(){
	$('.count__last').text($('.slider--upper .slider__item').length);
	$('.slider--lower').slick({
			arrows: false,
			speed: 1000,
			infinite: false,
			draggable: false,
			swipe: false,
			sNavFor: '.slider--upper',
			responsive:[
				{
					breakpoint: 768,
					settings:{
						arrows: true,
						swipe: true
					}
				}
			],
		}
	);
	$('.slider--upper').slick({
			speed: 1000,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: false,
			swipe: false,
			focusOnSelect:true,
			asNavFor: '.slider--lower'
		}
	);
	$('.slider--upper').on('beforeChange', function(event, slick, currentSlider, nextSlide){
		count(nextSlide, '.count__first', '.count__last');
	});	
	$('.slider--lower').on('beforeChange', function(event, slick, currentSlider, nextSlide){
		count(nextSlide, '.count__first', '.count__last');
	});	
}); 

function count(nextSlide, current, total) {
	$(current).text(nextSlide+1);
	$(total).text($('.slider--upper .slider__item').length);
		if(nextSlide+1 == $('.slider--upper .slider__item').length){
			$('.slick-next').addClass('last-slide');
		} else if ($('.slick-next').hasClass('last-slide')){
			$('.slick-next').removeClass('last-slide');
		}
}