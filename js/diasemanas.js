function convierteDia(numero1){
	let day;
	day =parseFloat(numero1);
	
	switch (day){
		case 1:
				document.getElementById("conver").innerHTML= "<h1>El numero:" +day+ "equivale a Lunes </h>";
		break;
		case 2:
				document.getElementById("conver").innerHTML= "<h1>El numero:" +day+ "equivale a Martes </h>";
		break;
		case 3:
				document.getElementById("conver").innerHTML= "<h1>El numero:" +day+ "equivale a Miercoles </h>";
		break;
		case 4:
				document.getElementById("conver").innerHTML= "<h1>El numero:" +day+ "equivale a Jueves </h>";
		break;
		case 5:
				document.getElementById("conver").innerHTML= "<h1>El numero:" +day+ "equivale a Viernes </h>";		
		break;
		case 6:
	    		document.getElementById("conver").innerHTML= "<h1>El numero:" +day+ "equivale a Sabado </h>";		

		break;
		case 7:
				document.getElementById("conver").innerHTML= "<h1>El numero:" +day+ "equivale a Domingo </h>";	
		break;
		default:
				document.write("La opcion ingresada no es valida");
	}
}