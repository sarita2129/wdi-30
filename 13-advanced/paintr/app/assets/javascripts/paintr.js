$(document).ready(() => {
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation: $('parent').on('event', 'child', ...)
  $('.palette').on('click', '.swatch', function () {
    $('.swatch.selected').removeClass('selected'); // Deselect swatches.
    $(this).addClass('selected');
  });

  // Event delegation for memory efficiency
  $('.canvas').on('mouseover', '.pixel', function (event) {
    // Hold down the shift key to actually paint.
    if (event.shiftKey === false) {
      return;
    }
    const color = $('.swatch.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
