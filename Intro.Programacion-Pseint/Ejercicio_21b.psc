Algoritmo sin_titulo
	
	Definir N, contador, maximo, minimo, suma Como Entero;
	Definir media Como Real;
	
	Leer N;
	
	contador = 0;
	suma = 0;
	
	
	mientras n <> 0 Hacer
		
		si contador == 0 o n > maximo Entonces
			escribir "El numero maximo es " n;
			maximo = N;
		FinSi
		
		si contador == 0 o n < minimo entonces
			escribir "El número mínimo es " n;
			minimo = n;
		FinSi
		
		contador = contador + 1;
		suma = suma + n;
		
		Escribir "Introduzca numero";
		leer n;
		
	FinMientras
	
	si contador == 0 Entonces
		escribir "No has introducido ningún número";
	sino 
		media = suma / contador;
		escribir "La media es ", media, " el maximo es ", maximo, " El minimo es ", minimo;
	FinSi
	
FinAlgoritmo
