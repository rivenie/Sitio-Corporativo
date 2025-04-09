$(document).ready(function () {
    // Seleccionando elementos en variables
    var slider = $('#slider')
    var btnSiquiente = $('#btnSiguiente')
    var btnAnterior = $('#btnAnterior')

    // Se pasa el último slide al primer lugar

    $('#slider .slide:last').insertBefore('#slider .slide:first')

    // Con margen negativo se vuelve a mostrar el primer slide y se oculta el ultimo

    slider.css('margin-left', '-28.6%')

    // Función para que el slide se mueva hacia la derecha
    function moverDerecha() {
        if (!slider.is(':animated')) {

            slider.animate({
                marginLeft: '-81.6%'
            }, 700, function () {
                $('#slider .slide:first').insertAfter('#slider .slide:last')
                slider.css('margin-left', '-28.6%')
                resetInterval()
            })
        }
    }


    btnSiquiente.on('click', moverDerecha)

    // Función para que el slide se mueva hacia la izquierda

    function moverIzquierda() {
        if (!slider.is(':animated')) {
            $('#slider .slide:last').insertBefore('#slider .slide:first')
            slider.css('margin-left', '-81.6%')
            slider.animate({
                marginLeft: '-28.6%'
            }, 700, function () {
                resetInterval()
            })
        }
    }

    btnAnterior.on('click', moverIzquierda)

    // Intervalo para que el slide se mueva automáticamente

    var intervalo = setInterval(moverDerecha, 5000);

    function resetInterval() {
        clearInterval(intervalo) // Con esto se elimina el intervalo creado
        intervalo = setInterval(moverDerecha, 5000) // Con esto se vuelve a crear
    }
})





/*

    Códigos necesarios:


    $('').insertAfter('') : colocar despues de un elemento

    $('').insertBefore('') : colocar antes de un elemento

    :first : el primer elemento de un arreglo

    :last : el ultimo elemento de un arreglo

    .is('') : si se esta o no haciendo una acción (bota un booleano). En este caso si se está animando o no.

    ':animated' : si un elemento esta siendo animado

    setInterval(,) : realizar una acción automáticamente

    clearInterval() : eliminar un intervalo

*/