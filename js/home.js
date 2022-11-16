$(document).ready(function() {

	$('.header').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: true,
		stagePadding: 0,
		responsiveBaseElement: 'body',
		responsive: {
			0: {
				items: 1,
			},
		},
	});
    $('.category').owlCarousel({
		loop: true,
		dots: false,
		stagePadding: 0,
		center:false,
		responsiveBaseElement: 'body',
		responsive: {
			0: {
				items: 4,
			},
            1000:{
                items: 6,
            },
			1200:{
                items: 8,
            }
		},
	});

    $('.Store').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: false,
		nav:true,
		stagePadding: 0,
		responsiveBaseElement: 'body',
		responsive: {
			0: {
				items: 1,
			},
            1000:{
                items: 2,
            },
			1200:{
                items: 3,
            }
		},
	});
   
	$('.banner').owlCarousel({
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: false,
		navigator: false,
		responsiveBaseElement: 'body',
		responsive: {
			0: {
				items: 1,
			},
		},
	});

// store






// login page
$('#login-slider').owlCarousel({
	loop: true,
	autoplay: true,
	autoplayTimeout: 5000,
	autoplayHoverPause: true,
	dots: true,
	// nav: true,
	responsiveBaseElement: 'body',
	responsive: {
		0: {
			items: 1,
		}
	},
});


















});