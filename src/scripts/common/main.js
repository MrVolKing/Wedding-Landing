$(document).ready (function ( ) {

  function initMasonry () {
    var sizer = '.grid-item';

    $('.grid').masonry({
      // options
      itemSelector: '.grid-item',
      columnWidth: sizer,
      percentPosition: true
    });
  }
  initMasonry();

  setInterval(() => {
    initMasonry();
  }, 500);
}) ;