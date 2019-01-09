
$(document).ready(function() {
	
	set_toolbar_dim();
	animate_dropdowns();
	background_image();
	name_tag();
	disable_smooth_scroll();
	// dropdown_title_active();  KEEP DROPDOWN TITLE ACTIVE
	
	$('.side-scroll-outer').css('width', $(window).width());
	$('.side-scroll-inner').css('width', 4*$(window).width());
	$('.side-scroll-inner .content-block').css('width', $(window).width());
	
	// setTimeout(function side_scroll(){
	
		// make the div slides instead of jumping to the destination
		// $('.side-scroll-inner').css('transition', 'transform 1.0s ease');
		
		// var shiftVal = '-'+String($(window).width())+"px";
		// will slide 30px to the right, can be negative (-100px), percentage (100%)
		// $('.side-scroll-inner').css('transform', 'translateX('+shiftVal+')');
		
		// setTimeout(side_scroll, 2000);
 
	// }, 2000);
	
	// var sso = $('side-scroll-outer');
	// sso.css('padding-bottom', sso.offsetHeight - sso.clientHeight + "px");
	
	var shiftVal = 0,
		numPanels = 4;
	setInterval(function side_scroll() {
		shiftVal += (shiftVal < (numPanels-1)*$(window).width() ? $(window).width() : -(numPanels-1)*$(window).width());
		// $('.side-scroll-outer').scrollLeft(shiftVal);
		
		$('.side-scroll-outer').animate( {scrollLeft: shiftVal }, 1500 );
	}, 4000);

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
	$('.overlay').css('height', $(window).height() - $('#menu').height());
	$('.overlay').css('top', $('#menu').height());
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

