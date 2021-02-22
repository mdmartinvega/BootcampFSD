Algoritmo Ejercicio_43
	Definir hora, minuto, ssegundos como entero;
	
	Para hora = 0 hasta 23 con paso 1 Hacer
		para minuto = 0 hasta 59 con paso 1 Hacer
			para ssegundos = 0 hasta 59 con paso 1 Hacer
				Limpiar Pantalla;
				
				Si hora < 10 Entonces
					Escribir "0",hora, ":"; sin saltar;
					
				sino 
					Escribir hora, ":"; sin saltar;
					
				FinSi
				Si minuto < 10 Entonces
					Escribir "0",minuto,":"; sin saltar;
				sino 
					Escribir minuto, ":"; sin saltar;
				FinSi
				
				Si ssegundos < 10 Entonces
					Escribir "0",ssegundos; sin saltar;
					
				sino 
					Escribir ssegundos; sin saltar;
				FinSi
				
				Esperar 100 miliSegundos;
			FinPara
		FinPara
	FinPara
	
	
	
FinAlgoritmo
