Algoritmo sin_titulo
	
	definir num, suma, contador Como real;
	
	Leer num;
	suma = 0;
	contador = 0;
	
	Repetir
		escribir "Introduce un número";
		leer num;
		si num <> -1 entonces
			suma = num + suma;
			contador = contador + 1;
		FinSi

	Mientras Que num <> -1;
	
	Escribir "La media es ", suma / contador;
	
FinAlgoritmo
