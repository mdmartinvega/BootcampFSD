Algoritmo sin_titulo
	//Crear un array de números donde le indicaremos el tamaño por teclado. 
	//Rellenará cada elemento con números aleatorios entre 0 y 9. 
	//Posteriormente, mostrará por pantalla el valor de cada posición junto con su índice y f
	//inalmente, la suma de todos los valores.
	
	Definir tamano, my_array, suma, indice Como Entero;
	
	Escribir "Introduzca el tamaño del array";
	leer tamano;
	
	Dimension my_array[tamano];
	
	//Mete los números aleatorios en los índices indicados por el usuario.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array[indice] = Aleatorio(0,9);
		
	Fin Para
	
	//Imprime los números que se han asignado.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir "My array con índice ", indice, " contiene el valor de ", my_array[indice];
		
	Fin Para
	
	//Suma
	suma = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Suma = suma + my_array[indice];
		
	Fin Para
	
	Escribir "La suma de los elementos generados es " suma;
FinAlgoritmo
