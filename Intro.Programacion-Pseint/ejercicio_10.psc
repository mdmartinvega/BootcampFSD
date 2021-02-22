Algoritmo sin_titulo
	//Construir un diagrama de flujo que dado la categoría y sueldo de un trabajador calcule el aumento
	//de sueldo correspondiente teniendo en cuenta la siguiente tabla. Imprimir la categoría del
	//trabajador y su nuevo sueldo.
	definir sueldo, categoria Como Entero;
	Escribir "Introducte tu sueldo";
	Leer sueldo;
	Escribir "Introduce tu categoria";
	Leer categoria;
	Si categoria == 1 Entonces
		escribir "Categoria ", categoria, "Tu nuevo sueldo es ", sueldo * 1.15;
	FinSi
	si categoria == 2 Entonces
		escribir "Categoria ", categoria, "Tu nuevo sueldo es ", sueldo * 1.1;
	FinSi
	si categoria == 3 Entonces
		escribir "Categoria ", categoria, "Tu nuevo sueldo es ", sueldo * 1.06;
	FinSi
	si categoria == 4 Entonces
		escribir "Categoria ", categoria, "Tu nuevo sueldo es ", sueldo * 1.03;
				
			
		
	FinSi
	
	
FinAlgoritmo
