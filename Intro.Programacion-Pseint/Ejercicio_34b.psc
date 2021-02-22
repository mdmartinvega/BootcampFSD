Algoritmo sin_titulo
	//b)Aumentar el límite superior a 100 y añadir una ayuda al usuario: escribir si el número es 
	//mayor o menor que la lectura
	
	definir input, num_aleatorio Como Entero;
	
	num_aleatorio = Aleatorio(1,100);
	
	Escribir "Introduzca un número entre 1 y 100";
	
	Repetir
		
		Leer input;
		
		Si input >= 1 y input <= 100 entonces
		
			Si input > num_aleatorio Entonces
			
				Escribir "Introduzca un número más bajo";
			sino 
				si input < num_aleatorio Entonces
					
					Escribir "Introduzca un número más alto";
					
				FinSi
			FinSi
			
		sino 
			
			Escribir "Número erróneo";
			
		FinSi
		
		
	Mientras Que input != num_aleatorio;
	
	Limpiar Pantalla;
	
	Escribir "El número ", num_aleatorio, " es correcto!!!!!";
	
FinAlgoritmo