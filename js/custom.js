(function ($) {
	"use strict";

	/* toggle-menu */
	$('#NavMenuBar').click(function () {
		SideMenuOpenClose();
	});

	function SideMenuOpenClose() {
		let SideNavID = $('#SideNavID');
		let ContentOverlayID = $('#ContentOverlayID');
		if (SideNavID.hasClass('sideNavClose')) {
			SideNavID.removeClass('sideNavClose')
			SideNavID.addClass('sideNavOpen')
		} else {
			SideNavID.removeClass('sideNavOpen')
			SideNavID.addClass('sideNavClose')
		}
	};

	/* toggle-add class */
	$('#NavMenuBar').click(function () {
		$(this).toggleClass('link-font');
	});



	/* sticky- */
	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 100) {
			$("#sticky-header").removeClass("sticky");
		} else {
			$("#sticky-header").addClass("sticky");
		}
	});


	/* right-site-nav */
	$('.main-nav').scroller();



	/* progress-bar */
	$('.web-design-progressbar').circleProgress({
		value: 0.75,
		size: 190,
		fill: "#FFC576",
		emptyFill: "#2D314D",
		thickness: 12,
		animation: {
			duration: 5000,
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.progressbar-percentage').html(Math.round(75 * progress) + '%');
	});


	$('.css').circleProgress({
		value: 0.95,
		size: 190,
		fill: "#FFC576",
		emptyFill: "#2D314D",
		thickness: 12,
		animation: {
			duration: 5000,
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.progressbar-percentage').html(Math.round(95 * progress) + '%');
	});


	$('.Java-sc').circleProgress({
		value: 0.80,
		size: 190,
		fill: "#FFC576",
		emptyFill: "#2D314D",
		thickness: 12,
		animation: {
			duration: 5000,
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.progressbar-percentage').html(Math.round(80 * progress) + '%');
	});


	$('.Sa-ss').circleProgress({
		value: 0.85,
		size: 190,
		fill: "#FFC576",
		emptyFill: "#2D314D",
		thickness: 12,
		animation: {
			duration: 5000,
		}
	}).on('circle-animation-progress', function (event, progress) {
		$(this).find('.progressbar-percentage').html(Math.round(85 * progress) + '%');
	});

	/* isotop */
	$(".project-filter li").on('click', function () {
		$(".project-filter li").removeClass('active');
		$(this).addClass('active');

		var selector = $(this).attr('data-filter');
		$(".project-item").isotope({
			filter: selector,
		});
	});

	$('.project-item').isotope({
		masonry: {
			coloumnWidth: 1
		}
	});

	/* preloader */
	$('.js-preloader').preloadinator({
		minTime: 2000
	});
    
	
	/* auto-type */
	var typed = new Typed('.type', {
		strings: [
			'Front End Developer', 
			'Back End Developer',
			'Freelancer',
		],
		typeSpeed: 60,
		backSpeed: 60,
		loop:true,
	});



}(jQuery));