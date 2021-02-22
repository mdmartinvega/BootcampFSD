Algoritmo sin_titulo
	//Vector con numeros naturales que queramos, meter en otro de misma longitud , los pares y mayores de 25. 
	//Mostrar el origen completo y el destino los introducidos.
	
	Definir array_completa, array_segunda, lenght, index, index_dos como entero;
	lenght =10;
	
	Dimension array_completa[lenght], array_segunda[lenght];
	
	index_dos = 0;
	
	Para index = 0 hasta lenght - 1 con paso 1 Hacer
		
		array_completa[index] = Aleatorio(1,50);
		
		Escribir array_completa[index], " " Sin Saltar;
		
		Escribir "";
		
		Si array_completa[index] mod 2 == 0 y array_completa[index] > 25 Entonces
			
			array_segunda[index_dos] = array_completa[index];
			
			index_dos = index_dos + 1;
			
		FinSi
		
		
	FinPara
	
	
	Escribir "";
	
	Si index_dos < 1 Entonces
		Escribir  "El segundo array está vacío";
	sino
	
		Para index = 0 hasta index_dos - 1 Hacer
			
			Escribir array_segunda[index], " " Sin Saltar;
		FinPara
	FinSi
	

	
FinAlgoritmo
