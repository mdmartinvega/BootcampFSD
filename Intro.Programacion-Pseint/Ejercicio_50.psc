Algoritmo sin_titulo
	//Comprobar si un n�mero N positivo es primo. Se dice que un n�mero entero positivo N es un
	//n�mero primo si los �nicos enteros positivos que lo dividen son exactamente 1 y N (�l mismo). 
	
	Definir N, number_actual, contador, x Como Entero;
	
	Escribir "Introduce un n�mero";
	Leer N;
	
	contador = 0;
	
	Para number_actual = 1 hasta N con paso 1 Hacer
		
		Si N mod number_actual == 0 Entonces
			
			contador = contador + 1;
		FinSi

	FinPara
	
	Si contador == 2 Entonces
		
		Escribir "El n�mero ", N, " es primo";
		
	SiNo
		Si contador > 2 Entonces
			
			Escribir "El n�mero ", N, " es compuesto";
			
		SiNo
			
			Escribir "El n�mero 1 no es ni primo ni compuesto";
			
		FinSi
	FinSi
	
	
FinAlgoritmo
