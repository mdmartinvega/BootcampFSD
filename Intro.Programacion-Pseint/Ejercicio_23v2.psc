Algoritmo sin_titulo
	//Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si
	//no es válida escribir un mensaje de error y volver a pedir los números. Si es válida escribir la fecha
	//cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir 1 de
	//febrero de 2006. El año debe ser mayor que 0. (Recuerda la estructura si múltiple).
	
	definir dia, mes, año Como Entero;
	
	Repetir
		
		Escribir "Introduzca el día";
		Leer dia;
		
		Si dia < 0 o dia > 31 Entonces
			escribir "Fecha incorrecta.";
			
		FinSi
		
	Hasta Que dia > 0 y dia < 32;
	
	Escribir "Introduzca el mes";
	leer mes;
	
	
	Si mes >= 1 y mes <= 12
		
		Si mes == 2 Entonces
			
			si dia > 29
				escribir "Fecha incorrecta";
			FinSi
			
		FinSi
		
		si mes == 4 o mes == 6 o mes == 9 o mes == 11 Entonces
			
			si dia > 30
				escribir "Fecha incorrecta";
				leer mes;
			FinSi
			
		FinSi
		
	FinSi
	
	
	Si mes > 12
		Repetir
			escribir "Fecha incorrecta";
			leer mes;
		Hasta Que mes >= 1 y mes <= 12
	FinSi
	
	
	
	Repetir
	
		Escribir "Introduzca el año";
		Leer año;
			
		Si año <= 0 Entonces
			escribir "Fecha incorrecta";
			
		sino
			si año mod 4 <> 0 Entonces
				segun mes hacer
					
					2: 
						si dia > 28 Entonces
							escribir "Fecha incorrecta";
						FinSi
					
				FinSegun
			
			FinSi
			
		FinSi
		
	Hasta Que año > 0;
	
	Escribir "La fecha introducida es ", dia, " de " Sin Saltar;
	
	segun mes hacer
		1: 
			escribir "enero" Sin Saltar;
		2:
			escribir "febrero" Sin Saltar;
		3:
			escribir "marzo" Sin Saltar;
		4:
			escribir "abril" Sin Saltar;
		5:
			escribir "mayo" Sin Saltar;
		6:
			escribir "junio" Sin Saltar;
		7:
			escribir "julio" Sin Saltar;
		8:
			escribir "agosto" Sin Saltar;
		9:
			escribir "septiembre" Sin Saltar;
		10:
			escribir "octubre" Sin Saltar;
		11:
			escribir "noviembre" Sin Saltar;
		12:
			escribir "diciembre" Sin Saltar;
			
	FinSegun
	
	escribir " de ", año;
	
FinAlgoritmo
