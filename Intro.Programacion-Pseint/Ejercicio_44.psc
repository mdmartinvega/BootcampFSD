Algoritmo sin_titulo
	
	
	definir number_1, number_2, option Como real;
	definir check Como Logico;
	
	
	Repetir
		
		Escribir "Seleccione el n�mero de la op�raci�n deseada.";
		Escribir "1: Sumar"; 
		Escribir "2: Restar"; 
		Escribir "3: Multiplicar"; 
		Escribir "4: Dividir";
		Escribir "5: Salir del programa";
		
		
		Leer option;
		
		Si option > 1 y option <5 Entonces
			
			Escribir "Introduce el primer numero";
			leer number_1;
			Escribir "Introduce el segundo numero";
			Leer number_2;
			
		FinSi
		
		Limpiar Pantalla;
		
		Segun option Hacer
			
			1:
				Escribir "La suma de los n�meros ", number_1, " m�s ", number_2, " es ", number_1 + number_2;
			
			2:
				Escribir "La resta de los n�meros ", number_1, " menos ", number_2, " es ", number_1 - number_2;
			
			3:
				Escribir "La multiplicaci�n de los n�meros ", number_1, " por ", number_2, " es ", number_1 * number_2;
			
			4:
				Escribir "La divisi�n de los n�meros ", number_1, " entre ", number_2, " es ", number_1 / number_2;
			
			5:
				Escribir "Ha elegido finalizar el programa";
				
				
			De Otro Modo:
				
				Limpiar Pantalla;
				Escribir "La opci�n tecleada es incorrecta";
				
		Fin Segun
		
	mientras Que option <> 5;

	
FinAlgoritmo
	
	

