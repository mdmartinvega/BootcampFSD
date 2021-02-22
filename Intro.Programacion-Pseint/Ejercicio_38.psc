Algoritmo sin_titulo
	
	//Dado un array de números de 5 posiciones con los siguiente valores [1, 2, 3, 4, 5], guardar los
	//valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo
	//array deberá tener los valores [5,4,3,2,1].
	
	Definir my_array_uno, my_array_dos, contador, tamano, indice Como Entero;
	
	tamano = 5;
	
	
	Dimension my_array_uno[tamano], my_array_dos[tamano];
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array_uno[indice] = indice + 1;
		
		Escribir my_array_uno[indice], " "; sin saltar;
	
		
	Fin Para
	
	Escribir "";
	
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array_dos[indice] = my_array_uno[tamano - 1 - indice];
		
		Escribir my_array_dos[indice], " "; sin saltar;
		
	Fin Para

	Escribir "";
	
FinAlgoritmo
