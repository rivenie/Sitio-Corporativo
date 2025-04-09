$(document).ready(function(){

    var formulario = $('#formulario')
    var nombre = $('#nombre')
    var email = $('#email')
    var mensaje = $('#mensaje')

    function valNombre(e){
        if(nombre.val() == '' || nombre.val() == null){
            e.preventDefault()
            $('input[type="text"] + .error').css('display', 'block') /* Aquí se esta diciendo que se seleccione la clase 'error' 
            que sea hermana del input de tipo texto. A esta elemento de clase 'error' se le cambia el display de none a block. 
            Para que de esta forma se pueda mostrar*/
            return false;
        }else {
            $('input[type="text"] + .error').css('display', 'none');
        }
        return true;
    }

    function valEmail(e){
        if(email.val() == '' || email.val() == null){
            e.preventDefault()
            $('input[type="email"] + .error').css('display', 'block') /* Aquí se esta diciendo que se seleccione la clase 'error' 
            que sea hermana del input de tipo texto. A esta elemento de clase 'error' se le cambia el display de none a block. 
            Para que de esta forma se pueda mostrar*/
            return false;
        }else {
            $('input[type="email"] + .error').css('display', 'none');
        }
        return true;
    }

    function valMensaje(e){
        if(mensaje.val() == '' || mensaje.val() == null){
            e.preventDefault()
            $('textarea + .error').css('display', 'block') /* Aquí se esta diciendo que se seleccione la clase 'error' 
            que sea hermana del input de tipo texto. A esta elemento de clase 'error' se le cambia el display de none a block. 
            Para que de esta forma se pueda mostrar*/
            return false;
        }else {
            $('textarea + .error').css('display', 'none')
        }
        return true;
    }

    function agradecimiento(){
        $('#formulario').html(`
            <div id="gratitude">Gracias</div>
            <div id="textGratitude">Hemos recibido tu información. Uno de nuestros expertos se pondrá en contacto contigo pronto para ayudarte con tu proyecto.</div>
        `);
        $('#formulario').css({
            'display': 'flex',
            'justify-content': 'center',
            'align-items': 'center',
            'flex-direction': 'column'
        });
    }

    function validacion(e){
        
        let valid = true; // Inicia como verdadero
         // Verificamos cada validación, si alguna devuelve falso, cambiamos a falso
        valid = valid && valNombre(e);
        valid = valid && valEmail(e);
        valid = valid && valMensaje(e)        
        
        if(valid){
            e.preventDefault();
            agradecimiento(); // Llama a la función de agradecimiento solo si todo es válido
            
        }        
    }

    formulario.on('submit', validacion)
})

/*

    Códigos necesarios:

    .val() : para seleccionar el valor de un elemento

    Código avanzado de seleccion css: 
    
    'input[type="text"] + .error' : se selecciona el elemento con la clase con el nombre 'error' que sea hermano de el input de
    tipo texto.

    'textarea + .error' : se selecciona el elemento con el nombre 'error' que sea hermano de textarea.
*/