Algoritmo sin_titulo
	//Leer tres n�meros que denoten una fecha (d�a, mes, a�o). Comprobar que es una fecha v�lida. Si
	//no es v�lida escribir un mensaje de error y volver a pedir los n�meros. Si es v�lida escribir la fecha
	//cambiando el n�mero del mes por su nombre. Ej. si se introduce 1 2 2006, se deber� imprimir 1 de
	//febrero de 2006. El a�o debe ser mayor que 0. (Recuerda la estructura si m�ltiple).
	
	definir dia, mes, a�o Como Entero;
	
	Repetir
		
		Escribir "Introduzca el d�a";
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
	
		Escribir "Introduzca el a�o";
		Leer a�o;
			
		Si a�o <= 0 Entonces
			escribir "Fecha incorrecta";
			
		sino
			si a�o mod 4 <> 0 Entonces
				segun mes hacer
					
					2: 
						si dia > 28 Entonces
							escribir "Fecha incorrecta";
						FinSi
					
				FinSegun
			
			FinSi
			
		FinSi
		
	Hasta Que a�o > 0;
	
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
	
	escribir " de ", a�o;
	
FinAlgoritmo
