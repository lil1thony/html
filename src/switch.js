document.querySelector('#header').innerHTML = "estoy leyendo el documento switch "
var dia
var mensaje 
var userInput = prompt("ingrese el numero del dia")



function dia_lunes() {
    mensaje = "hoy es lunes"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "red"; 
  }

  function dia_martes() {
    mensaje = "hoy es martes"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "purple"; 
  }

  function dia_miercoles() {
    mensaje = "hoy es miercoles"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "green";
  }

  function dia_jueves() {
    mensaje = "hoy es jueves"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "green";
  }

  function dia_viernes() {
    mensaje = "hoy es viernes"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "green";
  }

  function dia_sabado() {
    mensaje = "hoy es sabado"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "green";
  }

  function dia_domingo() {
    mensaje = "hoy es domingo"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "green";
  }

function dia_no_coincide() {
  mensaje = "dia invalido"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "green";
  }
dia = parseInt(userInput)// con pasrseInt se convierte a entero 

switch(dia){
    case 1 :
        mensaje = "es lunes"
        dia_lunes()
    break
    case 2 :
        dia_martes()
    break
    case 3 :
        dia_miercoles()
    break
    case 4 :
        dia_jueves()
    break
    case 5 :
        dia_viernes()
    break
    case 6 :
        dia_sabado()
    break
    case 7 :
        dia_domingo()
    break
    default:
      dia_no_coincide()
    break
}





































