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
   for(let i = 0; i < arreglo.length; i++){
      sumaTotal = sumaTotal + arreglo [i];
   }
   return sumaTotal / arreglo.length 
}

function mayoresPromedios(){
  let promedio = promedioarreglo();
  let cantidaDeElementos = 0;
  for(let i = 0; i < arreglo.length; i++){
    if (arreglo[i] > promedio){
        cantidaDeElementos++;
    }
  }
  return cantidaDeElementos
}

function sumaValor(aumentarArreglo){
    arreglo.length = arreglo.length; +aumentarArreglo
}

do {
  var opcion = parseInt(prompt("1. llenar arrelgo\n.2 sacar el promedio del arreglo\n 3. sacar el total de mayores al promedio\n 4.aumentar arreglo\n 5. sumar impares\n 6. nostrar el nùmero mayor del arreglo\n 7. Mostrar el Nùmero mayor diferencia en valor absoluto entre dos celdas consecutivas del arreglo\n 8. Buscar nùmero en el arreglo\n 9. Buscarposiciòn de un arreglo\n 10. inverrtir arreglo\n 11. sustituir el valor de una posicion specifica\n 12. mostrar hilera del arreglo\n 13. finalizar aplicacion"))

   
    switch (opcion) {
        case 1:
            llenararreglo()
            break
    }


} while (opcion != 0)
