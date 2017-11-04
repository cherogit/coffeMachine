$(function() {
	
	$('#fullpage').fullpage({
		menu: '#myMenu',
		anchors:[
			'firstPage', 
			'secondPage', 
			'thirdPage', 
			'fourthPage', 
			'fifthPage', 
			'sixthPage', 
			'seventhPage'
		],
		sectionsColor: [
			'#4fbbc3', 
			'#efe4a9', 
			'#de806a', 
			'#ebe3e3',
			'#7abac1',
			'#3b919b',
			'#4f404d'
		],
		scrollingSpeed: 600,
		responsiveWidth: 768,
		responsiveHeight: 637
	});

	$('.burger-btn').click(function() {
		$(this).toggleClass('_active');
		$('.navigation').toggleClass('_active');

		return false;
	});

	$('.navigation__menu a').click(function() {
		$('.navigation').removeClass('_active');
	});

	$(document).click(function(event) {
		if ($(event.target).closest('.navigation').length === 0) {
			$('.navigation').removeClass('_active');
			$('.burger-btn').removeClass('_active');
		}
	});

	// Счетчик количества товара в форме

	function getChar(event) {
		if (event.which == null) {
			if (event.keyCode < 32) return null;
				return String.fromCharCode(event.keyCode) // IE
			}
			if (event.which != 0 && event.charCode != 0) {
				if (event.which < 32) return null;
					return String.fromCharCode(event.which) // остальные
				}
				return null; // специальная клавиша
			}

	$('[name=counter]').keypress(function(e) {
		e = e || event;

		if (e.ctrlKey || e.altKey || e.metaKey) return;
		var chr = getChar(e);
		// с null надо осторожно в неравенствах, т.к. например null >= '0' => true!
		// на всякий случай лучше вынести проверку chr == null отдельно
		if (chr == null) return;

		if (chr < '0' || chr > '9') {
			return false;
		}
	});

	$('[name=counter]').keyup(function(event) {
		var input = $(this);
		if (input.val() < 1) {
			input.val(input.attr('data-min'))
		} else if (input.val() > 5000) {
			input.val(input.attr('data-max'))
		}
	});

	// Счетчик количества товара в форме
	$('.counter').each(function() {
		var item = $(this),
		minus = item.find('a.counter__minus'),
		plus = item.find('a.counter__plus'),
		input = item.find('input');

		minus.click(function() {
			var curr_val = parseInt(input.val());
			if (curr_val > parseInt(input.attr('data-min'))) {
				curr_val--;
				input.val(curr_val);
			}
			return false;
		});

		plus.click(function() {
			var curr_val = parseInt(input.val());

			if (curr_val < parseInt(input.attr('data-max'))) {
				curr_val++;
				input.val(curr_val);
			}
			return false;
		});
	});
});
