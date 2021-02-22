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
	
	//Imprime el array completo.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir my_array[indice], " "; sin saltar;
		
	Fin Para
	Escribir "";
	
FinAlgoritmo
