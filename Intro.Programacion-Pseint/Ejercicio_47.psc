Algoritmo sin_titulo
	//Dados 5 elementos aleatorios del 1 al 100. Imprimir incial, ordenar ascendente y imprimir nuevo estado.
	
	Definir array, lenght, index, aux, index_dos Como Entero;
	
	lenght = 5;
	
	Dimension array[lenght];
	
	
	Para index = 0 Hasta lenght - 1 Con Paso 1 Hacer
		
		array[index] = aleatorio(1,100);
		
		Escribir array[index], " ", sin saltar;
		
	Fin Para
	
	Escribir " ";
	
	Para index_dos = 0 Hasta lenght - 2 con paso 1 hacer
	
		Para index = 0 hasta lenght -2 con paso 1 Hacer
			
			Si array[index] < array[index+1] entonces
				aux = array[index];
				array[index] = array[index+1];
				array[index+1] = aux;
		FinSi
			
		FinPara
	FinPara
	
	Para index = 0 Hasta lenght - 1 Con Paso 1 Hacer
		
		Escribir array[index], " ", sin saltar;
		
	Fin Para

FinAlgoritmo
