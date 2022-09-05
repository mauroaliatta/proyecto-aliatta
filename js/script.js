// SIMULADOR DE UN CARRITO COMERCIO DE ROPA PARA PONER EN PRACTICA)


function carrito(){

    const gorro = 2800
    const remera = 3500
    const buzo = 4000
    const jean = 6000

    const option = Number(prompt(`\n bienvenido! este es su carrito de compras de ropa!
    \n en el primer cuadro elegir opcion y en el segundo elegir cantidad =)
    \n ingresar un valor numérico según la opción
    \n 1: gorro $2800.- c/u
    \n 2: remera $3500.- c/u
    \n 3: buzo $4000.- c/u
    \n 4: jean $6000.- c/u
    `));

    if (option == 1) {
        const cantidadGorros = Number(prompt("bien! que cantidad de gorros querés?"));
        alert(`agregaste ${cantidadGorros} gorros a tu carrito`)
        alert(`el total de su compra es de ${cantidadGorros} GORROS X $${gorro} C/U total = $ ${cantidadGorros*gorro}.-`)
        pago();
    } 
    else if (option == 2){ 
        const cantidadRemeras = Number(prompt("bien! que cantidad de remeras querés?"));
        alert(`agregaste ${cantidadRemeras} remeras a tu carrito`)
        alert(`el total de su compra es de ${cantidadRemeras} REMERAS X $ ${remera} C/U total = $ ${cantidadRemeras*remera}.-`)
        pago();
    } 
    else if (option == 3){
        const cantidadBuzos = Number(prompt("bien! que cantidad de buzos querés?"));
        alert(`agregaste ${cantidadBuzos} buzos a tu carrito`)
        alert(`el total de su compra es de ${cantidadBuzos} BUZOS X $ ${buzo} C/U total = $ ${cantidadBuzos*buzo}.-`)
        pago();
    } 
    else if (option == 4){
        const cantidadJeans = Number(prompt("bien! que cantidad de jeans querés?"));
        alert(`agregaste ${cantidadJeans} jeans a tu carrito`)
        alert(`el total de su compra es de ${cantidadJeans} JEANS X $ ${jean} C/U total = $ ${cantidadJeans*jean}.-`)
        pago();
    } 
    else {
        alert("usted no eligió ningun opción");
    }
}

function pago(){

    do {

        let pago = Number(prompt(`\n como te gustaría pagar?
        \n ingrese numero correspondiente a forma de pago que va a utilizar
        \n 1: con efectivo
        \n 2: con tarjeta
        \n 3: mercadopago`));

        if (pago == "1"){
            alert("presentarse por caja para abonar el total")
            condition=true;
        } 
        else if (pago == "2"){
            prompt("ingrese los datos de la tarjeta para finalizar compra")
            alert("Felicidades, pagaste con tarjeta")
            condition=true;
        } 
        else if (pago == "3"){
            alert("usted va a pagar con dinero disponible en cuenta")
            alert("felicidades, Pagaste con Mercadopago")
            condition=true;
        } 
        else {
            alert("no ingresó ningún método de pago, por favor ingrese uno")
           condition=false;
        }

    } while (condition != true);
    
 
    alert("MUCHAS GRACIAS POR TU COMPRA, TE ESPERAMOS DE NUEVO!")
} 

function inciarApp (){
    carrito();
}

inciarApp();