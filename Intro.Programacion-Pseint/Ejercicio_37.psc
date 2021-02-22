Algoritmo sin_titulo
	//Una calculadora de la letra de un DNI, pediremos el DNI por teclado y nos devolverá el DNI
	//completo con la letra. Para calcular la letra, cogeremos el resto de el DNI entre 23, que será un
		//número entre 0 y 22. Utilizar el resultado para buscar en un array de caracteres la posición que
	//corresponda a la letra. Esta es la tabla de caracteres:
	
	Definir array_DNI Como caracter;
	Definir num_DNI, indice, tamano Como entero;
	
	tamano = 23;
	
	Dimension array_DNI[tamano];
	
	array_DNI[0] = "T";
	array_DNI[1] = "R";
	array_DNI[2] = "W";
	array_DNI[3] = "A";
	array_DNI[4] = "G";
	array_DNI[5] = "M";
	array_DNI[6] = "Y";
	array_DNI[7] = "F";
	array_DNI[8] = "P";
	array_DNI[9] = "D";
	array_DNI[10] = "X";
	array_DNI[11] = "B";
	array_DNI[12] = "N";
	array_DNI[13] = "J";
	array_DNI[14] = "Z";
	array_DNI[15] = "S";
	array_DNI[16] = "Q";
	array_DNI[17] = "V";
	array_DNI[18] = "H";
	array_DNI[19] = "L";
	array_DNI[20] = "C";
	array_DNI[21] = "K";
	array_DNI[22] = "E";
	
	Escribir "Introduce tu número de DNI";
	
	Leer num_DNI;
	
	Escribir "Tu DNI completo es ", num_DNI, array_DNI[num_DNI mod tamano];
	
//	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
//		
//		Si num_DNI mod tamano == indice Entonces
//			
//			Escribir "Tu DNI completo es ", num_DNI, array_DNI[indice];
//			
//		FinSi
//		
//	Fin Para
	
FinAlgoritmo
