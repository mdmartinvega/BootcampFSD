Algoritmo sin_titulo
	//Generar una matriz de 4 filas y 5 columnas con números aleatorios entre 1 y 100. Imprimirla en
	//forma de matriz o tabla, con sus filas y columnas.
	
	
	Definir filas, columnas, matriz, lenght_filas, lenght_columnas Como Entero;
	
	lenght_filas = 4;
	lenght_columnas = 5;
	
	Dimension matriz[lenght_filas, lenght_columnas];
	
	Para filas = 0 hasta lenght_filas - 1 con paso 1 Hacer
		
		para columnas = 0 hasta lenght_columnas - 1 con paso 1 hacer
			
			matriz[filas,columnas] = aleatorio(1, 100);
			
			Escribir matriz[filas,columnas], "  ", sinsaltar;
			
		FinPara
		
		Escribir " ";
	FinPara
	
	
	
	
	
FinAlgoritmo
