Algoritmo sin_titulo
	//Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un
	//número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo). 
	
	Definir N, number_actual, contador, x Como Entero;
	
	Escribir "Introduce un número";
	Leer N;
	
	contador = 0;
	
	Para number_actual = 1 hasta N con paso 1 Hacer
		
		Si N mod number_actual == 0 Entonces
			
			contador = contador + 1;
		FinSi

	FinPara
	
	Si contador == 2 Entonces
		
		Escribir "El número ", N, " es primo";
		
	SiNo
		Si contador > 2 Entonces
			
			Escribir "El número ", N, " es compuesto";
			
		SiNo
			
			Escribir "El número 1 no es ni primo ni compuesto";
			
		FinSi
	FinSi
	
	
FinAlgoritmo
