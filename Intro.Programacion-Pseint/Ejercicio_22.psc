Algoritmo sin_titulo
	//Algoritmo que visualice la cuenta de los números que son múltiplos de 2 o de 3 que hay entre 1 y
	//100.
	Definir input, contador, suma Como Entero;
	
	contador = 0;
	input = 0;

	Mientras input <= 99 Hacer
		
		input = input + 1;
		
		
		Si input mod 2 == 0 o input mod 3 == 0 Entonces
			
			contador = contador + 1;
			suma = contador;
			escribir input;
			
		FinSi
		
	Fin Mientras
	
	Escribir "Los números múltiplos de 2 o 3 son ",   suma;
	
FinAlgoritmo
