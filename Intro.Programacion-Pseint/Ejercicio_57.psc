Algoritmo sin_titulo
	//Dada un matriz cuadrada A (array de 2 dimensiones con el mismo número de columnas que de
//filas, por ejemplo: 3) construir un algoritmo que permita determinar si dicha matriz es simétrica. Se
	//considera que una matriz es simétrica si A[i,j] = A[j,i] para todos los elementos i,j de la matriz. 
	
	definir matriz, fila, columna, size Como Entero;
	Definir es_simetrica Como Logico;
	size = 3;
	
	dimension matriz[size, size];
	
	matriz[0,0] = 1;
	matriz[0,1] = 2;
	matriz[0,2] = 3;
	
	matriz[1,0] = 2;
	matriz[1,1] = 1;
	matriz[1,2] = 2;
	
	matriz[2,0] = 3;
	matriz[2,1] = 2;
	matriz[2,2] = 1;
	
	//Imprimimos la matriz
	
	Para fila = 0 hasta size - 1 con paso 1 Hacer
		Para columna = 0 hasta size - 1 Hacer
			
			Escribir matriz[fila, columna], " ", sinsaltar;
		FinPara
		Escribir " ";
	FinPara
	
	es_simetrica = verdadero;
	
	Para fila = 0 hasta size - 1 con paso 1 Hacer
		Para columna = 0 hasta size - 1 Hacer
			
			Si matriz[fila, columna] <> matriz[columna, fila]
				
				es_simetrica = Falso;
				
			FinSi
		FinPara
	FinPara
	
	Si es_simetrica entonces
	
		Escribir "La matriz es simétrica";
	SiNo
		Escribir "La mtriz no es simétrica";
	FinSi
	
FinAlgoritmo
