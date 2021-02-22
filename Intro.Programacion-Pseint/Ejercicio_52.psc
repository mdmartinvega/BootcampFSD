Algoritmo sin_titulo
	//Rellenar un array con 10 números aleatorios entre 1 y 15. Posteriormente, buscar un número
	//introducido por teclado y nos debe decir si está incluido en el array y el índice de su primera
	//coincidencia. 
	
	Definir array, lenght, index, number Como Entero;
	
	
	Lenght = 10;
	Dimension array[lenght];
	
	Para index = 0 hasta lenght - 1 con paso 1 Hacer
		
		array[index] = Aleatorio(1,15);
		Escribir array[index];
		
	FinPara
	
	Escribir "Introduce un número";
	Leer number;
	
	index = 0;
	
	Mientras index < lenght y array[index] <> number Hacer
		index = index + 1;
	FinMientras
	
	si index < lenght Entonces
		Escribir "La primera coincidencia de ", number, " es en el índice ", index;
	SiNo
		Escribir number, "No está presente en el array";
	FinSi
	
	
FinAlgoritmo
