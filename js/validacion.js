//Funciones para validar el formulario//
function validarFormulario(from1){

	//validar el usuario
	var Usuario= from1.Usuario;
	if(Usuario.value==""){
		alert("Debes ingresar un valor en el Usuario!")
		Usuario.focus();
		Usuario.select();
		return false;
	}

	
//validar las tecnologias
var tecnologias=form1.tecnologia;
var checkSeleccionado=false;
//se revisa si hay un checkbox seleccionado
for (var i = 0; i < tecnologias.length; i++) {
	if(tecnologias[i].checked){
		checkSeleccionado=true;
	}
}
if(!checkSeleccionado){
	alert("Debes seleccionar alguna tecnologia");
	return false;
}

//validar el correo electrónico
	var correo=form1.email.value;
	var expresionCorreo=/\w+\@+\w+\.+[a-z]/;
	if(!expresionCorreo.test(correo)){
		alert("Debes proporcionar un correo válido!");
		return false
	} 
//Validar el genero de la persona
var genero=form1.genero;
var radioSeleccionado=false;
//revisar con un ciclo cual radio esta seleccionado
for (var i=0; i<genero.length; i++) {
	if (genero[i].checked) {
		radioSeleccionado=true;

	}
}
if (!radioSeleccionado){
	alert("Debes seleccionar tu genero!");
	return false;
}

//VAlidar la ocupacion
let ocupacion=form1.ocupacion;
if(ocupacion.value==""){
	alert ("Debes seleccionar una ocupacion!");
	return false
}



//cuando el formulario es validado
alert("El formulario esta validado corecctamente")
return true;


}