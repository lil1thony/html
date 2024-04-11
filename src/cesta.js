document.querySelector('#header').innerHTML = "estoy leyendo el documento cesta"

var cesta = []
var opcion

console.log

function ver_cesta() {
    alert(cesta)
}

function agregar_una_fruta() {
    var respuesta = prompt("que fruta quiere agregar?")
    cesta.push(respuesta)
    console.log(cesta)
}

function quitar_una_fruta() {
    cesta.pop()
    console.log(cesta)
}

function quitar_una_fruta_especifica() {
    var respuesta = prompt("que fruta desea eliminar")
    cesta.splice()
    console.log(cesta)
}
var salir = false
do {
    switch (parseInt(opcion)) {
        case 1:
            var opcion = prompt(" 1. ver elmentos de la cesta \n2. Agregar una fruta a la cesta \n3. eliminar la fruta de la cesta\n4. quitar una fruta especifica \n5. salir")
            elementos_de_la_cesta()
            break
        case 2:
            agregar_una_fruta()
            break
        case 3:
            quitar_una_fruta()
            break
        case 4:
            quitar_una_fruta_especifica()
            break
        case 5:
            salir = true
            break
    }

} while (salir == false);