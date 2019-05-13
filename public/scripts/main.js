function paginaCargada() {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "nav") {
          x.className += " responsive";
        } else {
          x.className = "nav";
        }
      }



    jQuery(document).ready(function ($) {
        var dragging = false,
            scrolling = false,
            resizing = false;
        //cache jQuery objects
        var imageComparisonContainers = $('.cd-image-container');
        //check if the .cd-image-container is in the viewport 
        //if yes, animate it
        checkPosition(imageComparisonContainers);
        $(window).on('scroll', function () {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame)
                    ? setTimeout(function () { checkPosition(imageComparisonContainers); }, 100)
                    : requestAnimationFrame(function () { checkPosition(imageComparisonContainers); });
            }
        });

        //make the .cd-handle element draggable and modify .cd-resize-img width according to its position
        imageComparisonContainers.each(function () {
            var actual = $(this);
            drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
        });

        //upadate images label visibility
        $(window).on('resize', function () {
            if (!resizing) {
                resizing = true;
                (!window.requestAnimationFrame)
                    ? setTimeout(function () { checkLabel(imageComparisonContainers); }, 100)
                    : requestAnimationFrame(function () { checkLabel(imageComparisonContainers); });
            }
        });

        function checkPosition(container) {
            container.each(function () {
                var actualContainer = $(this);
                if ($(window).scrollTop() + $(window).height() * 0.5 > actualContainer.offset().top) {
                    actualContainer.addClass('is-visible');
                }
            });

            scrolling = false;
        }

        function checkLabel(container) {
            container.each(function () {
                var actual = $(this);
                updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
                updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
            });

            resizing = false;
        }

        //draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
        function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
            dragElement.on("mousedown vmousedown", function (e) {
                dragElement.addClass('draggable');
                resizeElement.addClass('resizable');

                var dragWidth = dragElement.outerWidth(),
                    xPosition = dragElement.offset().left + dragWidth - e.pageX,
                    containerOffset = container.offset().left,
                    containerWidth = container.outerWidth(),
                    minLeft = containerOffset + 10,
                    maxLeft = containerOffset + containerWidth - dragWidth - 10;

                dragElement.parents().on("mousemove vmousemove", function (e) {
                    if (!dragging) {
                        dragging = true;
                        (!window.requestAnimationFrame)
                            ? setTimeout(function () { animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement); }, 100)
                            : requestAnimationFrame(function () { animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement); });
                    }
                }).on("mouseup vmouseup", function (e) {
                    dragElement.removeClass('draggable');
                    resizeElement.removeClass('resizable');
                });
                e.preventDefault();
            }).on("mouseup vmouseup", function (e) {
                dragElement.removeClass('draggable');
                resizeElement.removeClass('resizable');
            });
        }

        function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
            var leftValue = e.pageX + xPosition - dragWidth;
            //constrain the draggable element to move inside his container
            if (leftValue < minLeft) {
                leftValue = minLeft;
            } else if (leftValue > maxLeft) {
                leftValue = maxLeft;
            }

            var widthValue = (leftValue + dragWidth / 2 - containerOffset) * 100 / containerWidth + '%';

            $('.draggable').css('left', widthValue).on("mouseup vmouseup", function () {
                $(this).removeClass('draggable');
                resizeElement.removeClass('resizable');
            });

            $('.resizable').css('width', widthValue);

            updateLabel(labelResizeElement, resizeElement, 'left');
            updateLabel(labelContainer, resizeElement, 'right');
            dragging = false;
        }

        function updateLabel(label, resizeElement, position) {
            if (position == 'left') {
                (label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
            } else {
                (label.offset().left > resizeElement.offset().left + resizeElement.outerWidth()) ? label.removeClass('is-hidden') : label.addClass('is-hidden');
            }
        }
    });

    //PONE EL CONTADOR A 0
    var count_click = 1000;

    //AÑADE UN CLICK AL EJECUTAR LA FUNCIÓN
    function count_click_add() {

        count_click += 1;
        mostrar_contador();

    }

    //MUESTRA CUANTOS CLICK LLEVAMOS
    $("#count_click").text(count_click);

    //AÑADE A TODOS LOS BOTONES CON EL NAME count_click QUE AL SER PULSADOS EJECUTEN EL CONTADOR
    $(document).ready(function () {
        $("button[name='count_click']").click(function () {
            count_click_add();
            console.log('Hola ' + count_click);
        });
    });

    function mostrar_contador() {
        let sContador = count_click.toString();
        let v1 = 0;
        let v2 = 0;
        let v3 = 0;
        let v4 = 0;

        if (sContador.length == 1) {
            v4 = sContador[0];
        }
        if (sContador.length == 2) {
            v3 = sContador[0];
            v4 = sContador[1];
        }
        if (sContador.length == 3) {
            v2 = sContador[0];
            v3 = sContador[1];
            v4 = sContador[2];

        }
        if (sContador.length == 4) {
            v1 = sContador[0];
            v2 = sContador[1];
            v3 = sContador[2];
            v4 = sContador[3];
        }
        $("#count_click1").text(v1);
        $("#count_click2").text(v2);
        $("#count_click3").text(v3);
        $("#count_click4").text(v4);

    };

    var modalSimple = document.getElementById('modalSimple')
    var modal = document.getElementsByClassName("modal");
    var modalBtn = document.getElementsByClassName("modalBtn");
    var modalCerrar = document.getElementsByClassName("modal__cerrar");
    // debo poner los [] porque al ser una clase lo ve como un conjunto de elementos aunque 
    //solo tengo uno por eso especifico con el 0 

   
    // escuchar el click del boton inicial
    modalBtn[0].addEventListener("click", modalAbrir0);
    

    //crear la funcion de que aparezca el modal 
    function modalAbrir0() {
        //console.log(123);
        modal[0].style.display = "block";
    }

    // escuchar el claick del boton de cerrar
    modalCerrar[0].addEventListener("click", modalCierre0);

    //crear la funcion de que se cierre el modal 
    function modalCierre0() {
        modal[0].style.display = "none";
    }

    

    // escuchar el click del boton inicial
    modalBtn[1].addEventListener("click", modalAbrir1);
        

    //crear la funcion de que aparezca el modal 
    function modalAbrir1() {
        //console.log(123);
        modal[1].style.display = "block";
    }

    // escuchar el claick del boton de cerrar
    modalCerrar[1].addEventListener("click", modalCierre1);

    //crear la funcion de que se cierre el modal 
    function modalCierre1() {
        modal[1].style.display = "none";
    }


    // escuchar el click del boton inicial
    modalBtn[2].addEventListener("click", modalAbrir2);
        

    //crear la funcion de que aparezca el modal 
    function modalAbrir2() {
        //console.log(123);
        modal[2].style.display = "block";
    }

    // escuchar el claick del boton de cerrar
    modalCerrar[2].addEventListener("click", modalCierre2);

    //crear la funcion de que se cierre el modal 
    function modalCierre2() {
        modal[2].style.display = "none";
    }


    // escuchar el click del boton inicial
    modalBtn[3].addEventListener("click", modalAbrir3);
        

    //crear la funcion de que aparezca el modal 
    function modalAbrir3() {
        //console.log(123);
        modal[3].style.display = "block";
    }

    // escuchar el claick del boton de cerrar
    modalCerrar[3].addEventListener("click", modalCierre3);

    //crear la funcion de que se cierre el modal 
    function modalCierre3() {
        modal[3].style.display = "none";
    }


     // escuchar el click del boton inicial
     modalBtn[4].addEventListener("click", modalAbrir4);
        

     //crear la funcion de que aparezca el modal 
     function modalAbrir4() {
         //console.log(123);
         modal[4].style.display = "block";
     }
 
     // escuchar el claick del boton de cerrar
     modalCerrar[4].addEventListener("click", modalCierre4);
 
     //crear la funcion de que se cierre el modal 
     function modalCierre4() {
         modal[4].style.display = "none";
     }

     
      // escuchar el click del boton inicial
    modalBtn[5].addEventListener("click", modalAbrir5);
        

    //crear la funcion de que aparezca el modal 
    function modalAbrir5() {
        //console.log(123);
        modal[5].style.display = "block";
    }

    // escuchar el claick del boton de cerrar
    modalCerrar[5].addEventListener("click", modalCierre5);

    //crear la funcion de que se cierre el modal 
    function modalCierre5() {
        modal[5].style.display = "none";
    }

    

}

window.addEventListener('load', paginaCargada);