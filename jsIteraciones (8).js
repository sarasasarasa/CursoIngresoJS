function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var numero;
	
	var respuesta='si';

	while(respuesta=="si")
	{
		contador++
		numero=prompt("ingrese un numero: ");
		numero=parseInt(numero);
		if(numero>0)
		{
			positivo=positivo+numero;	
		}	
		else
		{
			negativo=numero*negativo;
		}	
		respuesta=prompt("Quiere seguir ingresando numeros? ");
	}	


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN