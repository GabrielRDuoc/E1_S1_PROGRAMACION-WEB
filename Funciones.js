console.log("hola");
function validatePassword() {
  var password = document.getElementById("pass"),
    confirm_password = document.getElementById("confirm_password");
  if (password.value != confirm_password.value) {
    console.log("novale");
    document.getElementById("confirm_password").value = "";
    alert("Las contraseñas debn ser iguales");
  } else {
    console.log("iguales");
  }
}

function calcularEdad(fecha_nacimiento) {
    
  var hoy = new Date();
  var cumpleanos = new Date(fecha_nacimiento);
  var edad = hoy.getFullYear() - cumpleanos.getFullYear();
  var m = hoy.getMonth() - cumpleanos.getMonth();
  if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
    edad--;
  }      
  return edad;
}
function calcularMayor(fecha_nacimiento){
    var edad=calcularEdad(fecha_nacimiento)
    if (edad >= 18) {
       pass       
      } else {
        alert("Eres menor de edad :( "); 
        document.getElementById("start").value = "";
      }

}


