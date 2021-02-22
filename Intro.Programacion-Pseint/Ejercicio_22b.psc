Algoritmo sin_titulo
	//Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y
	//100.
	Definir input, contador_mul_x, contador_mul_y, maximo, num_2, num_3 Como Entero;
	
	maximo = 100;
	contador_mul_x = 0;
	contador_mul_y = 0;
	input = 0;
	num_2 = 2;
	num_3 = 3;

	Repetir
		
		input = input + 1;
				
		Si input mod num_2 == 0 Entonces
			
			escribir "Múltiplo de ", num_2,  input;
			contador_mul_x = contador_mul_x + 1;
			
			
		FinSi
		
		Si input mod num_3 == 0 Entonces
			
			escribir "Múltiplo de " num_3 , input;
			contador_mul_x = contador_mul_y + 1;
			
			
		FinSi
		
	Hasta que input = maximo;
	
	Escribir "Los números múltiplos de " num_2 " son ",   contador_mul_x;
	Escribir "Los números múltiplos de " num_3 " son ",   contador_mul_y;
	
FinAlgoritmo