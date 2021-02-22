Algoritmo Arrays
	
	Definir my_array, tamano, indice Como Entero;
	tamano = 5;
	Dimension my_array[tamano];
	
	my_array[0] = 50;
	my_array[1] = 35;
	my_array[2] = 19;
	my_array[3] = 78;
	my_array[4] = 9;
	
	Escribir my_array[0], " ", my_array[1], "",  my_array[2], "", my_array[3], "", my_array[4], " ";
	
	//Aquí modificamos todos los valores a 5
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array[indice] = 5;
		
	Fin Para
	
	//Aquí imprimimos, mejor por separado en caso de que tengamos muchas acciones mejor por separado.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir my_array[indice], "";
		
	Fin Para
	Escribir "";
	
	
FinAlgoritmo

