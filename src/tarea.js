document.querySelector('#header').innerHTML = "estoy leyendo tarea "

var lista = []

i = 0


function Agregar_tarea() {
    var nuevatarea = prompt("ingrese la tarea")
    alert(lista.push(nuevatarea))
}

function eliminar_tarea() {
    var eliminartarea = prompt("ingrese la tarea")
    alert(lista.push[eliminartarea])
    respuesta = parseInt(prompt("desea eliminar?"))
    if (respuesta == "si") {
        alert(lista.splice(eliminartarea, 1))
    }
}

function modificar_tareas() {
    var modificartarea = parseInt(prompt("que tarea desea modificar?"))
    alert(lista[modificartarea])
    var modifi = prompt("ingrse la modificacio que desea hacerle")
    alert(lista[modificartarea] = modifi)
}

function ver_tareas() {
    alert(lista)
}

var inicio = true


do {
var respuesta
    
var opcion = prompt("1.agregar tareas \n2.eliminar una tarea \n3.ver lista de tareas \n4.modificar tarea\n5.salir del programa ")
    
    
     switch (parseInt(respuesta)) {
        case 1:
            Agregar_tarea()
            break
        case 2:
            eliminar_tarea()
            break
        case 3:
            ver_tareas()
            break
        case 4:
            modificar_tareas()
            break
        case 5:
            inicio = prompt("deseas terminar el ciclo?")
            if (inicio == "si"){
                inicio = false
            }
               
            break



    }


} while (inicio == true)









