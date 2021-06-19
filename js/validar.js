function validarLogin(loginForm){
	//validar el correo electrónico
	var loginC=loginForm.correo.value;
	var expresionCorreoL=/\w+\@+\w+\.+[a-z]/;
	if(!expresionCorreoL.test(loginC)){
	    Swal.fire({
		  icon: 'error',
		  title: 'problema en el correo!',
		  text: 'Algo salio mal!! Asegúrate de haber llenado correctamente'
		})
		return false
	} 

	Swal.fire('Excelente!','Has ingresado correctamente!','success');
    return true;

}

var password=loginForm.password;
	if(password.value=="" || password.value.length <8){
		Swal.fire(
		  'El password?',
		  'Tienes algún problema con el password??',
		  'question'
		)

		return false;
	} else{
		Swal.fire('Excelente!','Has ingresado correctamente!','success');
	}
	
    return true;