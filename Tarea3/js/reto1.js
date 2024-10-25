function facturar(){
    const cliente = document.getElementById("cliente").value;
    const articulo = document.getElementById("articulo").value;
    cantidad = parseFloat(document.getElementById("cantidad").value);
    precio = parseFloat(document.getElementById("precio").value);

    if (cliente === "" || articulo === "" || isNaN(cantidad) || isNaN(precio)){
        swal.fire({
            icon: "error",
            title: "Deben llenar todos los campos",
            showClass:{
                popup: 
                `animate__animated
                animate__fadeIn` 
            }
        });
    } 
    else {
        const subtotal = cantidad * precio;
        const servicio = 5 * subtotal / 100;
        const iva = 13 * subtotal / 100;
        const total = subtotal + servicio + iva;
        var numFactura = 0

        document.getElementById('cli-factura').innerText = `Sr(a). ${cliente}`;
        document.getElementById('art-factura').innerText = `${articulo}`;
        document.getElementById('cant-factura').innerText = `${cantidad}`;
        document.getElementById('pre-factura').innerText = `₡${precio}`;




        document.getElementById('subtotal').innerText = `₡${subtotal}`;
        document.getElementById('iva').innerText = `₡${iva}`;
        document.getElementById('servicio').innerText = `₡${servicio}`;
        document.getElementById('total').innerText = `₡${total}`;



        swal.fire({
            icon: "sucess",
            title: "Factura creada con exito",
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

        limpiarDatos();
    }
}


function enviarCorreo(){
    swal.fire({
        html:'<iframe src="https://lottie.host/embed/99e1a9c3-154f-49d9-b57d-a36f6a16dd85/HGKyR1t3hF.json"></iframe>'
    });
};
function imprimirFactura(){
    swal.fire({
        html:'<iframe src="https://lottie.host/embed/b2584ca9-50fd-4f5e-ac9e-68362b542ac9/MWKPCSj97L.json"></iframe>'
    });
}

function limpiarDatos(){
    document.getElementById("cliente").value = "";
    document.getElementById("articulo").value = "";
    document.getElementById("cantidad").value = "";
    document.getElementById("precio").value = "";

}