Algoritmo sin_titulo
	definir base, altura, s, p Como Real;
	Escribir "Escribe la base";
	Repetir
		leer base;
		Si base <= 0 entonces
			escribir "la base debe ser mayor que 0, vuelva a introducirla";
		finsi
	hasta que base > 0;
	
	escribir "Escribe la altura";
	Repetir
		leer altura;
		si altura <= 0 Entonces
			escribir "La altura debe ser mayor que 0, vuelva a introducirla";
		FinSi
	Hasta Que altura > 0;
	
	s = base * altura;
	p = 2 * (base + altura);
	
	Escribir "La superficie es " s " y" " el perímetro es " p;
	
FinAlgoritmo

