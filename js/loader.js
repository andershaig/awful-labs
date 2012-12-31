$(document).ready( function () {
	// Load Nav Bar
	var awful_bar =  '<div id="awful_nav" class="clearfix">';
		awful_bar += '<span id="title"><a href="/">Awful Labs</a></span>';
		awful_bar += '<span id="subtitle"><b>aw &middot; ful</b> <i>(adjective)</i> solemnly impressive; inspiring awe; full of awe;</span>';	
		awful_bar += '</div>';

	$('#awful_bar').html(awful_bar);

	// Ability to Change Background color
	var awful_picker =  '<div id="awful_tools">';
		awful_picker += '<div class="awful_tool">Background <input type="text" id="color_selection" placeholder="#F4F4F4" /></div>';
		awful_picker += '</div>';

	$('body').append(awful_picker);

	$('#color_selection').on('keyup', function () {
		var input = $(this).val();

		// Add regex to check for Hex or RGB

		$('body').css({
			'background-color': input,
			'background-image': 'none'
		});
	});
});