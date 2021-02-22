Algoritmo sin_titulo
	//Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media
	//de todos ellos. Piensa como debemos inicializar las variables.
	
	Definir input, maximo, minimo, suma, contador Como entero;
	Definir media Como Real;
	
	contador = 0;
	suma= 0;
	
	Repetir
		Escribir "Introduce un número.";
		Leer input;
		
		Si input <> 0 entonces
			
			Si contador == 0 Entonces
				maximo = input;
				minimo = input;
				
			SiNo
				
				si input > maximo Entonces
					maximo = input;
				FinSi
				
				si input < minimo Entonces
					minimo = input;
				FinSi
				
			FinSi
			
			contador = contador + 1;
			
			suma = suma + input;
			
		FinSi
		
		
		
	Hasta Que input == 0;
	
	Si input == 0 Entonces
		Escribir "No has introducido ningún número";
	sino 
		media = suma / contador;
		
		Escribir "El máximo de los números introducidos es ", maximo, ", el mínimo de los números introducidos es ", minimo, " y la media es " media, ".";
	
	FinSi
	
	
	
	
FinAlgoritmo
