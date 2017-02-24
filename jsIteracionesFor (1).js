function Mostrar()
{
	var cont=0;
	var cont1=0;
	var cont2=0;
	var cont3=0;
	var cont4=0;
	var cont5=0;
	var cont6=0;
	var cont7=0;
	var cont8=0;
	var cont9=0;
	var cont10=0;
	var porcentaje1=0;
	var porcentaje2=0;
	var porcentaje3=0;
	var porcentaje4=0;
	var porcentaje5=0;
	var porcentaje6=0;
	var porcentaje7=0;
	var porcentaje8=0;
	var porcentaje9=0;
	var porcentaje10=0;

	for(;cont<10000;cont++)
	{
		var numerorandom=Math.floor((Math.random() * 10) + 1);

		switch(numerorandom)
		{
			case 1:cont1++;
			break;
			case 2:cont2++;
			break;
			case 3:cont3++;
			break;
			case 4:cont4++;
			break;
			case 5:cont5++;
			break;
			case 6:cont6++;
			break;
			case 7:
			if(cont>100)
			{
				continue;
			}	
			cont7++;
			break;
			case 8:cont8++;
			break;
			case 9:cont9++;
			break;
			case 10:cont10++;
			break;
		}		
	}	


	porcentaje1=cont1/cont*100;
	porcentaje2=cont2/cont*100;
	porcentaje3=cont3/cont*100;
	porcentaje4=cont4/cont*100;
	porcentaje5=cont5/cont*100;
	porcentaje6=cont6/cont*100;
	porcentaje7=cont7/cont*100;
	porcentaje8=cont8/cont*100;
	porcentaje9=cont9/cont*100;
	porcentaje10=cont10/cont*100;

	console.log("Porcentaje de 1: "+porcentaje1+"%");
	console.log("Porcentaje de 2: "+porcentaje2+"%");
	console.log("Porcentaje de 3: "+porcentaje3+"%");
	console.log("Porcentaje de 4: "+porcentaje4+"%");
	console.log("Porcentaje de 5: "+porcentaje5+"%");
	console.log("Porcentaje de 6: "+porcentaje6+"%");
	console.log("Porcentaje de 7: "+porcentaje7+"%");
	console.log("Porcentaje de 8: "+porcentaje8+"%");
	console.log("Porcentaje de 9: "+porcentaje9+"%");
	console.log("Porcentaje de 10: "+porcentaje10+"%");

	console.log("cantidad de 1: "+cont1);
	console.log("cantidad de 2: "+cont2);
	console.log("cantidad de 3: "+cont3);
	console.log("cantidad de 4: "+cont4);
	console.log("cantidad de 5: "+cont5);
	console.log("cantidad de 6: "+cont6);
	console.log("cantidad de 7: "+cont7);
	console.log("cantidad de 8: "+cont8);
	console.log("cantidad de 9: "+cont9);
	console.log("cantidad de 10: "+cont10);
}