$(document).ready(() => {
  const $bill = $('.bill-js');
  const $body = $('body');

  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop * 0.5);
    $body.css('background-position-y', -scrollTop / 3);
  });

  $(window).on('mousemove', (e) => {
    const {pageX:x, pageY:y} = e;

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble" />').css({
      top: y,
      left: x,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo($body);

    // each $bubble exists within its own closure.
    $bubble.animate({top: -200}, 4000, () => {
      $bubble.remove(); // clean up once the animation finishes
    });
  });
});
