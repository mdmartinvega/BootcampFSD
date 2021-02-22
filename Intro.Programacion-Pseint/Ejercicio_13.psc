Algoritmo sin_titulo
	definir base, altura, s, p Como Real;
	Escribir "Escribe la base";
	leer base;
	escribir "Escribe la altura";
	leer altura;	
	
	s = base * altura;
	p = 2 * (base + altura);
	
	Si base > 0 y altura > 0 entonces
	
	    Escribir "La superficie es" s , " y" , "el perímetro es " p ;
     sino 
	    escribir "Los datos deben ser mayores que 0";
	FinSi
FinAlgoritmo
