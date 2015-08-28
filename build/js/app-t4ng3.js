'use strict';

;(function (W, D) {

  function cardPos() {
    var intro = D.querySelector('.intro');
    var marginLeft = '-' + intro.offsetWidth / 2 + 'px';
    intro.style.marginLeft = marginLeft;
    intro.style.position = 'absolute';
    intro.style.bottom = '0px';
    intro.style.width = '50%';
  }

  cardPos();
})(window, document);