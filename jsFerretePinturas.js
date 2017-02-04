/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF
	var temperaturaC
	temperaturaF=document.getElementById('Temperatura').value;
	temperaturaC=temperaturaF-32;
	temperaturaC=temperaturaC*0.55;
	
	alert(temperaturaF+" Fahrenheit son "+temperaturaC+" Centigrados");

}

function CentigradosFahrenheit () 
{
	var temperaturaF
	var temperaturaC
	temperaturaC=document.getElementById('Temperatura').value;
	temperaturaF=temperaturaC*0.55;
	temperaturaF=temperaturaF+32;
	
	alert(temperaturaC+" Centigrados son "+temperaturaF+" Fahrenheit");
}
