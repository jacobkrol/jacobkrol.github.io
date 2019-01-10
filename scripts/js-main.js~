
$(document).ready(function() {
	
	set_toolbar_dim();
	animate_dropdowns();
	background_image();
	name_tag();
	disable_smooth_scroll();
	// dropdown_title_active();  KEEP DROPDOWN TITLE ACTIVE
	set_side_scroll_box();
	begin_side_scroll();
	
	let menu = {
		background: $('#menu').css('background'),
		border: $('#menu').css('border')
	};
			  
	setInterval(function navbar() {
		if(!pageYOffset) {
			$('#menu').css({'background': 'none'})
					  .css({'border': 'none'});
		} else {
			$('#menu').animate({backgroundColor: menu.background}, 1000);
					  //.animate({'borderBottomColor': menu.border}, "slow");
		}
	}, 1);
	

});

function set_toolbar_dim() {
	//measure dimensions
	var menuHeight = $("#menu").css('padding-top').replace('px',''),
		iconMargin = Number($("#icon").css('margin-top').replace('px','')),
		imgdim = $("#menu")[0].clientHeight + "px",
		imgwid = $("img").width() * ($("#menu")[0].clientHeight / $("img").height());
	//adjust icon dimensions
	$("#icon").css({height: imgdim})
			  .css({width: imgwid})
			  .css({'margin-top': (iconMargin - menuHeight) + "px"})
			  .css({'margin-bottom': (iconMargin - menuHeight) + "px"});
	//adjust link heights
	$('#menu a:not(#icon):not(.drop-content > a)').css('height', $('#menu').height()+'px');
	//place dropdowns below tags
	$('.drop-content').css('top', $('#menu').height());
}

function animate_dropdowns() {
	$('.drop-box').on('mouseover', function() {
		$(this).children().slideDown(500);
	});
	$('.drop-box').on('mouseleave', function() {
		$('.drop-content').slideUp(300);
	});
}

function dropdown_title_active() {
	$('.drop-content').on('mouseover', function() {
		$(this).parent().css('background', '#BBB')
						.css('color', 'black');
	});
	$('.drop-content').on('mouseleave', function() {
		$(this).parent().css('background', '');
	});
}

function background_image() {
	$('.overlay').css('height', $(window).height());// - $('#menu').height());
	//$('.overlay').css('top', $('#menu').height());
	$('header').css('height', $(window).height());
}

function name_tag() {
	$('#name-tag').css('top', ($('.overlay').height()-$('#name-tag').height())/2);
}

function disable_smooth_scroll() {
	if(navigator.userAgent.match(/Trident\/7\./)) {
		// document.body.addEventListener("mousewheel", function() {
			// event.preventDefault();
			// window.scrollTo(0, window.pageYOffset - event.wheelDelta);
		// });
		$('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
	}
}

function set_side_scroll_box() {
	$('.side-scroll-outer').css('width', $(window).width());
	$('.side-scroll-inner').css('width', 4*$(window).width());
	$('.side-scroll-inner .content-block').css('width', $(window).width());
}

function begin_side_scroll() {
	var shiftVal = 0,
		numPanels = 4;
	setInterval(function side_scroll() {
		shiftVal += (shiftVal < (numPanels-1)*$(window).width() ? $(window).width() : -(numPanels-1)*$(window).width());
		// $('.side-scroll-outer').scrollLeft(shiftVal);
		
		$('.side-scroll-outer').animate( {scrollLeft: shiftVal }, 1500 );
	}, 4000);
}

