
$(document).ready(function() {

	set_toolbar_dim();
	animate_dropdowns();
	hide_menu_items();
	toggle_opacity_menu();
	background_image();
	dropdown_title_active();

});

function set_toolbar_dim() {
	//adjust link heights
	$('#menu a:not(#icon):not(.drop-content > a)').css('height', $('#menu').height()+'px');
	//place dropdowns below tags
	$('.drop-content').css('top', $('#menu').height());
}

function hide_menu_items() {
	if($(window).width() < 600) {
		$('#menu a:not(#icon)').hide();
	}
}

function toggle_opacity_menu() {
	setInterval(function navbar() {
		if(pageYOffset < 60) {
			$('#menu').css({'opacity': pageYOffset/60});
			$('#menu a').css({'opacity': 1});
			$('.dropcontent').css({'background': 'none'})
							 .css({'border-left': '2px solid gray'});
		} else {
			$('#menu').css({'opacity': 1});
		}
	}, 1);
}

function animate_dropdowns() {
	$('.drop-box').on('mouseover', function() {
		//$(this).children().slideDown(500);
		$(this).children().show();
	});
	$('.drop-box').on('mouseleave', function() {
		//$('.drop-content').slideUp(300);
		$('.drop-content').hide();
	});
}

function dropdown_title_active() {
	$('.drop-content').on('mouseover', function() {
		$(this).parent().css('background', '#BBB')
						.css('color', 'black');
	});
	$('.drop-content').on('mouseleave', function() {
		$(this).parent().css('background', '')
						.css('color', 'white');
	});
}

function background_image() {
	//set image and overlay gradient to window size
	$('.overlay').css('height', $(window).height());
	$('header').css('height', $(window).height());
}
