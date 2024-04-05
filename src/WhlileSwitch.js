mensaje = "estoy leyendo el documento whileSwitch.js"
var mensaje
var elemnto = document.querySelector('#header')
elemnto.innerHTML = mensaje

var inicio = true

function suma_de_numeros(){
    var numero1 = prompt("Ingrese numero 1")
    var numero2 = prompt("Ingrese numero 2")
    alert(parseInt(numero1)+parseInt(numero2))

}

function resta_de_numeros(){
    var numero1 = prompt ("ingrese numer 1")
    var numero2 = prompt ("ingrese numero 2")
    alert(parseInt(numero1)-parseInt(numero2))
}

function multiplicacion_de_numeros(){
    var numero1 = prompt ("ingrese numer 1")
    var numero2 = prompt ("ingrese numero 2")
    alert(parseInt(numero1)*parseInt(numero2))

}

function division_de_numeros(){
    var numero1 = prompt ("ingrese numer 1")
    var numero2 = prompt ("ingrese numero 2")
    alert(parseInt(numero1)/parseInt(numero2))

}


while(inicio == true){
    var respuesta = prompt(" 1. suma\n2. Resta\n3. multiplicacion\n4. division\n5. finalizar ")
    
     switch(parseInt(respuesta)){
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
         var inicio = false 
        break



    }

}//fin while



































































