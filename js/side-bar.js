$('.tab').on('click', function() {
	$('.list').stop();
	if ($(this).hasClass('is-active')) {
		$(this).removeClass('is-active');
		$('.list').slideUp();
	} else {
		$(this).addClass('is-active');
		$('.list').slideDown();
	}
});

$(window).on('resize', function() {
	if ($(window).width() > 1024) {
		$('.tab').removeClass('is-active')
		$('.list').removeAttr('style')
	}
});

$('.tab-2').on('click', function() {
	$('.list-2').stop();
	if ($(this).hasClass('is-active')) {
		$(this).removeClass('is-active');
		$('.list-2').slideUp();
	} else {
		$(this).addClass('is-active');
		$('.list-2').slideDown();
	}
});

$(window).on('resize', function() {
	if ($(window).width() > 1024) {
		$('.tab-2').removeClass('is-active')
		$('.list-2').removeAttr('style')
	}
});

$('.tab-3').on('click', function() {
	$('.list-3').stop();
	if ($(this).hasClass('is-active')) {
		$(this).removeClass('is-active');
		$('.list-3').slideUp();
	} else {
		$(this).addClass('is-active');
		$('.list-3').slideDown();
	}
});

$(window).on('resize', function() {
	if ($(window).width() > 1024) {
		$('.tab-3').removeClass('is-active')
		$('.list-3').removeAttr('style')
	}
});