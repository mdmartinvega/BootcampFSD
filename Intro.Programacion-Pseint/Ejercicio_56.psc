Algoritmo sin_titulo
	//matriz con notas de los alumnos en funcion del número de cursos filas y del número de alumnos por curso. 
	//Alumnos 5 para cada curso máximo para cada curso de 3.
	
	Definir notas, curso, alumnos, size_curso, size, size_alumnos Como Entero;
	
	size_curso = 3;
	size_alumnos = 5;
	
	Dimension notas[size_curso, size_alumnos];
	
	Para curso = 0 hasta size_curso - 1 con paso 1 Hacer
		
		Escribir "Curso ", curso, ": " Sin Saltar; 
		
		Para alumnos = 0 hasta size_alumnos - 1 con paso 1 Hacer
			
			Escribir "Introduce la nota del alumno ", alumnos, " del curso ", curso; 
			
			Leer notas[curso, alumnos];			
		FinPara
	FinPara
	
	
	Para curso = 0 hasta size_curso - 1 con paso 1 Hacer
		
		Escribir "Curso ", curso, ": " Sin Saltar; 
		
		Para alumnos = 0 hasta size_alumnos - 1 con paso 1 Hacer
			
			Escribir notas[curso, alumnos], " ", Sin Saltar;
			
		FinPara
		Escribir "";
	FinPara
	
	
FinAlgoritmo
