$(document).ready(function(){
    $(window).on('scroll', function(){
        var contacto = $('#contacto');
        if ($(window).scrollTop() >= contacto.offset().top - contacto.outerHeight()) {
            var posicion = -($(window).scrollTop() - contacto.offset().top) * 0.20;
            contacto.css('background-position', '0 '+posicion+'px');
        }
    })
})

/*

    Códigos necesarios:

    .outerHeight() : la altura de un elemento

*/

/*

var contacto = $('#contacto') : se crea una variable donde se almacena el contenedor de contacto

if ($(window).scrollTop() >= contacto.offset().top - contacto.outerHeight()) {} : se crea un condicional donde si el scroll que
se haya hecho es mayor o igual a la altura del contenedor de contacto hasta el tope menos el alto del contenedor contacto

var posicion = -($(window).scrollTop() - contacto.offset().top) * 0.20 : se crea una variable donde se almacenarán el 20% de 
los pixeles negativos del scroll que se haya hecho menos la altura de la variable del contenedor hasta el tope

contacto.css('background-position', '0 '+posicion+'px') : se modifica la posición del fondo con css desde el JQ poniendole los
pixeles negativos que se obtuvo de la variable previa.

*/