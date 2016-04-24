$(function(){	
	var p = {
		startCallback: function() {
			console.log('lol');
			$('.start').attr('disabled', 'false');
			$('.stop').removeAttr('disabled');
		},
		slowDownCallback: function() {
			$('.stop').attr('disabled', 'true');
		},
		stopCallback: function($stopElm) {
			$('.start').removeAttr('disabled');
			$('.stop').attr('disabled', 'true');
		}

	};
	
	var rouletter = $('div.roulette');
	rouletter.roulette(p);
	
	$('.stop').click(function(){
		var stopImageNumber = $('.stopImageNumber').val();
		if(stopImageNumber == "") {
			stopImageNumber = null;
		}
		rouletter.roulette('stop');
	});
	
	$('.stop').attr('disabled', 'true');
	
	$('.start').click(function(){
		rouletter.roulette('start');	
	});

	var updateParamater = function(){
		p.speed = 100;
		p.duration = 3;
		p.stopImageNumber = 2;
		rouletter.roulette('option', p);	
	}
	
	updateParamater();
	
});

