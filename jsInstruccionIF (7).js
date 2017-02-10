function Mostrar()
{
//tomo la edad  
	var edad
	var estadocivil
	var soltero="Soltero"
	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;
	if(edad<18&&estadocivil!=soltero)
	{
		alert("es muy pequeño para no ser soltero");
	}	


}//FIN DE LA FUNCIÓN