Algoritmo sin_titulo
	//Desarrollar una calculadora de factoriales para n�meros introducidos por teclado.
	//El factorial de un n�mero N es la multiplicaci�n de todos los n�meros desde 1 hasta N. Es decir,
//para N = 5, el factorial de 5 ser�a: 5! = 5*4*3*2*1 = 120
	
	definir input, factorial Como Entero;
	
	Escribir "Introduce un n�mero";
	Leer factorial;
	
	Escribir "El factorial de ", factorial; Sin Saltar
	
	Para input = factorial - 1 Hasta 1 Con Paso -1 Hacer
		
		factorial = factorial * input;
		
		
	Fin Para
	
	
	Escribir " es ", factorial;
	
FinAlgoritmo
