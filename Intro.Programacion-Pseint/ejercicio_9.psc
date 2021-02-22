Algoritmo sin_titulo
	//Construir un diagrama de flujo que dado como datos 5 calificaciones de un alumno imprima el
	//promedio y la palabra aprobado si el alumno tiene un promedio mayor o igual que 5, y la palabra
	//no aprobado en caso contrario. 
	Definir nota1, nota2, nota3, nota4, nota5, notafinal Como real;
	
	Leer nota1, nota2, nota3, nota4, nota5;
	notafinal = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;
	Si notafinal >= 5 Entonces
		escribir "Aprobado con ", notafinal;
	sino 
		si notafinal < 5 Entonces
			escribir "Suspenso con ", notafinal;
		FinSi
	FinSi
FinAlgoritmo
