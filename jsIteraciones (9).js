function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero=0;
	var numeroant=0;
	var numeromenor=0;
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++;
		numero=prompt("ingrese un numero: ");
		numero=parseInt(numero);
		if(contador==1)
		{
			numeroant=numero;
			numeromenor=numero;
		}	

		if(numero>numeroant)
		{
			numeroant=numero;
		}	
		if(numeromenor>numero)
		{	
			numeromenor=numero;
		}	
	
		respuesta=prompt("Quiere seguir ingresando numeros? ");
	}

	document.getElementById('maximo').value=numeroant;
	document.getElementById('minimo').value=numeromenor;


}//FIN DE LA FUNCIÓN