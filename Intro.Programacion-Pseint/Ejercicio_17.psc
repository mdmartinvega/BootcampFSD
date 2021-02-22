Algoritmo sin_titulo
	definir N, contador, suma Como Entero;
	Leer N;
	contador = 0;
	suma = 0;
	Mientras contador <= N Hacer
		escribir contador;
		suma = contador + suma;
		contador = contador + 1;
		
	Fin Mientras
	
	Escribir "La suma es: " suma;
FinAlgoritmo
