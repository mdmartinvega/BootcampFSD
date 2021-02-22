Algoritmo sin_titulo
	//Dado el sueldo de un trabajador, dibuja un diagrama de flujo que aplique un incremento de 
	//sueldo del 15% si el sueldo es inferior a 1000€. Imprimir el nuevo sueldo.
	Definir sueldo Como entero;
	Leer sueldo;
	
	Si sueldo ≥ 1000 Entonces
		escribir "No aplica incremento";
	sino 
		escribir "El sueldo final es de ", sueldo + 1.15;
	FinSi
FinAlgoritmo
