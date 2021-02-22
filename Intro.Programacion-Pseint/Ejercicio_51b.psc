Algoritmo sin_titulo
	//Comprobar si un número N positivo es primo. Se dice que un número entero positivo N es un
	//número primo si los únicos enteros positivos que lo dividen son exactamente 1 y N (él mismo). 
	
	Definir N, number_actual Como Entero;
	definir es_primo Como Logico;
	
	Escribir "Introduce un número";
	Leer N;
	
	es_primo = Verdadero;
	
	Para number_actual = 2 hasta N - 1 con paso 1 Hacer
		
		Si N mod number_actual == 0 Entonces
			
			es_primo = falso;
			
		FinSi
		
	FinPara
	
	Si es_primo Entonces
		
		Escribir "El número ", N, " es primo";
		
	SiNo
		Escribir "El número ", N, " es compuesto";
		
	FinSi
	
	
FinAlgoritmo
