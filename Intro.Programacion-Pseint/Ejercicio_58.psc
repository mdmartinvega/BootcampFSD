Algoritmo sin_titulo
	//Crear un array de 3 páginas, 4 filas y 5 columnas donde el primer elemento valga 1, el segundo 2,
	//el tercero 3 y así sucesivamente, e imprimirla.
	
	definir array, paginas, filas, columnas, size_paginas, size_filas, size_columnas, contador Como Entero;
	
	size_columnas = 5;
	size_filas = 4;
	size_paginas = 3;
	
	contador = 0;
	
	Dimension array[size_paginas, size_filas, size_columnas];
	
	Para paginas = 0 hasta size_paginas - 1 con paso 1 hacer
	
		Para filas = 0 hasta size_filas - 1 con paso 1 Hacer
			
			para columnas = 0 hasta size_columnas - 1 con paso 1 hacer
				
				array[paginas,filas,columnas] = contador;
				
				contador = contador + 1;
				
				Escribir array[paginas,filas,columnas], "  ", sinsaltar;
				
				
				
			FinPara
			
			Escribir " ";
			
		FinPara
		
		Escribir " ";
		
	FinPara
	
FinAlgoritmo
