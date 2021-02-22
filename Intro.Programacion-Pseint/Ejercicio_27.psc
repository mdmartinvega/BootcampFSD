Algoritmo sin_titulo
	// 13 X 1 = 13
	// 13 X 2 = 26
	// ...
	// 13 X 10 = 130
	
	Definir input, contador Como Entero;
	
	Escribir "Introduce el número";
	Leer input;
	
	Para contador = 1 Hasta 10 Con Paso 1 Hacer
		Escribir input, " X ", contador, " = ", input * contador;
	Fin Para
	
FinAlgoritmo
