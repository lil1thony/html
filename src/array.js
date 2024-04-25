document.querySelector('#header').innerHTML = "tony gay" 

var cesta = ["fresas", "pera", "cereza"]

console.log(cesta)

cesta[0] = "uva" // para modificar el valor de una posicion 
console.log(cesta)

console.log(cesta.length) //ver el tamaño del array 

cesta.push("naranja") // agrega un elemento al array
console.log(cesta)

cesta.pop() // elimina el ultimo elemento del array 
console.log(cesta)

cesta.push("naranja")
cesta.push("piña")
console.log(cesta)

/*
el segundo paràrametro (1) indica cuantos elementos eliminar  
desde el indice prporcionado (2)
*/
cesta.splice(2,2)


console.log(cesta[2])


var cestaVacia = [] // crear un array vacio





var opcion = prompt("1. ver elmentos de la cesta\n2. Agregar una fruta a la cesta\n3. eliminar la fruta de la cesta")






















