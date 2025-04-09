$(document).ready(function(){

    var fixedHeader = $('#fixedHeader');

    $(window).on('scroll', function(){
        

        var proyectosOffsetTop = $('#proyectos').offset().top;        
        
        if($(window).scrollTop() >= proyectosOffsetTop){
            fixedHeader.css('margin-top', 0)
            
        }else if($(window).scrollTop() <= proyectosOffsetTop/2){
            fixedHeader.css('margin-top', '-68px')
            
        }
    })

})

/*

    .offset() : este metodo devuelve un objeto que tiene 2 valores. El primero es el top y el segundo es el left. El left dice la
    distancia que hay entre la izquierda de la ventana hasta el elemento y el top es la distancia que hay entre el tope de la ventana
    y el elemento. .offset().top y .offset().left

    scrollTop() : este metodo devuelve la distacia que se ha bajado haciendo scroll

*/ 