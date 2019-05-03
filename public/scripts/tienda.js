

function paginaCargada() {



  var s = skrollr.init({
    smoothScrolling: false,
   forceHeight: false
  });

  
 
      
 }
  window.addEventListener('load', paginaCargada);

  $('.switch label').on('click', function () {
    var indicator = $(this).parent('.switch').find('span');
    if ($(this).hasClass('right')) {
      $(indicator).addClass('right');
      console.log('Tiene Right');
    } else {
      $(indicator).removeClass('right');
      console.log('Clic sobre label Izquierdo');
    }
  });


  $('.switch2 label').on('click', function () {
    var indicator = $(this).parent('.switch2').find('span');
    if ($(this).hasClass('right')) {
      $(indicator).addClass('right');
      console.log('Tiene Right');
    } else {
      $(indicator).removeClass('right');
      console.log('Clic sobre label Izquierdo');
    }
  });

 