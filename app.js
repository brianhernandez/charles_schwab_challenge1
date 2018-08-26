$(document).ready(function() {
    $moduleElement = $('.module');

    $moduleElement.on('click', function(event) {
      buttonClasses = event.target.classList;

      if (buttonClasses.contains('module__button--red')) {
        toggleColor('red');
      } else if (buttonClasses.contains('module__button--green')) {
        toggleColor('green');
      } else if (buttonClasses.contains('module__button--blue')) {
        toggleColor('blue');
      } else if (buttonClasses.contains('module__button--reset')) {
        toggleColor('reset');
      }
    });

    function toggleColor(color) {
      $colorBoxes = $('.module').children().not('.module__box--white');

      if (color !== 'reset') {
        switch (color) {
          case 'red':
            makeRed($colorBoxes);
            break;
          case 'green':
            makeGreen($colorBoxes);
            break;
          case 'blue':
            makeBlue($colorBoxes);
            break;
        }
      } else {
        makeRed($($colorBoxes[0]));
        makeGreen($($colorBoxes[1]));
        makeBlue($($colorBoxes[2]));
      }

      function makeRed($object) {
        $object.removeClass('module__box--green module__box--blue')
          .addClass('module__box--red');
      }

      function makeGreen($object) {
        $object.removeClass('module__box--red module__box--blue')
          .addClass('module__box--green');
      }

      function makeBlue($object) {
        $object.removeClass('module__box--red module__box--green')
          .addClass('module__box--blue');
      }
    };
});
