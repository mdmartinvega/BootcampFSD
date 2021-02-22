Algoritmo sin_titulo
	definir galones, precio, litros, cobrar Como Real;
	precio = 1.333;
	Repetir
		escribir "Introduzca el número de galones";
		leer galones;
		litros = galones * 3.78541;
		cobrar = precio * litros;
	Hasta Que galones > 0
	
	escribir "El precio a cobrar es " cobrar " euros";
FinAlgoritmo
