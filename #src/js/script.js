$(document).ready(function () {
	@@include("slick.min.js");

	// Код для бургера
	$(".header__burger").click(() => {
		$(".header__navbar").toggleClass("mobile-view");
		$(".header__burger").toggleClass("header__burger--active");
	});

	$('.single-item').slick({
		// setting- name: setting - value
		// centerMode: true,
		// centerPadding: '60px',
		// slidesToShow: 1,
		// // vertical: true
		// prevArrow: $('.features-prev'),
		// nextArrow: $('.features-next'),
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
})