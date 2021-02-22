Algoritmo sin_titulo
	//Dado dos arrays del mismo tamaño, determinar, elemento a elemento, si ambos son iguales. Con
	//que un elemento sea diferente, se considerarán los arrays como diferentes. Escribir al final del
	//algoritmo el resultado.
	
	Definir array_uno, array_dos, index, lenght, input Como Entero;
	Definir check Como Logico;
	
	Escribir "Escribr la longitud de los arrays";
	Leer lenght;
	
	Dimension array_uno[lenght], array_dos[lenght];
	
	check = Verdadero;
	
	Para index = 0 hasta lenght - 1
		
		escribir "Escribe el valor ", index, " del primer array";
		leer input;
		array_uno[index] = input;
		Escribir "Escribe el valor ", index, " del segundo array";
		leer input;
		array_dos[index] = input;
		
		Si array_uno[index] <> array_dos[index] Entonces
			check = falso;
		FinSi
		
	FinPara
	
	Si check Entonces
		Escribir "Los arrays son iguales";
	sino 
		Escribir "Los arrays son diferentes"	;
	FinSi
	
	
	
FinAlgoritmo
