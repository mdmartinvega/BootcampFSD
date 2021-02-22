Algoritmo sin_titulo

	definir num, suma, n, contador Como Entero;
	
	Leer num;
	suma = 0;
	contador = 0;
	Mientras num <> -1 Hacer
		suma = num + suma;
		escribir "Introduce un número";
		leer num;
		contador = contador + 1;
	Fin Mientras
	
	Escribir "La media es ", suma / contador;
	
FinAlgoritmo
