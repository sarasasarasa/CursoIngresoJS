function Mostrar()
{	
	//declarar contadores y variables 
	var contador=0;
	var numero=0;
	var respuesta="s";
	var negativos=0;
	var positivos=0;
	var contadorpos=0;
	var contadorneg=0;
	var contadorceros=0;
	var numpares=0;
	var pospromedio=0;
	var negpromedio=0;
	var promediogral=0;
	//var bandera="nadie";

	while(respuesta=="s")
	{
		numero=prompt("ingrese un numero: ");
		numero=parseInt(numero);
		//sumo negativos
		if(numero<0)
		{
			negativos=numero+negativos;
			contadorneg++;
		}	
		//sumo positivos
		if(numero>0)
		{
			positivos=numero+positivos;
			contadorpos++;
		}	
		//sumo los ceros
		if(numero==0)
		{
			contadorceros++
		}	
		//sumo los numeros pares
		if(numero>0&&numero%2==0)
		{
		//	if(numero%2==0)
		//	{
				numpares++;
		//	}	
		}
		respuesta=prompt("Ingrese S para seguir o cualquier tecla para el resumen");
	}

	pospromedio=positivos/contadorpos;
	negpromedio=negativos/contadorneg;
	promediogral=positivos+negativos;

	document.write("1 Suma de negativos: "+negativos+"<br>"+"2 Suma positivos: "+positivos+"<br>"+
					"3 Cantidad de positivos: "+contadorpos+"<br>"+"4 Cantidad de negativos: "+contadorneg+"<br>"+
					"5 Cantidad de ceros: "+contadorceros+"<br>"+"6 Cantidad de numeros pares: "+numpares+"<br>"+
					"7 Promedio de positivos: "+pospromedio+"<br>"+"8 Promedios de negativos: "+negpromedio+"<br>"+
					"9 Diferencia entre positivos y negativos: "+promediogral+"<br>");
}//FIN DE LA FUNCIÓN