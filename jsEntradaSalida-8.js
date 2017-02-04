/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	
	/* ejemplo-testeo
	var resultado;
	resultado=2%10;
	alert(resultado);
	resultado=10%2;
	alert(resultado);
	*/
	var dividendo;
	var divisor;
	var resultado;

	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById('numeroDivisor').value;

	//resultado=parseInt(dividendo)%parseInt(divisor);
	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);
	resultado=dividendo%divisor;
	
	
	alert("el resto es: "+resultado);

}
