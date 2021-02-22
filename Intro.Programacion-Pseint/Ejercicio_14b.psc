Algoritmo sin_titulo
	definir cantidad_galones, cantidad_litros, precio_por_litro, litros_por_galon, precio Como Real;
	litros_por_galon = 3.78541;
	precio_por_litro = 1.333;
	
	escribir "Introduce la cantidad de galones surtidos";
	leer cantidad_galones;
	
	cantidad_litros = cantidad_galones * litros_por_galon;
	precio = cantidad_litros * precio_por_litro;
	
	Escribir  "El precio final es ", precio " euros";
	
FinAlgoritmo
