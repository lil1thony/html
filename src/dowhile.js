document.querySelector('#header').innerHTML = "estoy leyendo el documento dowhile"



var inicio = true

function suma_de_numeros() {
    var numero1 = prompt("Ingrese numero 1")
    var numero2 = prompt("Ingrese numero 2")
    alert(parseInt(numero1) + parseInt(numero2))

}

function resta_de_numeros() {
    var numero1 = prompt("ingrese numer 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1) - parseInt(numero2))
}

function multiplicacion_de_numeros() {
    var numero1 = prompt("ingrese numer 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1) * parseInt(numero2))

}

function division_de_numeros() {
    var numero1 = prompt("ingrese numer 1")
    var numero2 = prompt("ingrese numero 2")
    alert(parseInt(numero1) / parseInt(numero2))

}
var i = 0
do {

    i++
    console.log(i)

    var respuesta = prompt(" 1. suma\n2. Resta\n3. multiplicacion\n4. division\n5. finalizar ")

    switch (parseInt(respuesta)) {
        case 1:
            suma_de_numeros()
            break
        case 2:
            resta_de_numeros()
            break
        case 3:
            multiplicacion_de_numeros()
            break
        case 4:
            division_de_numeros()
            break
        case 5:
            var i = 5
            break



    }


} while (i < 5)