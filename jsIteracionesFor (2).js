function Mostrar()
{
	//necsito saber el nombre del primer gato que sea de una mujer mayor
	// a 30 años y el gato no tenga mas de años de edad
	var cont=0;
	var mascota;
	var contmascotasi=0;
	var contmascotano=0;
	var tipomascota;
	var edad=0;
	var edadmax;
	var nombre;
	var sexo;
	var edadgato=0;
	var nombregato=0;
	var contgatos=0;

	for(;cont<100;cont++)
	{
		nombre=prompt("ingrese su nombre")
		sexo=prompt("Ingrese su sexo M(masculino) o F(femenino)")

		while(sexo!="f"&&sexo!="m")
		{
			sexo=promt("Sexo invalido, vuelva a ingresar el sexo");
		}

		edad=promp("Ingrese su edad")

		while(edad<=0)
		{
			edad=("Edad invalida, vuelva a ingresar su edad");
		}	

		mascota=prompt("Tiene mascota?");

		while(mascota!="s"&&mascota!="n")
		{
			mascota=prompt("Respuesta incorrecta, pulse S(si) o N(no)");
		}

		if(mascota=="s")
		{
			contmascotasi++;

			tipomascota=prompt("Tiene perro o gato?");

			while(tipomascota!="perro"&&tipomascota!="gato")
			{
				tipomascota=prompt("Tipo de mascota incorrecto, ingrese el tipo demascota nuevamente.");
			}
			
			if(tipomascota=="gato")
			{
				if(contgatos==0&&sexo="f"&&edad>=30)
				{
					edadgato=prompt("Ingrese la edad del gato");

					if(edadgato<=5)
					{
						contgatos++
						nombregato=ptompt("Ingrese el nombre del gato");
					}
				}
			}

			
		}	
		else
		{
			contmascotano++;

			if(contmascotano=1)
			{
				edadmax=edad;
			}

			if(edad>edamax)
			{
				edadmax=edad;
			}	
		}
		
	}	

}