let arreglo = []

var largo = parseInt(prompt("Digite la cantidad de elementos delo arreglo"))

function construir(largo) {
    arreglo.length = largo
}
//llamar funcion costruir 
construir(largo)

function llenararreglo() {
    for (let i = 0; i < largo; i++) {
        let numeroAleatorio = Math.floor(Math.random() * 20) + 1
        arreglo[i] = numeroAleatorio
    }
}

do {
    var opcion = parseInt(prompt("1. llenar arrelgo"))

    switch (opcion) {
        case 1:
            llenararreglo()
        break
    }


} while (true)
