document.querySelector('#header').innerHTML = "estoy leyendo el documento switch "
var fruta 
var mensaje 
var userInput = prompt("ingrese el sabor de su fruta")



function jugo_de_fresas() {
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "red"; 
  }

  function jugo_de_naranja() {
    mensaje = "batir naranjas y mandarinas"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "purple"; 
  }

  function servir_vaso_de_agua() {
    mensaje = "servir vaso de agua"
    document.querySelector('#header').innerHTML = mensaje;
    document.querySelector('#header').style.color  = "green";
  }


fruta = userInput.toLowerCase()

switch(fruta){
    case "fresa":
        mensaje = "batir fresas"
        jugo_de_fresas()
    break
    case "naranja":
    case "mandarina":
        jugo_de_naranja()
    break
    default:
      servir_vaso_de_agua()
    break
}






































