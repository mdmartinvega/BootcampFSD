Algoritmo sin_titulo
	//Almacenar una lista de nombres en un array y luego ordenarlos alfabéticamente. Para la entrada de
	//datos se utiliza una estructura Mientras, sin saber a priori la cantidad de datos que se ingresarán.
	//Pista: Los datos alfanuméricos (strings) también se pueden comparar con los operadores < y >.
	
	Definir lista_nombres, aux, name Como Caracter;
	Definir lenght, index, index_dos, contador Como Entero;
	definir check Como Logico;
	
	
	lenght = 100;
	Dimension lista_nombres[lenght];
	
	contador = 0;
	
	
	Escribir "Introduce un nombre";
	Leer name;
	
	Si name <> "" Entonces
		lista_nombres[contador] = name;
		contador = contador + 1;
	FinSi
	
	
	Mientras name <> ""

		Escribir "Introduce un nombre";
		Leer name;
		
		lista_nombres[contador] = name;
		contador = contador + 1;
		
		
//		Para index = 0 hasta contador con paso 1 hacer
//			lista_nombres[index] = name;
//			
//		fin para
			
	FinMientras
	
	
	
	Para index_dos = 0 hasta contador - 2 con paso 1 hacer
		
		Para index = 0 hasta contador - 2 con paso 1 Hacer
			
			Si lista_nombres[index] > lista_nombres[index+1] Entonces
				
				aux = lista_nombres[index];
				lista_nombres[index] = lista_nombres[index+1];
				lista_nombres[index+1] = aux;
				
			FinSi
			
		FinPara
		
	FinPara
	
	
	Para index = 0 hasta contador - 1 con paso 1 Hacer
			
		Escribir lista_nombres[index];
			
	FinPara
	
	
	
FinAlgoritmo
