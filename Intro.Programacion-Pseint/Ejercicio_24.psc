Algoritmo sin_titulo
	
	Definir nota_practica, nota_problemas, nota_teorica, nota_final Como Real;
	Definir nombre_alumno Como Caracter;
	
	Repetir
		
		Escribir "Introduzca el nombre del alumno";
		Leer nombre_alumno;
		
		si nombre_alumno <> "" entonces
			
			Escribir "Introduzca nota práctica";
			leer nota_practica;
			Escribir "Introduzca nota de problemas";
			leer nota_problemas;
			Escribir "Introduzca nota teoría";
			Leer nota_teorica;
			
			Si nota_practica >= 0 y nota_practica <= 10 y nota_problemas >= 0 y nota_problemas <= 10 y nota_teorica >= 0 y nota_teorica <= 10 Entonces
				nota_final = (nota_practica * 0.10) + (nota_problemas * 0.50) + (nota_teorica * 0.40);
				Escribir "La nota final de " nombre_alumno " es de " nota_final;			
			sino 	
				escribir "Nota errónea";
			FinSi	
		FinSi
		
	
	Mientras Que  nombre_alumno <> "";
	
	Escribir "Fin";
	
	
	
FinAlgoritmo
