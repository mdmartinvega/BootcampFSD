Algoritmo sin_titulo
	definir N, contador, numero_inicial, suma Como Entero;
	Escribir "Escribir la cantidad de números pares a revisar";
	Leer N;
	numero_inicial = N;
	contador = 0;
	suma = 0;
	// Si número inicial es impar, lo convierto al siguiente par.
	Si numero_inicial mod 2 <> 0 Entonces
		numero_inicial = numero_inicial + 1;
		
	FinSi
	
	Escribir "La suma de " Sin Saltar;
	
	Mientras contador < N Hacer
		//Escribimos los números en la misma línea
		escribir numero_inicial, " " Sin Saltar;
		
		suma = numero_inicial + suma;
		
		//Como ya el inicial es par ahora saltamos de 2 en 2 N veces
		numero_inicial = numero_inicial + 2;
		contador = contador + 1;
		
	Fin Mientras
	
	Escribir "es ", suma;
 
	
	
FinAlgoritmo
