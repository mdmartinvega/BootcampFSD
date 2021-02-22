Algoritmo Arrays
	
	//Asignar valor de cada índice a cada índice, por ejemplo al índice 1 le asignam,os el valor de 1.
	
	Definir my_array, tamano, indice Como Entero;
	tamano = 5;
	Dimension my_array[tamano];
	
	my_array[0] = 50;
	my_array[1] = 35;
	my_array[2] = 19;
	my_array[3] = 78;
	my_array[4] = 9;
	
	//Aquí modificamos todos los valores a 5
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array[indice] = indice;
		
	Fin Para
	
	//Aquí imprimimos, mejor por separado en caso de que tengamos muchas acciones mejor por separado.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir "Indice ", indice, ": " my_array[indice], "";
		
	Fin Para
	Escribir "";
	
	
FinAlgoritmo
