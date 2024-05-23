// Definimos el arreglo vacio
let arreglo = []

var largo = parseInt(prompt("Digite la cantidad de elementos del arreglo"))

function construirarreglo(largo) {
    arreglo.length = largo
}
//llamar funcion costruir 
construirarreglo(largo);

function llenararreglo() {
    for (let i = 0; i < arreglo.length; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
    }
    console.log(arreglo)
}

function promedioarreglo() {
    let sumaTotal = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sumaTotal = sumaTotal + arreglo[i];
    }
    return sumaTotal / arreglo.length
}

function mayoresPromedios() {
    let promedio = promedioarreglo();
    let cantidaDeElementos = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] > promedio) {
            cantidaDeElementos++;
        }
    }
    return cantidaDeElementos
}

function sumaValor(aumentarArreglo) {
    arreglo.length = arreglo.length; +aumentarArreglo
}

function sumarImpares(){
    let totalImpares = 0 
    for(let i = 0; i < arreglo.length; i++){
        if( (arreglo[i] % 2) != 0 ){
             totalImpares = totalImpares + arreglo[i]
        }
    }

    return totalImpares
} 

function mayorArreglo(){
    let valormayor = 0 
    for(let i = 0; i < arreglo.length; i++){

        if(arreglo[i] > valormayor){

            valormayor = arreglo[i]
        }

    }
}

function mayorDiferencia(){
    let valorDiferenciaMayor = 0
    let diferencia = 0
    for(let i = 0; i<= arreglo.length; i++){
        //Sacar La Diferencia 
        diferencia = arreglo[i] - arreglo[i+1]
        
        //convertir en absoluto
        if(diferencia < 0){
            diferencia = diferencia*-1
        }
        
        //acà preguntamos si la diferencia entre las dos celdas es mayor al valor de diferencia que guardamos
        //si es verdadero, guardamos esa diferencia
        //si es flso, no hace nada y sigue teneiendo el mismpo valorDiferenciaMayor que se habìa guardado
        if(diferencia > valorDiferenciaMayor){
            valorDiferenciaMayor = diferencia
        }
    }
    return valorDiferenciaMayor
}






do {
    var opcion = parseInt(prompt("1. llenar arrelgo\n.2 sacar el promedio del arreglo\n 3. sacar el total de mayores al promedio\n 4.aumentar arreglo\n 5. sumar impares\n 6. nostrar el nùmero mayor del arreglo\n 7. Mostrar el Nùmero mayor diferencia en valor absoluto entre dos celdas consecutivas del arreglo\n 8. Buscar nùmero en el arreglo\n 9. Buscarposiciòn de un arreglo\n 10. inverrtir arreglo\n 11. sustituir el valor de una posicion specifica\n 12. mostrar hilera del arreglo\n 13. finalizar aplicacion"))


    switch (opcion) {
        case 1:
            llenararreglo()
            break;
        case 2://4
            console.log(promedioarreglo(arreglo))
            break;
        case 3://5
            console.log("hay un total de" + mayoresPromedios() + "mayores al promedio")
            break;
        case 4://6
            let sumarlargo = parseInt(prompt("¿Cuàntos nùmeros quieres aumentar al arreglo?"))
            break;
        case 5://7
            console.log("la suma total de impaes es: " + sumaImpares())
            break;
        case 6://8
            console.log("el valor mayor del arreglo es:" + mayorArreglo())
            break;
        case 7://9
            console.log("el valor absoluto mayor entre dos celdas consecutivas es:" + mayorDiferencia())
            break;
        case 8://10
            let numeroConsulta = parseInt(prompt("¿que nùmero deseas bus"))
            break;
        
    }


} while (opcion != 0)
