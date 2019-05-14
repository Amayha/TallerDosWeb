function paginaCargada() {


  var carritoNum = document.querySelector('.carro__num');
  var listaProductos = [];
  if (localStorage.getItem('listaProductos') != null) {
    listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
  }

  function actualizarCarrito() {
    carritoNum.innerHTML = listaProductos.length;
    console.log('Carrito Num: ' + listaProductos.length)
  }

  actualizarCarrito();



  var botonProductoDetalle = document.querySelector('.lista_boton');
  function agregarAlCarritoDetalle() {
    var nombre = document.querySelector('.producto__nombre').innerText;
    var precio = document.querySelector('.purchase-price').innerText;
    var imagen = document.querySelector('.producto__foto').src;
    var producto = {
      nombre: nombre,
      precio: precio,
      imagen: imagen,
    };

    listaProductos.push(producto);
    actualizarCarrito();
    localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
  }
  if (botonProductoDetalle != null) {
    botonProductoDetalle.addEventListener('click', agregarAlCarritoDetalle);
  }


}


window.addEventListener('load', paginaCargada);