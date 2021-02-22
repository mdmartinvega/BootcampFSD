Algoritmo sin_titulo
	definir sueldo, categoria Como Entero;
	Escribir "Introducte tu sueldo";
	Leer sueldo;
	Escribir "Introduce tu categoria";
	Leer categoria;
	Segun categoria Hacer
		1:
			escribir "Categoria ", categoria, "Tu nuevo sueldo es ", sueldo * 1.15;
		2:
			escribir "Categoria ", categoria, "Tu nuevo sueldo es ", sueldo * 1.10;
		3:
			escribir "Categoria ", categoria, "Tu nuevo sueldo es ", sueldo * 1.06;
		4:
			escribir "Categoria ", categoria, "Tu nuevo sueldo es ", sueldo * 1.03;
		De Otro Modo:
			Escribir "Categoria no valida";
	Fin Segun
FinAlgoritmo
