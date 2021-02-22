Algoritmo sin_titulo
	//Teniendo en cuenta que la clave es eureka, escribir un algoritmo que nos pida una clave. Solo
		//tenemos 3 intentos para acertar, si fallamos los 3 intentos nos mostrara un mensaje indicándonos
	//que hemos agotado esos 3 intentos. Si acertamos la clave, saldremos directamente del programa
	
	Definir clave Como Caracter;
	Definir contador, n Como Entero;
	
	contador = 0;
	n = 3;
	
	Repetir
		
		Escribir "Introduzca su contraseña. Dispone de " n " intentos.";
		Leer clave;
		
		contador = contador + 1;
		n = n - 1;
		
	Hasta Que clave == "eureka" o contador == 3;
	
	Si clave == "eureka" Entonces
		
		escribir "Contraseña correcta. Bienvenido!";
		
	sino 
		Escribir "Contraseña incorrecta. Usuario bloqueado";
		
	FinSi
	
FinAlgoritmo
	
