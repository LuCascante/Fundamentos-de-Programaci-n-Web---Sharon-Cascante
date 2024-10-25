const productos = [];

function agregarProducto(){
    const nombre = document.getElementById("nombre").value,
     descripcion = document.getElementById("descripcion").value;

    let categoria = document.getElementById("category-select").value,
    cantidad = parseFloat(document.getElementById("cantidad").value),
    costo = parseFloat(document.getElementById("costo").value);

    if (nombre === "" || descripcion === "" || categoria === "" || isNaN(cantidad) || isNaN(costo)){
        swal.fire({
            icon: "error",
            title: "Deben llenar todos los campos",
            showClass:{
                popup: 
                `animate__animated
                animate__fadeIn` 
            },
            hideClass:{
                popup:
                `animate__animated
                animate__fadeOut` 
            } 
        });
    } else {
        productos.push({nombre, descripcion, categoria, cantidad, costo});

        const prodSeleccionado = document.getElementById("seleccionarProducto");

        const option = document.createElement("option");

        option.value = nombre;

        option.text = nombre;

        prodSeleccionado.appendChild(option);

        limpiarDatos();

        swal.fire({
            icon: "sucess",
            title: "Producto agregado",
            showClass:{
                popup:
                `animate__animated
                animate__fadeIn`  
            },
            hideClass:{
                popup:
                `animate__animated
                animate__fadeOut` 
            } 
        });
    }
}


function mostrarProducto(){
    const nombreSeleccionado = document.getElementById("seleccionarProducto").value;

    let productoSeleccionado = null;

    for (let i = 0; i < productos.length; i ++){
        const producto = productos[i];

        const nombreProd = producto.nombre ;

        if( nombreProd === nombreSeleccionado){
            productoSeleccionado = producto;

            break;
        }
    }

    if (productoSeleccionado){

        document.getElementById('nom-registro').innerText = `${productoSeleccionado.nombre}`;
        document.getElementById('des-registro').innerText = `${productoSeleccionado.descripcion}`;
        document.getElementById('cat-registro').innerText = `${productoSeleccionado.categoria}`;
        document.getElementById('cant-registro').innerText = `${productoSeleccionado.cantidad} unidades`;
        document.getElementById('cost-registro').innerText = `₡${productoSeleccionado.costo} c/u`;


    } else { 
        document.getElementById("showProducto").style.display = "none";
    }
};



function limpiarDatos(){
    document.getElementById("nombre").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("category-select").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("costo").value = "";

}