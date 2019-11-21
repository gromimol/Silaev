

$('.menu').on('click', 'a', function (e) {
		e.preventDefault();

		var menuId = $(this).attr('href'),
			top = $(menuId).offset().top;
		$('body,html').animate({scrollTop: top}, 1000);
});