;(W, D) => {

  function cardPos() {
    let intro = D.querySelector('.intro')
    const marginLeft = '-' + intro.offsetWidth/2 + 'px'
    intro.style.marginLeft = marginLeft
    intro.style.position = 'absolute'
    intro.style.bottom = '0px'
    intro.style.left = '50%'
  }

  cardPos()

}(window, document)