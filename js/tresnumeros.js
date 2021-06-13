function comparar(numero1,numero2,numero3){
	let num1,num2,num3,total;
	num1=parseFloat(numero1);
	num2=parseFloat(numero2);
	num3=parseFloat(numero1);

	
	if ( num1 > num2 && num1 > num3) {
		 document.getElementById("total").innerHTML= "<h1>El numero mayor es :" +num1+"</h>";
 	// imprime numero uno mas grande
	}else if (num2> num3){
		document.getElementById("total").innerHTML= "<h1>El numero mayor es :" +num2+"</h>";
 	// Imprime numero dos mas grande
	}else{
		document.getElementById("total").innerHTML= "<h1>El numero mayor es :" +num3+"</h>";
	 // imprime numero tres mas grande
	}
		
}
