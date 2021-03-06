Funcion resultado = existe (array, tamano, N)
	Definir resultado como Logico;
	Definir indice Como Entero;
	
	resultado = falso;
	
	para indice = 0 hasta tamano - 1 con paso 1 Hacer
		
		Si array[indice] == N entonces 
			resultado = verdadero;	
		FinSi
	
	FinPara
	
FinFuncion

Algoritmo sin_titulo
	//Generar un array de 20 elementos con n�meros aleatorios no repetidos entre s�. Em cada blucle
	//comprobamos si el nuevo ya existe anteriormente. En el momento que sean repetido hay que pararlo y 
	//generar un n�mero nuevo. Eso implica otro bucle m�s. Quedan 3 bucles. Bucle externo busca. Segundo bucle crea 
	//n�meros aleatorios. El tercer bucle busca si est� repetido o no. En este �ltimo ponemos el semaforo.
	
	Definir numbers, index, size, numbers_no_repeat, index_dos como entero;
	Definir repeat Como Logico;
	
	size = 20;
	
	Dimension numbers_no_repeat[size];
	
	Para index = 0 Hasta size - 1 Con Paso 1 Hacer
		
		Repetir
			numbers = Aleatorio(1,20);
		Mientras Que existe(numbers_no_repeat, index, numbers);
		
		numbers_no_repeat[index] = numbers;
		Escribir numbers_no_repeat[index], " " Sin Saltar;
		
	Fin Para
	Escribir "";
	
FinAlgoritmo

