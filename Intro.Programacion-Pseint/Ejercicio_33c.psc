Algoritmo Arrays
	
	Definir my_array, tamano, indice Como Entero;
	tamano = 10;
	Dimension my_array[tamano];
	
	//Aqu� nos va a guardar el primer n�mero que introduzcamos en la �ltima posici�n.
	
	Para indice = tamano - 1 Hasta 0 Con Paso -1 Hacer
		
		Escribir "Introduzca un n�mero";
		Leer my_array[indice];
		
		
	Fin Para
	
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir "My Array ", indice, " contiene el valor " my_array[indice], "";
		
	Fin Para
	Escribir "";
	
	
FinAlgoritmo


