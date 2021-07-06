//Marco Antonio Arrieta Soriano 3A° IRD DATIC

//primer programa
function edad(numero1){
	let edad;
	edad=parseFloat(numero1);

	if(edad<18){
		document.getElementById("edad1").innerHTML="<h1>ERES MENOR DE EAD</h1>";
	}else if(edad>=18 &&edad<60){
		document.getElementById("edad1").innerHTML="<h1>ERES MAYOR DE EDAD</h1>";

	}else if(edad>=60 &&edad<120){
        document.getElementById("edad1").innerHTML="<h1>ERES ADULTO MAYOR</h1>";

	}else if (edad>120) {
		document.getElementById("edad1").innerHTML="<h1>INTRODUCE UNA EDAD VALIDA</h1>"

	}
	
	
	
}

//segundo programa

function factorial(n){
	var numfac = parseFloat(n);
	var factorial = 1;

	if (numfac > 0) {
		for (var i = 1; i <= n; i++) {
			factorial *= i;
		}
		alert("El factorial de "+ numfac +" es: "+ factorial);
	}else{
		alert("El número que ingresaste es incorrecto");
	}
}

//tercer programa
function mes(m){
	let nummes;
	nummes =parseFloat(m);
	
	switch (nummes){
		case 1:
				document.getElementById("conver").innerHTML= "<h1> ENERO </h>";
		break;
		case 2:
				document.getElementById("conver").innerHTML= "<h1> FEBRERO </h>";
		break;
		case 3:
				document.getElementById("conver").innerHTML= "<h1>MARZO </h>";
		break;
		case 4:
				document.getElementById("conver").innerHTML= "<h1> ABRIL </h>";
		break;
		case 5:
				document.getElementById("conver").innerHTML= "<h1> MAYO </h>";		
		break;
		case 6:
	    		document.getElementById("conver").innerHTML= "<h1> JUNIO </h>";		
		break;
		case 7:
				document.getElementById("conver").innerHTML= "<h1> JULIO </h>";
		break;
		case 8:
				document.getElementById("conver").innerHTML= "<h1> AGOSTO </h>";
	    break;
		case 9:
				document.getElementById("conver").innerHTML= "<h1> SEPTIEMBRE </h>";
		break;
		case 10:
				document.getElementById("conver").innerHTML= "<h1> OCTUBRE </h>";
		break;
		case 11:
				document.getElementById("conver").innerHTML= "<h1> NOVIEMBRE </h>";
		break;
		case 12:
				document.getElementById("conver").innerHTML= "<h1>  DICIEMBRE </h>";	
		break;
		default:
				document.write("La opcion ingresada no es valida");
	}
}

//cuarto programa 
function iva(c){
	var cantidad;
	cantidad=parseFloat(c);
	var	cantiadConiva =cantidad*0.16;
	var total= cantidad + cantiadConiva;
	alert("cantidad" + cantidad + "iva" + cantiadConiva + "total" + total);
	
	

}
//quinto programa
function validarUsuario(user, pass){
	var usuario = user;
	var password = pass;

	if (usuario == "admin") {
		if (password == "adminUT3N") {
			alert("Bienvenido a mi sistema!");
			document.getElementById("resultado").innerHTML="";
		}else{
			document.getElementById("resultado").innerHTML="Error! Contraseña incorrecta";
		}
	}else{
		document.getElementById("resultado").innerHTML="Error! usuario no encontrado " + usuario;
	}
}
