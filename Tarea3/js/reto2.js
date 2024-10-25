function convertirColones() {
    const dolares = parseFloat(document.getElementById('dolares').value);
    const cambioColones = parseFloat(document.getElementById('cambioColones').value);

    if (!isNaN(dolares) && !isNaN(cambioColones)) {
        const cambio = dolares * cambioColones;

        document.getElementById('result1').innerText = `Monto en moneda: ₡${cambio}`;
        document.getElementById('result1').style.display = 'block';
    } else {
        swal.fire({
            icon: "error",
            title: "Debe llenar los campos para hacer la conversion a dolares",
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

function convertirDolares() {
    const colones = parseFloat(document.getElementById('colones').value);
    const cambioDolares = parseFloat(document.getElementById('cambioDolares').value);

    if (!isNaN(colones) && !isNaN(cambioDolares)) {
        const cambio = colones / cambioDolares;

        document.getElementById('result2').innerText = `Monto en moneda: $${cambio}`;
        document.getElementById('result2').style.display = 'block';
    } else {
        swal.fire({
            icon: "error",
            title: "Debe llenar los campos para hacer la conversion a colones",
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

function limpiarDolares() {

    if(document.calculo1){
        document.getElementById('dolares').value = '';
        document.getElementById('cambioColones').value = '';
        document.getElementById('result1').style.display = 'none';
    }
}

function limpiarColones() {

    if(document.calculo2){
        document.getElementById('colones').value = '';
        document.getElementById('cambioDolares').value = '';
        document.getElementById('result2').style.display = 'none';
    }
}

