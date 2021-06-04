//condicionales if-else
var a=10
var b=12;
//identificar el número mayor
if (a>b){
	document.write("El número mayor es : " + a);
}else{
	document.write("El número mayoe es : " + b)
}

//ciclo for 
for (var i = 0; i<11; i++) {
	document.write(i);
}

//Ciclo while
var i=0;
while(i<11){
	document.write("<br>" + " " +i);
	i++;
}

//Ciclo do while
var x=0;
do{
	document.write("<br>" + " " +x);
	x++;
}while(x<11);

//selección m'ultiple
//casos 
//Validar si un numero entre 1 y 4  1= hijo  2 = hija  3= padre  4 = madre
var famlia=2;

switch(famlia){
	case 1:
		document.write("ERES HIJO");
	break;
	case 2:
		document.write("ERES HIJA");
	break;
	case 3:
		document.write("ERES PADRE");
	break;
	case 4:
		document.write("ERES MADRE");
	break;
	default:
	document.write("La opción no se encontró en el rango de valores.");
}