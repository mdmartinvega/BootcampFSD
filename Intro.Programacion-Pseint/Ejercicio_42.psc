Algoritmo sin_titulo
	
	Definir cant_segundos, cant_minutos, cant_horas Como Entero;
	
	cant_segundos = 0;
	cant_minutos = 0;
	cant_horas = 0;
	
	Mientras Verdadero Hacer
		
		Limpiar Pantalla;
		
		Si cant_segundos > 9 entonces
			Escribir " : ", cant_segundos;
		sino 
			Escribir " :0 ", cant_segundos;
		FinSi
		Escribir cant_horas, " : ", cant_minutos, " : ";
		Esperar 1 segundos;
		cant_segundos = cant_segundos + 1;
		
		Si cant_segundos > 59 Entonces
			
			cant_segundos = 0;
			cant_minutos = cant_minutos + 1;
			
			Si cant_minutos > 59 Entonces
				cant_minutos = 0;
				cant_horas = cant_horas + 1;
				
				Si cant_horas > 23 Entonces
					cant_horas = 0;
				FinSi
			FinSi
			
		FinSi
		
	FinMientras
	
FinAlgoritmo
