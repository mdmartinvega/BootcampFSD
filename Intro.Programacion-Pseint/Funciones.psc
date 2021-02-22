funcion saludar(nombre, apellido, dia)
	Escribir "Hola", nombre, " ", apellido;
	
	Si minusculas(dia) == "viernes" Entonces
		Escribir "Buen finde!!!!!";
		
	sino 
		Escribir "Ánimo!!";
	FinSi
	
FinFuncion

funcion variable_retorno = saludar_Desconocido ()
	definir variable_retorno Como Caracter;
	variable_retorno = "Hola desconocido";
FinFuncion


Algoritmo sin_titulo
	
	definir mi_nombre, mi_apellido, mi_dia Como Caracter;
	
	mi_nombre = "Loli";
	mi_apellido = "Vega";
	mi_dia = "viernes";
	
	saludar(mi_nombre, mi_apellido, mi_dia);
	Escribir "";
	
	saludar(" Loli" , "Vega" , "viernes");
	saludar(" Laura" , "Vega" , "jueves");
	saludar(" Loli" , "Martin" , "martes");
	
	Escribir saludar_Desconocido();
	
FinAlgoritmo
