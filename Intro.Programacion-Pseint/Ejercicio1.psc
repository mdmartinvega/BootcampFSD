Algoritmo ejercicio_1
	//Dadas dos variables numéricas A y B, que el usuario debe teclear, 
	//se pide realizar un algoritmo que intercambie los valores de ambas 
	//variables y muestre cuánto valen al final cada una de ellas (recuerda 
	//la asignación).
	//Definimos todas las variables
	Definir variableA, variableB, variableC Como Entero;
	//Leemos las que necesitamos
	Leer variableA, variableB;
	//Guardamos A para no perder su valor
	variableC = variableA;
	//Sobreescribimos A con el valor de B
	variableA = variableB;
	//Recuperamos el valor de A para asignar a B
	variableB = variableC
	//Escribimos los resultados intercambiados
	escribir variableA, " ", variableB
	
FinAlgoritmo
