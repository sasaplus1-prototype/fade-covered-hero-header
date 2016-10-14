(function(){

  'use strict';

  var frame = document.getElementById('js-frame');

  var image1 = document.getElementById('js-image-1'),
      image2 = document.getElementById('js-image-2');

  function setImageSize() {
    var style = coverStyle.get({
      elementWidth: image1.naturalWidth,
      elementHeight: image1.naturalHeight,
      containerWidth: frame.scrollWidth,
      containerHeight: frame.scrollHeight
    });

    image1.style.top        = image2.style.top        = style.top;
    image1.style.left       = image2.style.left       = style.left;
    image1.style.width      = image2.style.width      = style.width;
    image1.style.height     = image2.style.height     = style.height;
    image1.style.marginTop  = image2.style.marginTop  = style.marginTop;
    image1.style.marginLeft = image2.style.marginLeft = style.marginLeft;
  }

  window.addEventListener('resize', setImageSize, false);
  window.addEventListener('load', setImageSize, false);

  function animation() {
    var fore, back;

    fore = $('#js-frame').find('img:visible');
    back = $('#js-frame').find('img:hidden');

    fore.css({ 'z-index': 5 });
    back.css({ 'z-index': 0 });

    back.show();
    fore.fadeOut(function() {
      setTimeout(animation, 3000);
    });
  }

  $(image1).show();
  $(image2).hide();

  animation();

}());
