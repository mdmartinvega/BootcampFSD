Algoritmo sin_titulo
	//Hacer un algoritmo que cuente las veces que aparece una determinada letra en una frase que
	//introduciremos por teclado.
	
	Definir frase, letra Como Caracter;
	Definir index, contador Como Entero;
	
	Escribir "Escribe una frase";
	Leer frase;
	
	Escribir "Escribe la letra";
	Leer letra;
	

	contador = 0;
	
	Para index = 0 hasta Longitud(frase) - 1 con paso 1 Hacer
		
		
		Si Mayusculas(Subcadena(frase,index,index)) = Mayusculas(letra) Entonces
			
			contador = contador + 1;
			
		FinSi
		
		
	FinPara
	
	Escribir "En la frase -" frase, "- la letra -", letra, "- se repite ", contador, " veces ";
	
FinAlgoritmo
