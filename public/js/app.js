// Start 
$(document).ready( function () {
	$('#info').click( function () {
		$('#wrapper').hide();
		$('#project-info').fadeIn();
		
		var modal_height = $('#project-info').height();
		var top_margin = modal_height * -1;
		$('#project-info').css('marginTop', top_margin + 'px');
	});
	
	$('#close-info').click( function () {
		$('#project-info').hide();
		$('#wrapper').fadeIn();
	});
});