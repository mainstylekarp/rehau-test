

//	gamberger menu
	$('.burger').click(function () {
		$('.burger-menu').toggleClass('visible');
		return false;
	});




$(document).ready(function() {
  // отслеживание зажатий ctrl и shift
  var ctrl = false;
  var shift = false;
  $(window).keydown(function(e) {
    if (e.keyCode == 17) {
      ctrl = true;
      $('.key').text('Зажат "CTRL"');
    } else if (e.keyCode == 16) {
      shift = true;
      $('.key').text('Зажат "SHIFT"');
    }
  });
  $(window).keyup(function(e) {
    if (e.keyCode == 17) {
      ctrl = false;
    } else if (e.keyCode == 16) {
      shift = false;
    }
    $('.key').text('');
  });

  // выбор элементов
  $('.images').on('click', 'div', function() {

    // ctrl зажат - добавим к текущему элементу класс "active"
    if (ctrl) {
      $(this).toggleClass('active');
    }

    // Shift зажат
    else if (shift) {

      let images = $('.images');
      let fromElement = images.children().index($('.active'));

      let currentElement = images.children().index($(this)) + 1;
      fromElement = fromElement == -1 ? 0 : fromElement;

      if (fromElement < currentElement) {
       $('.active').removeClass('active');
        images.children().each(
          function(index, element) {
            if (index >= fromElement && index < currentElement) {
              if (!$(element).hasClass('active'))
                $(element).toggleClass('active');
            }
          });

      } else {
        images.children().each(
          function(index, element) {
            if (index <= fromElement && index > currentElement - 2) {
              if (!$(element).hasClass('active'))
                $(element).toggleClass('active');
            }
          });
      }
    }

    // ctrl и shift НЕзажаты - снимим у всех эл. класс "active" и добавим к текущему эл. класс "active"
    else {
      $('.images > div').removeClass('active');
      $(this).toggleClass('active');
    }
  });

});