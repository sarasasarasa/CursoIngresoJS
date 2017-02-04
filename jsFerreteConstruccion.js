/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var totalalambre;
	
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;

	largo=largo*2;
	ancho=ancho*2;
	totalalambre=largo+ancho;
	totalalembre=totalalambre*3;
	alert("total de alambre para rectangulo: "+totalalambre);
}
function Circulo () 
{

	var radio;
	radio=document.getElementById('Radio').value;
	radio=radio*radio;
	radio=radio*3.14;
	alert("cantidad de alambre para el circulo: "+radio);
	
}
function Materiales () 
{  	
	var ancho;
	var largo;
	var cemento;
	var cal;
	largo=document.getElementById('Largo').value;
	ancho=document.getElementById('Ancho').value;
	cemento=largo*ancho;
	cemento=cemento*2;
	cal=largo*ancho;
	cal=cal*3;

	alert("cantidad de cemento: "+cemento+" cantidad de cal: "+cal);
}