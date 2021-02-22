Algoritmo sin_titulo
	
	Definir precio_bocadillo, precio_refresco, precio_cerveza, precio_pan, suma_total Como Real;
	definir bocadillo, refresco, cerveza, pan Como Entero;
	
	precio_bocadillo = 1.5;
	precio_refresco = 1.05;
	precio_cerveza = 0.75;
	precio_pan = 2;
	
	Escribir "Introducir número de bocadillos";
	Leer bocadillo;
	Escribir "introducir número de refrescos";
	Leer refresco;
	Escribir "Introducir número de cervezas";
	Leer cerveza;
	Escribir "Introducir número de panes";
	Leer pan;
	
	suma_total = (precio_bocadillo * bocadillo) + (precio_refresco * refresco) + (precio_cerveza * cerveza) + (precio_pan * pan);
	
	Escribir "La suma total de productos es: " suma_total, " euros ";
	
	
	
	
FinAlgoritmo
