Algoritmo sin_titulo
	// dulces, bebidas, conservas, diferentes. Costa de cada uno de ellos por los 12 meses del a�o anterior, aleatorios.
	//a) �En qu� mes se registr� el mayor coste de producci�n de dulces?
	//b) Promedio anual de los costes de producci�n de bebidas
	//c) �En qu� mes se registr� el mayor coste de producci�n en bebidas, y en qu� mes el menor
	//coste?
	//d) �Cu�l fue el que tuvo menor coste de producci�n en diciembre?
	
	Definir dulces, bebidas, conservas, lenght, mes, max_dulces, aux, mes_maximo, suma, max_bebidas, mes_minimo, min_bebidas Como Entero;
	
	lenght = 12;
	
	Dimension dulces[lenght], bebidas[lenght], conservas[lenght];
	
	Escribir "Depts. Dulces Bebidas Conservas";
	
	//Generamos los costes de los meses.
	Para mes = 0 hasta lenght - 1 con paso 1 Hacer
		dulces[mes] = aleatorio(500,900);
		bebidas[mes] =  aleatorio(500,900);
		conservas[mes] =  aleatorio(500,900);
		
		Escribir "Mes " mes + 1, "    ", dulces[mes], "    " bebidas[mes], "    " conservas[mes];
	FinPara
	
	
	//Apartado a. Mayor coste de producci�n de dulces.
	Para mes = 0 hasta lenght - 1 con paso 1 Hacer
		
		Si mes == 0 o dulces[mes] > max_dulces Entonces
			
			max_dulces = dulces[mes];
			
			mes_maximo = mes;
			
		FinSi
		
	FinPara
	
	Escribir "En el mes ", mes_maximo + 1, " se di� el m�ximo de costes de dulces con ", max_dulces;
	
	//Apartado b. Promedio anual de bebidas.
	suma = 0;
	
	Para mes = 0 hasta lenght - 1 con paso 1 Hacer
		
		suma = bebidas[mes] + suma;
		
	FinPara
	
	Escribir "La media del coste de bebidas anual es " suma / lenght;
	
	
	//Apartado c. c) �En qu� mes se registr� el mayor coste de producci�n en bebidas, 
	
	
	Para mes = 0 hasta lenght - 1 con paso 1 Hacer
		
		si mes == 0 o bebidas[mes] > max_bebidas Entonces
			
			max_bebidas = bebidas[mes];
			
			mes_maximo = mes;
			
		FinSi
	FinPara
	
	//y en qu� mes el menor coste?

	Para mes = 0 hasta lenght - 1 con paso 1 Hacer
		
		si mes == 0 o bebidas[mes] < min_bebidas Entonces
			
			min_bebidas = bebidas[mes];
			
			mes_minimo = mes;
			
		FinSi
	FinPara
	
	Escribir "En el mes ", mes_maximo + 1, " se di� el m�ximo de costes de bebidas con ", max_bebidas;
	Escribir "En el mes ", mes_minimo + 1, " se di� el m�nimo de costes  de bebidas con ", min_bebidas;
	
	
	//d) �Cu�l fue el que tuvo menor coste de producci�n en diciembre?
	
	
	Si dulces[11] < bebidas[11] y dulces[11] < conservas[11] Entonces
		
		Escribir "Dulces tuvo el menor coste de producci�n en diciembre";
		
	SiNo
		si bebidas[11] < conservas[11]
			
			Escribir "Bebidas tuvo el menor coste de producci�n en diciembre";
				
		sino 
			
			Escribir "Conservas tuvo el menor coste de producci�n en diciembre";
			
		FinSi
	FinSi
	
	
FinAlgoritmo
