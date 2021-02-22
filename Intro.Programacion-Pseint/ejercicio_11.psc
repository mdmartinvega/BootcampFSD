Algoritmo sin_titulo
	Definir precio_compra Como Entero;
	Leer precio_compra;
	Si precio_compra < 500 Entonces
		Escribir "No hay descuento";
	sino 
		si precio_compra <= 1000 Entonces
			Escribir "El precio final es " precio_compra * 0.95;
		sino 
			si precio_compra <= 7000 Entonces
				Escribir "El precio final es " precio_compra * 0.9;
			
			sino 
				si precio_compra <= 15000 Entonces
					escribir "El precio final es " precio_compra * 0.8;
				
			sino 
				escribir "El precio final es " precio_compra * 0.75;
			
			FinSi
		FinSi
	FinSi
FinSi
	
FinAlgoritmo
