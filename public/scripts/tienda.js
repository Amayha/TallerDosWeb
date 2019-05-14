function paginaCargada() {



  var s = skrollr.init({
    smoothScrolling: false,
    forceHeight: false
  });



  var carritoNum = document.querySelector('.carro__num');
  var listaProductos = [];
  if(localStorage.getItem('listaProductos') != null){
    listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
}

  function actualizarCarrito() {
    carritoNum.innerHTML = listaProductos.length;
    console.log('Carrito Num: ' + listaProductos.length )
  }

  actualizarCarrito();

  var botones = document.querySelectorAll('.lista__adoptar');
  function recorrerBotones(boton){
      function agregarAlCarrito(){
          var padre = boton.parentNode;
          var nombre = padre.querySelector('.lista_nombre').innerText;
          var precio = padre.querySelector('.lista_precio').innerText;
          var imagen = padre.querySelector('.lista_imagen').src;
          var producto = {
              nombre: nombre,
              precio: precio,
              imagen: imagen,
          };
          
          listaProductos.push(producto);
          actualizarCarrito();
          localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
      }
      boton.addEventListener('click', agregarAlCarrito);
      console.log('Carrito Num 2: ' + listaProductos.length )
  }
  botones.forEach(recorrerBotones);





}// fin pagina cargada


/*Handlebars.registerHelpe('if_eq', function(a,b,opts){
 if(a == b ){
     return opts.fn(this);
 }else{
     return opts.inverse(this);
 }
});*/



window.addEventListener('load', paginaCargada);

$('.switchMacho label').on('click', function () {
  var indicator = $(this).parent('.switchMacho').find('span');
  if ($(this).hasClass('right')) {
    $(indicator).addClass('right');
    console.log('Tiene Right');
    location.href = '/tienda/macho';
  } else {
    $(indicator).removeClass('right');
    console.log('Clic sobre label Izquierdo');
    location.href = '/tienda';
  }
});


$('.switchHembra label').on('click', function () {
  var indicator = $(this).parent('.switchHembra').find('span');
  if ($(this).hasClass('right')) {
    $(indicator).addClass('right');
    console.log('Tiene Right');
    location.href = '/tienda/hembra';
  } else {
    $(indicator).removeClass('right');
    console.log('Clic sobre label Izquierdo');
    location.href = '/tienda';
  }
});


$('.switchGato label').on('click', function () {
  var indicator = $(this).parent('.switchGato').find('span');
  if ($(this).hasClass('right')) {
    $(indicator).addClass('right');
    console.log('Tiene Right');
    location.href = '/tienda/gato';
  } else {
    $(indicator).removeClass('right');
    console.log('Clic sobre label Izquierdo');
    location.href = '/tienda';
  }
});


$('.switchPerro label').on('click', function () {
  var indicator = $(this).parent('.switchPerro').find('span');
  if ($(this).hasClass('right')) {
    $(indicator).addClass('right');
    console.log('Tiene Right');
    location.href = '/tienda/perro';
  } else {
    $(indicator).removeClass('right');
    console.log('Clic sobre label Izquierdo');
    location.href = '/tienda';
  }
});

$('.switchAdulto label').on('click', function () {
  var indicator = $(this).parent('.switchAdulto').find('span');
  if ($(this).hasClass('right')) {
    $(indicator).addClass('right');
    console.log('Tiene Right');
    location.href = '/tienda/adulto';
  } else {
    $(indicator).removeClass('right');
    console.log('Clic sobre label Izquierdo');
    location.href = '/tienda';
  }
});

$('.switchCachorro label').on('click', function () {
  var indicator = $(this).parent('.switchCachorro').find('span');
  if ($(this).hasClass('right')) {
    $(indicator).addClass('right');
    console.log('Tiene Right');
    location.href = '/tienda/cachorro';
  } else {
    $(indicator).removeClass('right');
    console.log('Clic sobre label Izquierdo');
    location.href = '/tienda';
  }
});


$('.lista_boton').on('click', function () {
  console.log('Producto clik: ' + $(this).attr("id"));
  location.href = '/tienda/producto/' + $(this).attr("id");
});
