$(document).ready(function(){
	$('.count__last').text($('.slider--upper .slider__item').length);

	$('.slider--lower').slick({
			arrows: false,
			speed: 1000,
			infinite: false,
			draggable: false,
			sNavFor: '.slider--upper'
		}
	);
	$('.slider--upper').slick({
			speed: 1000,
			infinite: false,
			slidesToShow: 3,
			slidesToScroll: 1,
			variableWidth: true,
			draggable: false,
			asNavFor: '.slider--lower'
		}
	);
	$('.slider--upper').on('beforeChange', function(event, slick, currentSlider, nextSlide){
		$('.count__first').text(nextSlide+1);
		if(nextSlide+1 == $('.slider--upper .slider__item').length){
			$('.slick-next').addClass('last-slide');
		} else if ($('.slick-next').hasClass('last-slide')){
			$('.slick-next').removeClass('last-slide');
		}
	});	
}); 