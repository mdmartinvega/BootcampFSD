Algoritmo sin_titulo
	definir base, altura, s, p Como Real;
	Escribir "Escribe la base";
	leer base;
	escribir "Escribe la altura";
	leer altura;	
	Mientras base < 0 o altura < 0 Hacer
		escribir "Datos incorrectos, introduzca de nuevo los datos";
		escribir "Introduzca base";
		leer base;
		escribir "Introduzca altura";
		leer altura;
	FinMientras
	s = base * altura;
	p = 2 * (base + altura);
	Escribir "La superficie es " s " y" " el perímetro es " p;
	
FinAlgoritmo
