$(document).ready(function(){

    var banner = $('#banner');

    //Definir altura dinámica para el banner
    function alturaBanner(){
        var vpaltura = $(window).height();
        banner.css('height', vpaltura);
    }

    alturaBanner();

    /*
        resize: se ejecuta cada vez
        que se cambie el tamaño de la
        ventana
    */
    $(window).resize(alturaBanner);

})

/*

    Explicación:

    $(document).ready(function(){ 

    var banner = $('#banner'); --> se inserta la sección banner en la varible banner

    function alturaBanner(){
        var vpaltura = $(window).height();      -->     se crea una función la cual crea una
        banner.css('height', vpaltura);                 variable en donde se deposita la altura
    }                                                   actual de la ventana. Luego coge la
                                                        variable banner y se inserta la altura
    alturaBanner(); --> se ejecuta la función           de la ventana actual dentro de la 
                                                        altura del banner.
    
    $(window).resize(alturaBanner);  --> con esta función se reejecuta la función.

})

*/
    
