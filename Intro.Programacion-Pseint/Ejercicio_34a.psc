Algoritmo sin_titulo
	//a)Generar un n�mero aleatorio (del 1 al 10) que el usuario debe adivinar.
	//b)Aumentar el l�mite superior a 100 y a�adir una ayuda al usuario: escribir si el n�mero es 
	//mayor o menor que la lectura
	
	definir input, num_aleatorio Como Entero;
	
	num_aleatorio = Aleatorio(1,10);
	
	
	Repetir
		
		Escribir "Introduzca un n�mero entre 1 y 10";
		
		Leer input;
		
	Mientras Que input != num_aleatorio;
	
	Escribir "N�mero correcto!!!!!";
	
	
FinAlgoritmo
