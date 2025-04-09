$(document).ready(function () {
    /* Mostrar y ocultar el botón volver arriba */
    var botonVolverArriba = $('#btn-volver-arriba');

    $(window).on('scroll', function () {
        var proyectosOffsetTop = $('#proyectos').offset().top;
        if ($(window).scrollTop() >= proyectosOffsetTop) {
            botonVolverArriba.css('margin-right', 0)
        } else if ($(window).scrollTop() <= proyectosOffsetTop / 2) {
            botonVolverArriba.css('margin-right', '-60px')
        }
    })

    /* Movimiento suave de scroll de "Inicio" y "Volver arriba" */

$('a.volver-arriba, #btn-volver-arriba').on('click', function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    if ($(window).scrollTop() != 0) { // Cambié esto para usar las funciones correctamente
        $('html, body').stop().animate({ scrollTop: 0 }, 1000); // Animación suave hacia el top
    }
});



/* 

    a.volver-arriba : se está indicando que se seleccionará todos los enlaces en todos los lugares del html con el nombre de 
    volver-arriba. 

    e : representa al evento que se realiza por defecto. En este caso ir directamente al enlace especificado de manera brusca.

    e.preventDefault(): cuando se de click en el elemento el preventDefault() prevee la acción por defecto que se realizaba. 
    Se uso anteriormente con el botón de un formulario y lo que se estaba haciendo era preveer la acción por defecto que en ese caso
    era enviar el formulario. 

    stop() : detener la acción que se esté ejecutando en ese momento


*/

/* Movimiento suave de scroll de los demás items del menú principal */

$('a.scroll-suave').on('click', function (e) {
    e.preventDefault()
    var seccionOffSetTop = $($(this).attr('href')).offset().top /* Aquí se crea una varibale porque los elementos llevan 
    a partes diferentes. En cambio, en el botón para volver arriba llega a un solo lugar.*/
    $('html, body').stop().animate({ scrollTop: seccionOffSetTop }, 1000)
})

/*

    El movimiento de scroll suave es el mismo que el de inicio y volver arriba. La diferencia es que no se le pone el condicional
    porque no necesitamos el scrollTop sea diferente a 0. Creamos una variable en la cual queremos almacenar el enlace que se 
    almacena en el href del elemento que se haya hecho click. Como se quiere hacer de manera dinamica la acción. Se utiliza "this".
    Ya que no se sabe a que enlace el usuario le ha dado click. Pudo haber sido al enlace de escritorio, movible, de celular, etc.
    Por eso aqui viene el uso de this. Entonces, lo que se quiere es obtener el atributo href del elemento que se le ha dado click.
    Hasta ahora se tendría algo asi: $(this).attr('href'). Sin embargo, esto se debe de colocar en parentecis. Ya que, Este código
    puede arrojar lo siguiente: Ej. "#proyectos" o "#contacto". No obstante, lo que se desea obtener es $(#proyectos). Por lo que 
    toda esta sentencia se coloca entre parentesis. Se tendría hasta ahora esto: $($(this).attr('href')). Con esto se tiene el 
    enlace al cual se quiere dirigir. Ahora para poder "animarlo" y se pueda mover todo el html y body. Se necesita la distacia 
    entre el tope y el elemento. Esto lo conseguimos con offset().top. De esta forma tendríamos un código así: 
    $($(this).attr('href')).offset.top() Con esto tendríamos la distancia que hay en el tope hasta el enlace del elemento que se 
    haya seleccionado. Por lo tanto, en la animación le indicamos al html y body que se animen hacia la posición que le indiquemos 
    en el scrollTop. En el scrollTop debemos colocar la distancia que se ha almacenado en seccionOffSetTop. De esta manera haremos
    que la animación vaya hacia la distancia del enlace del elemento seleccionado. 

    Ahora mismo funciona la animación de traslado del body hacia arriba y abajo como le indicamos. No hay ningun problema. Sin
    embargo, se nota un detalle. Al dar click en un enlace. Nos lo anima, pero si damos click al mismo tiempo a otro enlace. La
    animación actual debe terminar para poder poder continuar con la siguiente. Esto no se quiere. Se quiere que se detenga la 
    animación para poder dar paso de inmediado a la siguiente. Para esto se debe de dar paso a la extensión stop(). Esta 
    extensión lo que hará es detener la animación que se esté ejecutando en ese momento. Y dará pasó a la animación que se quiera
    ejecutar en ese momento. Se tendría este código finalmente: $('html, body').stop().animate({scrollTop: seccionOffSetTop}, 1000)

*/

/* El código para los demas enlaces (scroll-acercaDe y scroll-equipo) es similar: */

$('a.scroll-acercaDe').on('click', function (e) {
    e.preventDefault()
    var seccionOffSetTop = $($(this).attr('href')).offset().top - 122
    $('html, body').stop().animate({ scrollTop: seccionOffSetTop }, 1000)
})

$('a.scroll-equipo').on('click', function(e){ 
    e.preventDefault()
    var seccionOffSetTop = $($(this).attr('href')).offset().top -68
    $('html, body').stop().animate({scrollTop: seccionOffSetTop}, 1000)
})

/*

    Las secciones de acercaDe y equipo son un poco diferentes. La animación hacia la seccion acercaDe se coloca muy por debajo de
    esa sección. Por lo que se debe de hacer un cálculo para poder subir un poco más. El menú fixed mide 68px. La separación de
    proyectos y acercaDe es de 54px. Por lo que se debe de sumar ambor valores para poder restarlo con el offset().top 

*/

// Botón ver proyectos:



})