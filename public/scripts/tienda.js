

function paginaCargada() {



  var s = skrollr.init({
    smoothScrolling: false,
   forceHeight: false
  });

      
 }


 /*Handlebars.registerHelpe('if_eq', function(a,b,opts){
  if(a == b ){
      return opts.fn(this);
  }else{
      return opts.inverse(this);
  }
});*/



  window.addEventListener('load', paginaCargada);

  $('.switch label').on('click', function () {
    var indicator = $(this).parent('.switch').find('span');
    if ($(this).hasClass('right')) {
      $(indicator).addClass('right');
      console.log('Tiene Right');
      location.href = '/tienda/macho';
    } else {
      $(indicator).removeClass('right');
      console.log('Clic sobre label Izquierdo');
      location.href = '/tienda/hembra';
    }



  });


  $('.switch2 label').on('click', function () {
    var indicator = $(this).parent('.switch2').find('span');
    if ($(this).hasClass('right')) {
      $(indicator).addClass('right');
      console.log('Tiene Right');
      location.href = '/tienda/perro';
    } else {
      $(indicator).removeClass('right');
      
      location.href = '/tienda/gato';
      console.log('Clic sobre label Izquierdo');
    }
  });

  $('.switch3 label').on('click', function () {
    var indicator = $(this).parent('.switch3').find('span');
    if ($(this).hasClass('right')) {
      $(indicator).addClass('right');
      console.log('Tiene Right');
      location.href = '/tienda/cachorro';
    } else {
      $(indicator).removeClass('right');
      
      location.href = '/tienda/adulto';
      console.log('Clic sobre label Izquierdo');
    }
  });


 