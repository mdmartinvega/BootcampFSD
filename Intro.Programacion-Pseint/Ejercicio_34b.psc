Algoritmo sin_titulo
	//b)Aumentar el l�mite superior a 100 y a�adir una ayuda al usuario: escribir si el n�mero es 
	//mayor o menor que la lectura
	
	definir input, num_aleatorio Como Entero;
	
	num_aleatorio = Aleatorio(1,100);
	
	Escribir "Introduzca un n�mero entre 1 y 100";
	
	Repetir
		
		Leer input;
		
		Si input >= 1 y input <= 100 entonces
		
			Si input > num_aleatorio Entonces
			
				Escribir "Introduzca un n�mero m�s bajo";
			sino 
				si input < num_aleatorio Entonces
					
					Escribir "Introduzca un n�mero m�s alto";
					
				FinSi
			FinSi
			
		sino 
			
			Escribir "N�mero err�neo";
			
		FinSi
		
		
	Mientras Que input != num_aleatorio;
	
	Limpiar Pantalla;
	
	Escribir "El n�mero ", num_aleatorio, " es correcto!!!!!";
	
FinAlgoritmo