let seleccionar = document.querySelector('select');

seleccionar.addEventListener('change', elegir);

function elegir(){
    let eleccion = seleccionar.value;

    if (eleccion == 0){
        descripcion.innerHTML = '';
    }
    if (eleccion == 1) {
        descripcion.innerHTML = 'El gato persa es una de las razas que más se pueden reconocer a simple vista: se caracterizan por su largo pelo y su cara ancha y aplanada. Su pelaje puede ser de varias tonalidades: gris, blanco, azul, negro, cobrizo... Puede llegar a vivir entre 12 y 15 años y es propenso a la obesidad, por lo que es importante cuidar su alimentación. El carácter del gato persa es afable y cariñoso, es muy perezoso, y se lleva de maravilla con los niños.'
    } else if (eleccion == 2) {
        descripcion.innerHTML = 'El gato egipcio es el rey de los gatos sin pelo. También es conocido por esfinge o sphynx y son perfectamente reconocibles por su físico que, además de no tener pelo, cuenta con unas grandes orejas y ojos. Aunque cueste de creer, es una raza que proviene de Canadá y tiene una fina pelusa que cubre su piel que es casi imperceptible para el ojo humano. Es un buen compañero, ya que tiene un carácter alegre, divertido, cariñoso y es muy inteligente.'
    } else if (eleccion == 3) {
        descripcion.innerHTML = 'El gato siamés es uno de los más comunes actualmente y se caracteriza por sus ojos azules y su pelaje, que normalmente se centra en dos colores: el tono crema en la base de todo el manto y un marrón más oscuro en la zona de cabeza, patas y cola. Puede vivir entre 15 y 20 años y tiene un comportamiento cariñoso y aventurero. Es ideal para tenerlo en casa como uno más de la familia.'
    } else if (eleccion == 4) {
        descripcion.innerHTML = 'El gato Maine Coon es la raza de gato más grande del mundo, además de una de las más bonitas. Los machos de esta raza pueden llegar a pesar hasta 12 kilos, las hembras pueden alcanzar los 9 kilos. Se caracterizan por un cuerpo fuerte con patas robustas, cola larga y peluda, orejas grandes y puntiagudas, cabeza con forma cuadrada y pelo largo y denso de tacto sedoso que no se enreda.'
    }
}

window.onload = function() {
    //funcion que permite elegir la foto
    document.getElementById('foto').onchange = function(e) {
        //guarda el destino o valor de la foto en una variable 
        n = e.target.value;
        //expresion en variable que busca las fotos dentro de la carpeta imagenes JPG
        var archivo = "url('imagenes/gato" + n + ".jpg')";
        //envia la foto al lugar respectivo (id llamado resultado)
        //la variable archivo almaceno la imagen elegida por el usuario
        document.getElementById("resultado").style.backgroundImage = archivo;
    }
}