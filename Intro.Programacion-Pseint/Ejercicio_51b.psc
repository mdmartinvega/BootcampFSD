Algoritmo sin_titulo
	//Comprobar si un n�mero N positivo es primo. Se dice que un n�mero entero positivo N es un
	//n�mero primo si los �nicos enteros positivos que lo dividen son exactamente 1 y N (�l mismo). 
	
	Definir N, number_actual Como Entero;
	definir es_primo Como Logico;
	
	Escribir "Introduce un n�mero";
	Leer N;
	
	es_primo = Verdadero;
	
	Para number_actual = 2 hasta N - 1 con paso 1 Hacer
		
		Si N mod number_actual == 0 Entonces
			
			es_primo = falso;
			
		FinSi
		
	FinPara
	
	Si es_primo Entonces
		
		Escribir "El n�mero ", N, " es primo";
		
	SiNo
		Escribir "El n�mero ", N, " es compuesto";
		
	FinSi
	
	
FinAlgoritmo
