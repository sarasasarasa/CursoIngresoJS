function Mostrar()
{
//tomo la edad  
	var edad
	edad=document.getElementById('edad').value;
//	if(!(edad<18&&edad>12)
	if(edad>17||edad<13)
	{
		alert("esta persona no es adolescente");
	}	

}//FIN DE LA FUNCIÓN