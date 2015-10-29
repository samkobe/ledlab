function updateHeaderSize() {
	$("#top").css('height', $(window).height()/2.50);
	$("#top").css('width', $(window).width());
}

$(document).ready(updateHeaderSize);
$(window).resize(updateHeaderSize);

var newsletterOpen = false

$( "#newsletter" ).click(function() {
	if (newsletterOpen == false) {
		$( "#newsletter_form" ).css({
			height: '332px'
		});
		$( "#newsletter_form #subForm" ).css({
			visibility: 'visible',
			padding: '16px'
		});
		newsletterOpen = true;
	} else {
		$( "#newsletter_form" ).css({
			height: '0px'
		});
		$( "#newsletter_form #subForm" ).css({
			visibility: 'hidden',
			padding: '0px'
		});
		newsletterOpen = false;
	}
});