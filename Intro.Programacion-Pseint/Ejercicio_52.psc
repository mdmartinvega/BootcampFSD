Algoritmo sin_titulo
	//Rellenar un array con 10 n�meros aleatorios entre 1 y 15. Posteriormente, buscar un n�mero
	//introducido por teclado y nos debe decir si est� incluido en el array y el �ndice de su primera
	//coincidencia. 
	
	Definir array, lenght, index, number Como Entero;
	
	
	Lenght = 10;
	Dimension array[lenght];
	
	Para index = 0 hasta lenght - 1 con paso 1 Hacer
		
		array[index] = Aleatorio(1,15);
		Escribir array[index];
		
	FinPara
	
	Escribir "Introduce un n�mero";
	Leer number;
	
	index = 0;
	
	Mientras index < lenght y array[index] <> number Hacer
		index = index + 1;
	FinMientras
	
	si index < lenght Entonces
		Escribir "La primera coincidencia de ", number, " es en el �ndice ", index;
	SiNo
		Escribir number, "No est� presente en el array";
	FinSi
	
	
FinAlgoritmo
