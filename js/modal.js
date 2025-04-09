$(document).ready(function(){
    $('.imagen-proyecto').on('click', function(){
        var rutaImagen = $(this).attr('src')
        var modal = '<div class="modal" id="modal"><img src="'+ rutaImagen +'" alt="Proyecto1" class="imagen-proyecto"><div class="btn-cerrar" id="btn-cerrar"><i class="fas fa-times"></i></div></div>'
        $('#proyectos').after(modal);
        $('#btn-cerrar').on('click', function(){
            $('#modal').remove();
        })   
        $('#modal').on('click', function(){
            $('#modal').remove();
        })
        $('#modal img').on('click', function(e) {
            e.stopPropagation(); 
        });
    })
    $(document).on('keyup', function(e){
        if (e.which == 27) {
            $('#modal').remove();
        }
    })
    
})

/*

    $('.imagen-proyecto').on('click', function(){}) : cada vez que se haga click en uno alguno de los elementos se ejecutará
    una función

    var rutaImagen = $(this).attr('src'): se crea una variable la cual se almacerá el src del elemento el cual se haya dado click 

    var modal = en esta variable se está almacenando el modal que se quiere mostrar al hacer click en una de las imagenes. Aquí
    se almacena la ruta (src) creada previamente en la variable rutaImagen.

    $('#proyectos').after(modal) : se está colocando el modal creado previamente luego del contenedor de #proyectos

    $('#btnCerrar').on('click', function(){}) : al dar click en el boton cerrar se realice una función

    $('#modal').remove(); : la función que se quiere que se ejecute es remover el modal creado 

    'keyup' : el evento keyup es el evento que sucede cuando se suelta una tecla. 

    'which' : se usa para saber que tecla se presiono 

    Para saber cual es la tecla escape en código. Se debe ir a ASCII en google. En este caso ESC es 27.

*/