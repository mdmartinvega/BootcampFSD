Algoritmo sin_titulo
	definir valor_inicial, N, contador, suma Como Entero;
	leer valor_inicial;
	Leer N;
	contador = valor_inicial;
	suma = 0;
	Mientras contador <= N Hacer
		escribir contador;
		suma = contador + suma;
		contador = contador + 1;
		
	Fin Mientras
	
	Escribir "La suma es: " suma;
FinAlgoritmo
