function edad(numero1){
	let edad;
	edad=parseFloat(numero1);

	if(edad<=3){
		document.getElementById("edad1").innerHTML="<h1>ERES UN BEBE</h1>";
	}else if(edad>3&&edad<13){
		document.getElementById("edad1").innerHTML="<h1>ERES UN NIÑO</h1>";

	}else if(edad>13&&edad<18){
        document.getElementById("edad1").innerHTML="<h1>ERES UN DOLOSCENTE</h1>";

	}else{
		 document.getElementById("edad1").innerHTML="<h1>ERES ADULTO</h1>";

	}
	
	
	
}