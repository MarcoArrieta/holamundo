//funciones para validar el formulario 
function validarformulario(form1){
			//validar usuario
	var usuario=form1.usuario;
	if(usuario.value==""){
		alert("Debes ingresar un valor en el usuario!");
		usuario.focus();
		usuario.select();
		return false;
	}
//validar contraseña
	var password=form1.password;
	if(password.value=="" || password.value.length <8){
		alert("Debes ingresar correctamente tu contraseña!");
		password.focus();
		return false;

	}

//validar correo
	var correo=form1.email.value;
	var expresionCorreo=/\w+\@+\w+\.+[a-z]/;
	if(!expresionCorreo.test(correo)){
		alert("Debes proporcionar un correo valido!");
		return false;
	}

//validar las tecnologias 
	var tecnologias=form1.tecnologia;
	var checkSeleccionado=false;
	//se revisa si hay un checkbox seleccionado
	for (var i =0; i < tecnologias.length; i++) {
		if (tecnologias[i].checked) {
			checkSeleccionado=true;	
		}
	}
	if(!checkSeleccionado){
		alert("Debes seleccionar alguna tecnologia");
		return false;

	}

	//validar genero
	var genero=form1.genero;
	var radioSeleccionado=false;
	//revisar que radio esta seleccionado
	for(var i=0; i <genero.length; i++){
		if (genero[i].checked) {
			radioSeleccionado=true;
		}
	}
	if (!radioSeleccionado) {
		alert("Debes seleccionar tu genero!");
		return false;
	}

	//validar ocupacion
	let ocupacion=form1.ocupacion;
	if (ocupacion.value=="") {
		alert("Debes seleccionar una ocupacion")
		return false;
	}







//alerta formulario validado
alert("El formulario esta validado correctamente");	
return true;

}