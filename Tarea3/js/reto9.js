function anadirCarrito(){
    const masa = document.querySelector('#extras input[type=radio]:checked').value,
     sabor = document.getElementsByName("sabor")[0].value;
     

     resMasa = parseInt(masa);
     console.log(resMasa)



     var breadsticks = document.crearPizza.c1.checked ? document.getElementById("breadsticks").innerText : null;
     var panAjo = document.crearPizza.c2.checked ? document.getElementById("panAjo").innerText : null;
     var poppers = document.crearPizza.c3.checked ? document.getElementById("poppers").innerText : null;



     var texto ='<b>Pizza:</b> ' + sabor + '. <br/><b>Masa:</b> ' + masa + '. <br/><b>Extras:</b> ' + (breadsticks ? breadsticks + ', ' : '')  + (panAjo ? panAjo + ', ' : '') +  (poppers ? poppers + ', ' : '');
     swal.fire({
        icon: "sucess",
        titile: "Agregado al carrito con exito",
        html: texto,
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