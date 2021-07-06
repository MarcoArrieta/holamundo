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

function factorial(n) {
	var total = 1; 
	for (i=1; i<=n; i++) {
		total = total * i; 
	}
	return total;
	document.getElementById("factorial1").innerHTML=total; 
}