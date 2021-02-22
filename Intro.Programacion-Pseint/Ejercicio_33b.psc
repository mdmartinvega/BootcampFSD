Algoritmo Arrays
	
	//Ejercicio 33 pero imprimiendo los valores al revés, empezando por el 9
	
	Definir my_array, tamano, indice Como Entero;
	tamano = 10;
	Dimension my_array[tamano];
	
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir "Introduzca un número";
		Leer my_array[indice];
		
		
	Fin Para
	
	
	Para indice = tamano - 1 Hasta 0 Con Paso -1 Hacer
		
		Escribir "My Array ", indice, " contiene el valor " my_array[indice], "";
		
	Fin Para
	Escribir "";
	
	
	
FinAlgoritmo


