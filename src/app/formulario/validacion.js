function validar(){
    var expresion;
    var usuario= document.getElementById("user").value;
    var contraseña= document.getElementById("contra").value;
      var correo= document.getElementById("corr").value;

      expresion=/\w+@\w+\.+[a-z]/;

      if(usuario == '' || contraseña=='' || correo==''){
            alert("Todos los campos son obligatorios");
            return false;
          
        }

      if(contraseña.length<6){
          alert("la contraseña debe tener minimo 6 caracteres");
          return false;
      }



    if(!expresion.test(correo)){
        alert("el correo no es valido");
        return false;
    }

    alert("datos enviado")

    

}