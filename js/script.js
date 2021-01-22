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
        	520:{
        		items:2
        	},
        	600:{
            	items:3
        	},
        	1100:{
            	items:4
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
});