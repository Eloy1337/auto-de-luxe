$(document).ready(function () {
	@@include("slick.min.js");

	// Код для бургера
	$(".header__burger").click(() => {
		$(".header__navbar").toggleClass("mobile-view");
		$(".header__burger").toggleClass("header__burger--active");
	});

	// Слайдер
	$('.single-item').slick({
		arrows: false,
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: false
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: true
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: true
				}
			}
		]
	});

	// Прокрутка страница
	$(".header__arrow").click(function() { // ID откуда кливаем
		$('html, body').animate({
			scrollTop: $(".features").offset().top  // класс объекта к которому приезжаем
		}, 600); // Скорость прокрутки
	});

	$(window).scroll(function() {
		if($(this).scrollTop() >= ($(".header").height() * 0.7)) {
			  $(".header__arrow").hide();
    	}
		else {
			$(".header__arrow").show();
		}
	});
})