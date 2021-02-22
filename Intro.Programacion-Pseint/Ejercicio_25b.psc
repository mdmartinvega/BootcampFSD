Algoritmo Ejercicio_for_anidado
	//Elegir tamano d eun cuadrado
	
	definir columnas, filas, lado Como Entero;
	
	Leer lado;
	
	Para filas = 1 Hasta lado Con Paso 1 hacer
		//Encargado de dibujar filas
		
		Para columnas = 1 Hasta lado Con Paso 1 Hacer
			//Encargado de dibujar columnas
			
			si filas == columnas o (lado - filas + 1) == columnas Entonces
				
				Escribir "* " sin saltar;
			SiNo
				
				Escribir "  "; sin saltar;
				
			FinSi
			
			
			
		FinPara
		
		escribir "";
		
	Fin Para
	
	
FinAlgoritmo

