Funcion resultado = primo(N)
	
	definir index Como Entero;
	definir resultado Como Logico;
	
	resultado = verdadero;
	
	Para index = 2 hasta N - 1 con paso 1 Hacer
		
		Si N mod index == 0 Entonces
			
			resultado = falso;
			//truco para que no haga tantas comprobaciones y aumente la rapidez.
			index = N - 1;
			
		FinSi
		
	FinPara
FinFuncion



Algoritmo sin_titulo
	//Dise�ar un algoritmo que lea el n�mero N e imprima y cuente todos los n�meros primos menores
	//que N. Funci�n que nos retorne un dato l�gico si es primo o no.
	
	definir N, contador, index como entero;
	
	Escribir "Introduce un n�mero";
	Leer N;
	
	contador = 0;
	
	Para index = 2 hasta N con paso 1 Hacer
		
		si primo(index) Entonces
			
			Escribir index, " es primo ";
			
			contador = contador + 1;
			
		FinSi
		
		
	FinPara
	
	Escribir "El n�mero de primos es de ", contador;

FinAlgoritmo
