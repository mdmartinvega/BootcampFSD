
Funcion print_array(array,lenght)
	
	definir index Como Entero;
	
	Para index = 0 hasta lenght - 1 con paso 1 Hacer
		
		escribir array[index], " ", sinsaltar;
		
	FinPara
	Escribir "";

FinFuncion

Algoritmo sin_titulo
	
	definir array, lenght, index, array2 Como Entero;
	
	lenght = 10;
	dimension array[lenght], array2[lenght];
	
	para index = 0 hasta lenght - 1 con paso 1 Hacer
		
		array[index] = Aleatorio(1,20);
		
	FinPara
	
	array2[0] = 3;
	array2[1] = 3;
	array2[2] = 3;
	
	
	print_array(array, lenght);
	print_array(array2, 3);
	
FinAlgoritmo
