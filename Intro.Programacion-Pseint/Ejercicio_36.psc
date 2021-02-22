Algoritmo sin_titulo
	//Crear dos arrays de números enteros de longitud 10 rellenos con números aleatorios del 1 al 20.
	//Imprimir índice y el resultado de la multiplicación de ambos elementos de los arrays del índice de
	//cada iteración. Cuidado con los elementos del array sin inicializar.
	
	Definir my_array_uno, my_array_dos, tamano, indice, multiplicacion Como Entero;
	
	tamano = 10;
	
	Dimension my_array_uno[tamano], my_array_dos[tamano];
	
	multiplicacion = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array_uno[indice] = Aleatorio(1,20);
		my_array_dos[indice] = Aleatorio(1,20);
		
		multiplicacion = my_array_uno[indice] * my_array_dos[indice];
		
		Escribir "La multiplicacion de los índices ", my_array_uno[indice], " y ", my_array_dos[indice], " es ", multiplicacion;
		
	Fin Para
	
	
FinAlgoritmo
