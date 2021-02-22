Algoritmo sin_titulo
	Definir N, contador, factorial Como Entero;
	
	Escribir "Introduzca un número";
	Leer N;
	factorial = 1;
	
	Para contador = N Hasta 1 Con Paso -1 Hacer
		Escribir contador;
		
		factorial = factorial * contador;
		
		Escribir factorial;
	Fin Para
	
	Escribir "El factorial de ", N, " es ", factorial;
	
FinAlgoritmo
