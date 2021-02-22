
Algoritmo sin_titulo
	//Se dispone de un array de 5 páginas, 4 filas y 10 columnas, que se refieren al centro, al curso y al
	//número de alumnos de un colegio respectivamente. Imprimir la nota media por curso y la nota
	//media máxima y su centro de pertenencia.
	
	definir colegio, cursos, alumnos, size_colegio, size_cursos, size_alumnos, max_colegio Como Entero;
	Definir array_notas, media, array_medias, max, index_medias, suma, size_medias Como Real;
	
	size_alumnos = 10;
	size_cursos = 4;
	size_colegio = 5;
	
	Dimension array_notas[size_colegio, size_cursos, size_alumnos], array_medias[size_medias];
	
	Para colegio = 0 hasta size_colegio - 1 con paso 1 hacer
		Escribir "Colegio ", colegio, ": ";
		
		
		Para cursos = 0 hasta size_cursos - 1 con paso 1 Hacer
			
			Escribir "Curso ", cursos, ": " sin saltar;
			
			suma = 0;
			
			para alumnos = 0 hasta size_alumnos - 1 con paso 1 hacer
				
				array_notas[colegio,cursos,alumnos] = Aleatorio(1,10) - (Aleatorio(0,10) / 10);
				
				suma = suma + array_notas[colegio,cursos,alumnos];
				
				Escribir array_notas[colegio,cursos,alumnos], "  ", sinsaltar;
				
			FinPara
			
			media = suma / size_alumnos;
			
			Escribir "La nota media del curso es: " media;
			
			Si (colegio == 0 y cursos == 0) o media > max Entonces
				max = media;
				max_colegio = colegio;
			FinSi
			
			Escribir " ";
			
		FinPara
		
		Escribir " ";
		
	FinPara
	
	Escribir "La media más alta es ", max, " perteneciente al colegio ", max_colegio;

	
	
	
FinAlgoritmo
