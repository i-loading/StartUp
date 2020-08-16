$(document).ready(function() {
	$('.first-carousel').owlCarousel({
    	loop:true,
    	margin:30,
    	nav:true,
    	dots:false,
    	navText:['<i class="fa fa-angle-left" aria-hidden="true"></i>',
    			'<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    	responsiveBaseElement: 'body',
        responsiveClass: true,
    	responsive:{
        	0:{
            	items:1
        	},
        	600:{
            	items:2
        	},
        	1100:{
            	items:3
        	},
        	1240:{
        		items:4
        	}
    	}
	})
	$('.second-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:false,
	    dots:true,
	    responsiveBaseElement: 'body',
	    responsiveClass: true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})
	$('a').click(function(event) {
		event.preventDefault();
	});
	$('.social__wrapper_one').hover(function() {
		$('.item img[src="img/1photo.png"]').css('filter', 'brightness(75%)');
		$('.closed_one').css('visibility', 'visible');
	}, function() {
		$('.item img').css('filter', 'none');
		$('.closed_one').css('visibility', 'hidden');
	});
	$('.social__wrapper_two').hover(function() {
		$('.item img[src="img/2photo.png"]').css('filter', 'brightness(75%)');
		$('.closed_two').css('visibility', 'visible');
	}, function() {
		$('.item img').css('filter', 'none');
		$('.closed_two').css('visibility', 'hidden');
	});
	$('.social__wrapper_three').hover(function() {
		$('.item img[src="img/3photo.png"]').css('filter', 'brightness(75%)');
		$('.closed_three').css('visibility', 'visible');
	}, function() {
		$('.item img').css('filter', 'none');
		$('.closed_three').css('visibility', 'hidden');
	});
	$('.social__wrapper_four').hover(function() {
		$('.item img[src="img/4photo.png"]').css('filter', 'brightness(75%)');
		$('.closed_four').css('visibility', 'visible');
	}, function() {
		$('.item img').css('filter', 'none');
		$('.closed_four').css('visibility', 'hidden');
	});

});