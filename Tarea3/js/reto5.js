window.onload = function(){
    document.getElementById("album").onchange = function(e){
        a = e.target.value;
        var imagen;

        switch (a) {
            case "DDAY":
                imagen = "imagenes/fronteir.png";
                break;
            case "Layover":
                imagen = "imagenes/fronteir.png";
                break;
            case "Face":
                imagen = "imagenes/fronteir.png";
                break;
            case "Golden":
                imagen = "imagenes/fronteir.png";
                break;
        }

        // document.getElementById("imagen").src = imagen;
    }

    document.getElementById("version").onchange = function(es){
        n = es.target.value; // Guardamos el valor seleccionado en la variable 'n'
    }
}

function calcular() {
    // Validamos si el usuario ha seleccionado un álbum y una versión
    if (document.getElementById("album").value == "Seleccione album:" || document.getElementById("version").value == "Seleccione una versión") {
        swal.fire({
            icon: "info",
            title: "Atención",
            text: "Debe seleccionar el álbum y la versión del álbum",
        });
        return; // Salimos de la función si no se seleccionó correctamente
    }

    var montoTotal = 0;
    var envio = 2000
    var a = document.getElementById("album").value; // Obtenemos el álbum seleccionado

    // Definimos las cuotas en función del álbum y la versión
    switch (a) {
        case "DDAY":
            if (n == "Standard")
                montoTotal = 21500;
            else 
                montoTotal = 7000;
            break;
        case "Layover":
            if (n == "Standard")
                montoTotal = 25000;
            else 
                montoTotal = 8000;
            break;
        case "Face":
            if (n == "Standard")
                montoTotal = 19500;
            else 
                montoTotal = 7000;
            break;
        case "Golden":
            if (n == "Standard")
                montoTotal = 22000;
            else 
                montoTotal = 8500;
            break;    
    }

    let imagenDireccion = "imagenes/" + a.toLowerCase() + ".png";

    swal.fire({
        imageUrl: imagenDireccion,
        html:  '<p> El album' + a + ' version ' + n + '<br><br> <strong>Subtotal: </strong>  </p>' + '$' + (subtotal) + '<br><br> <strong>Envio: </strong>  </p>' + '$' + (envio) + '<br><br> <strong>Total a pagar: </strong>  </p>' + '$' + (subtotal + envio),
        imageWidth: 600,
        imageHeight: 250,
        imageAlt: "Vehículo " + a
    });
}
