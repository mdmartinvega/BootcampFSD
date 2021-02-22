Algoritmo sin_titulo
	
	Definir array, size, aux, index, index_dos Como Entero;
	
	size = 5;
	
	Dimension array[size];
	
	array[0] = 3;
	array[1] = 9;
	array[2] = 8;
	array[3] = 1;
	array[4] = 4;
	
	//Para verlo por consola. Antes de hacer nada.
	Para index = 0 hasta size - 1 Hacer
		escribir array[index], " " sin saltar;
	FinPara
	Escribir "";
	
	
	Para index_dos = 0 hasta size - 2 con paso 1 hacer
	//Envía el número mayor al final.
		Para index = 0 Hasta size - 2 con paso 1 hacer
		
			Si array[index] > array[index+1] Entonces
				aux = array[index];
				array[index] = array[index+1];
				array[index+1] = aux;
			FinSi
			
		FinPara
	FinPara
	
	
	
	//Para verlo por consola
	Para index = 0 hasta size - 1 Hacer
		escribir array[index], " " sin saltar;
	FinPara
	Escribir "";
	
FinAlgoritmo
