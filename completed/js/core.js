$(function() {

	$('#chart li').each(function() {
		
		var pc = $(this).attr('title');
		pc = pc > 100 ? 100 : pc;
		$(this).children('.percent').html(pc+'%');
		var ww = $(this).width();
		var len = parseInt(ww, 10) * parseInt(pc, 10) / 100;
		$(this).children('.bar').animate({ 'width' : len + 'px' }, 1500);
		
	});
	
	$('#form_values input').blur(function() {
		
		var id = $(this).attr('id').split('_');
		var v = $(this).val();
		if (v > 100) {
			v = 100;
			$(this).val(v);
		}
		$('#chart li:nth-child('+id[1]+')').children('.percent').html(v+'%');
		var ww = $('#chart li:first-child').width();
		var len = parseInt(ww, 10) * parseInt(v, 10) / 100;
		$('#chart li:nth-child('+id[1]+')').children('.bar').animate({
			'width' : len + 'px'
		}, 1500);
		
	});

});




