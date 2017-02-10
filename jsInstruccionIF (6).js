function Mostrar()
{
//tomo la edad  
	var edad
	edad=document.getElementById('edad').value;
	if(edad>17)	
	{
		alert("esta persona es mayor de edad");
		
	}		
	if(edad<18&&edad>12)
	{
		alert("esta persona es adolescente");
	}		
	if(edad<13)
	{
		alert("esta persona es menor de edad");
	}	

}//FIN DE LA FUNCIÓN