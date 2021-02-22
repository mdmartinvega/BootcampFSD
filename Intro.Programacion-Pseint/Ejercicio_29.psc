Algoritmo sin_titulo
	//Desarrollar una calculadora de factoriales para números introducidos por teclado.
	//El factorial de un número N es la multiplicación de todos los números desde 1 hasta N. Es decir,
//para N = 5, el factorial de 5 sería: 5! = 5*4*3*2*1 = 120
	
	definir input, factorial Como Entero;
	
	Escribir "Introduce un número";
	Leer factorial;
	
	Escribir "El factorial de ", factorial; Sin Saltar
	
	Para input = factorial - 1 Hasta 1 Con Paso -1 Hacer
		
		factorial = factorial * input;
		
		
	Fin Para
	
	
	Escribir " es ", factorial;
	
FinAlgoritmo
