Algoritmo Arrays
	
	//Sin modificar el para guardar el primer n�mero que introducimos en el �ltimo �ndice.
	
	Definir my_array, tamano, indice Como Entero;
	tamano = 10;
	Dimension my_array[tamano];
	
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir "Introduzca un n�mero";
		Leer my_array[tamano - 1 - indice];
		
		
	Fin Para
	
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir "My Array ", indice, " contiene el valor " my_array[indice], "";
		
	Fin Para
	Escribir "";
	
	
FinAlgoritmo
