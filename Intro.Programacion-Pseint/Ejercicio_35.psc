Algoritmo sin_titulo
	//Crear un array de n�meros donde le indicaremos el tama�o por teclado. 
	//Rellenar� cada elemento con n�meros aleatorios entre 0 y 9. 
	//Posteriormente, mostrar� por pantalla el valor de cada posici�n junto con su �ndice y f
	//inalmente, la suma de todos los valores.
	
	Definir tamano, my_array, suma, indice Como Entero;
	
	Escribir "Introduzca el tama�o del array";
	leer tamano;
	
	Dimension my_array[tamano];
	
	//Mete los n�meros aleatorios en los �ndices indicados por el usuario.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		my_array[indice] = Aleatorio(0,9);
		
	Fin Para
	
	//Imprime los n�meros que se han asignado.
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Escribir "My array con �ndice ", indice, " contiene el valor de ", my_array[indice];
		
	Fin Para
	
	//Suma
	suma = 0;
	
	Para indice = 0 Hasta tamano - 1 Con Paso 1 Hacer
		
		Suma = suma + my_array[indice];
		
	Fin Para
	
	Escribir "La suma de los elementos generados es " suma;
FinAlgoritmo
