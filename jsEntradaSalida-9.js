/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	var porcentaje;
	//var resultado;
	sueldo=document.getElementById('sueldo').value;
	sueldo=parseInt(sueldo);
	porcentaje=sueldo*1.10;
	porcentaje=sueldo+porcentaje;
	//resultado=sueldo+porcentaje;
	//document.getElementById('resultado').value=resultado;
	document.getElementById('resultado').value=porcentaje;
}