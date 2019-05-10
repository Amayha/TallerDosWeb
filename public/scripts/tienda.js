function paginaCargada() {



  var s = skrollr.init({
    smoothScrolling: false,
   forceHeight: false
  });


  var boton = document.querySelector('.lista_boton');


  var listaProductos = [];
  if(localStorage.getItem('listaProductos')!= null){

    var listaProductos = JSON.parse( localStorage.getItem('listaProductos'));
  }
  
  var carritoNum = document.querySelector('.carrito__num');
  var listaCarrito = document.querySelector('.carrito-desplegado__lista');

  function actualizarCarrito(){
    carritoNum.innerHTML = listaProductos.length;

    listaCarrito.innerHTML = '';
    listaProductos.forEach(function(producto){
        listaCarrito.innerHTML += '<img src="' + producto.imagen + '" width="50">' + producto.nombre;
    });
}

actualizarCarrito();


  var botones = document.querySelectorAll('.lista_item');
  function recorrerBotones(boton){

  function agregarAlCarrito(){
    var padre = boton.parentNode;
    var nombre = padre.querySelector('.lista_boton').innerText;
    var precio = padre.querySelector('.lista_precio').innerText;
    var imagen = padre.querySelector('.lista_imagen').src;
    
    var producto = {
      nmombre: nombre,
      precio: precio,
      imagen: imagen,
    };

listaProductos.push(producto);
actualizarCarrito();

    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
  }

  boton.agregarAlCarrito('click' , agregarAlCarrito);
}
botones.forEach(recorrerBotones);


var botonProductoDetalle = document.querySelector('.producto-detalle__carrito');
function agregarAlCarritoDetalle(){
    var nombre = document.querySelector('.producto__nombre').innerText;
    var precio = document.querySelector('.producto__precio').innerText;
    var imagen = document.querySelector('.producto__imagen').src;
    var producto = {
        nombre: nombre,
        precio: precio,
        imagen: imagen,
    };

    listaProductos.push(producto);
    carritoNum.innerHTML = listaProductos.length;
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
}
if(botonProductoDetalle != null){
    botonProductoDetalle.addEventListener('click', agregarAlCarritoDetalle);
}
      
 }// fin pagina cargada


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


 