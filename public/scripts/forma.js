
//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".next").click(function () {
	if (animating) return false;
	animating = true;

	current_fs = $(this).parent();
	next_fs = $(this).parent().next();

	//activate next step on progressbar using the index of next_fs
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({ opacity: 0 }, {
		step: function (now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = (now * 50) + "%";
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
				'transform': 'scale(' + scale + ')',
				'position': 'absolute'
			});
			next_fs.css({ 'left': left, 'opacity': opacity });
		},
		duration: 800,
		complete: function () {
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function () {
	if (animating) return false;
	animating = true;

	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();

	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

	//show the previous fieldset
	previous_fs.show();
	//hide the current fieldset with style
	current_fs.animate({ opacity: 0 }, {
		step: function (now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1 - now) * 50) + "%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({ 'left': left });
			previous_fs.css({ 'transform': 'scale(' + scale + ')', 'opacity': opacity });
		},
		duration: 800,
		complete: function () {
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

$(".submit").click(function () {

	console.log('compra realizada');

	var input = document.querySelector('.input-productos');
	input.value = localStorage.getItem('listaProductos');

	localStorage.removeItem('listaProductos');

	return true;
})



var listaCarrito = document.querySelector('.carrito-desplegado__lista');

var listaProductos = [];
if (localStorage.getItem('listaProductos') != null) {
	listaProductos = JSON.parse(localStorage.getItem('listaProductos'));
}

function actualizarCarrito() {

	listaCarrito.innerHTML = '';
	listaProductos.forEach(function (producto) {
		listaCarrito.innerHTML += '<div class= "carrito__li"><li > <img src="' + producto.imagen + '" width="300">' + '<p class="contenido__nombre">' + producto.nombre + '</p>' + '</li>' + '<span> <img src="https://cdn4.iconfinder.com/data/icons/linecon/512/delete-512.png" alt="" class="carrito__imagen"></span></div>' + '<hr class="linea">';
		var botones = document.querySelectorAll('.carrito__imagen');
		botones.forEach(recorrerBotones);
	});

	console.log('Carrito Num: ' + listaProductos.length)
}


actualizarCarrito();



function recorrerBotones(boton) {
	function eliminarDelCarrito() {
		var padre = boton.parentNode;
		padre = padre.parentNode;
		var nombre = padre.querySelector('.contenido__nombre').innerText;
		console.log('Nombre a Borrar: ' + nombre)
		var producto = {
			nombre: nombre
		};
		var index = -1;
		var posicion = listaProductos.find(function (item, i) {
			if (item.nombre == nombre) {
				console.log('Encontrado: ' + i);
				index=i;
				return i;
				
			}
			console.log('Nombre a Borrar2: ' + item.nombre + ' Indice: ' + i);
		});

		console.log('Posicion a Borrar: ' + index);

		listaProductos.splice(index, 1);

		localStorage.setItem('listaProductos', JSON.stringify(listaProductos));
		actualizarCarrito();
	}
	boton.addEventListener('click', eliminarDelCarrito);
	console.log('Carrito Num 3: ' + listaProductos.length)
}
