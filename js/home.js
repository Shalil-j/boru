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
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: false,
		stagePadding: 0,
		responsiveBaseElement: 'body',
		responsive: {
			0: {
				items: 4,
			},
            1000:{
                items: 6,
            }
		},
	});

    $('.Store').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		dots: false,
		stagePadding: 0,
		responsiveBaseElement: 'body',
		responsive: {
			0: {
				items: 4,
			},
            1000:{
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

	var quantitiy=1;
	   $('.quantity-plus').click(function(e){
			e.preventDefault();
			var quantity = parseInt($('#quantity').val());
				$('#quantity').val(quantity + 1);
		});
	
		 $('.quantity-minus').click(function(e){
			e.preventDefault();
			var quantity = parseInt($('#quantity').val());
				if(quantity>0){
				$('#quantity').val(quantity - 1);
				}
		});



  });