var mensaje = "batir las fresas"
var hay_fresas;



function jugo_de_fresas() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje 
  }

  function jugo_de_mango() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje 
  }

  function jugo_de_pera() {
    window.alert(mensaje);
     document.querySelector('#header').innerHTML = mensaje 
  }



  function servir_vaso_de_agua() {
    window.alert(mensaje);
    document.querySelector('#header').innerHTML = mensaje 
  }



  hay_fresas = false;
hay_peras = false;
hay_mangos = false;
if (hay_fresas) {
  mensaje = 'batir las fresas'
  jugo_de_fresas();
} else if (hay_peras) 
  mensaje = ' batir las peras'
  else if (hay_mangos) {
    mensaje = ' batir los mangos'  
 jugo_de_mango();
} else {
  mensaje = 'sirvame el vaso de agua'
  servir_vaso_de_agua();
}






