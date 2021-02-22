Algoritmo sin_titulo
	//a)Generar un número aleatorio (del 1 al 10) que el usuario debe adivinar.
	//b)Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es 
	//mayor o menor que la lectura
	
	definir input, num_aleatorio Como Entero;
	
	num_aleatorio = Aleatorio(1,10);
	
	
	Repetir
		
		Escribir "Introduzca un número entre 1 y 10";
		
		Leer input;
		
	Mientras Que input != num_aleatorio;
	
	Escribir "Número correcto!!!!!";
	
	
FinAlgoritmo
