$('.bxslider').bxSlider({
	  mode: 'fade',
	  captions: false,
	  pager: false,
	  auto: true,
	  pause:5000
	});

$(document).ready(function() {
	$('.search-btn').click(function() {
		$('.search').toggleClass('active');
	});
});