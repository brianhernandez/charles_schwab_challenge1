$( document ).ready(function() {
    $moduleElement = $('.module');

    $moduleElement.on('click', function(event) {
      colorButton = event.target;

      if (colorButton.classList.contains('module__button--red')) {
        toggleColor('red');
      } else if (colorButton.classList.contains('module__button--green')) {
        toggleColor('green');
      } else if (colorButton.classList.contains('module__button--blue')) {
        toggleColor('blue');
      } else if (colorButton.classList.contains('module__button--white')) {
        toggleColor('white');
      }
    });

    function toggleColor(color) {
      $nonWhiteElements = $('.module').children().not('.module__box--white');

      if (color !== 'white') {
        switch (color) {
          case 'red':
            $nonWhiteElements.removeClass('module__box--green module__box--blue')
              .addClass('module__box--red');
            break;
          case 'green':
            $nonWhiteElements.removeClass('module__box--red module__box--blue')
              .addClass('module__box--green');
            break;
          case 'blue':
            $nonWhiteElements.removeClass('module__box--red module__box--green')
              .addClass('module__box--blue');
            break;
        }
      } else {
        $($nonWhiteElements[0]).removeClass('module__box--green module__box--blue')
          .addClass('module__box--red');
        $($nonWhiteElements[1]).removeClass('module__box--red module__box--blue')
          .addClass('module__box--green');
        $($nonWhiteElements[2]).removeClass('module__box--red module__box--green')
          .addClass('module__box--blue');
      }
    };
});
