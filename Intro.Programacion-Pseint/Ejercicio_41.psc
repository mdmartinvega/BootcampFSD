Algoritmo sin_titulo
	//Dado un array de N n�meros enteros que se generen aleatoriamente, hacer un algoritmo que:
	//a) Obtenga cu�ntos n�meros son mayores que 0.
	//b) Calcule el promedio de los n�meros positivos.
	//c) Obtenga el promedio de todos los n�meros.
	
	Definir array, lenght, index, contador, media como entero;
	Definir suma, suma_total Como Real;
	
	Escribir "Introduzca la longitud del array";
	Leer lenght;
	
	Dimension array[lenght];
	
	contador = 0;
	suma = 0;
	suma_total = 0;
	
	Para index = 0 Hasta lenght - 1 Con Paso 1 Hacer
		
		array[index] = Aleatorio(-50,50);
		
		Escribir array[index];
		
		
		Si array[index] > 0 Entonces
			
			contador = contador + 1;
			suma = suma + array[index];
			
		FinSi
		
		suma_total = suma_total + array[index];
		
		
	Fin Para
	
	Escribir "Los n�meros mayores que 0 son ", contador;
	
	Escribir "La media de los n�meros positivos es " suma / contador;
	
	Escribir "La media de todos los n�meros es " suma_total / lenght;

	
	
	
FinAlgoritmo
