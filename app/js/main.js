$(function () {

	// $('.filter__input').on('click', function () {
	// 	$('.filter__menu').removeClass('filter__menu--active');
	// 	$(this).addClass('filter__menu--active');
	// 	$('.filter__menu').removeClass('filter__menu--active');
	// });


	document.querySelector(".filter__input").addEventListener("click", function (e) {
		document.querySelector(".filter__menu").classList.toggle("filter__menu--active");
	});

});