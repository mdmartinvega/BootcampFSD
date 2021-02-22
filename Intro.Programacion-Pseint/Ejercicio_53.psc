Funcion resultado = promedio(array, lenght)
	definir suma, index, resultado Como Real;
	
	suma = 0;
	
	
	
	Para index = 0 hasta lenght - 1 con paso 1 hacer 
		
		suma = suma + array[index];
		
	FinPara
	resultado = suma / lenght;
	
FinFuncion



Algoritmo sin_titulo
	//Usar una función para calcular el promedio recibiendo un array y su longitud. En el algoritmo
	//principal, leer la cantidad de datos que introducirá el usuario y posteriormente los propios datos.
	//Escribir el resultado de su promedio.
	
	Definir array, index, lenght Como Entero;
	definir resultado como real;
	
	Escribir "Introduce un número";
	leer lenght;
	
	Dimension array[lenght];
	
	Para index = 0 hasta lenght - 1 con paso 1 Hacer
		
		Escribir "Introduce los números para completar el array";
		
		leer array[index];
		
		
		
	FinPara
	
	
	Escribir promedio(array, lenght);
	
FinAlgoritmo


