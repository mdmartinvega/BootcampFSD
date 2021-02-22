Algoritmo sin_titulo
	definir temperatura, num_sonidos Como real;
	Escribir "Introduzca el número de sonidos";
	leer num_sonidos;
	
	Si num_sonidos <= 0 Entonces
		Escribir "Error en el número de sonidos";
			
	SiNo
		temperatura = num_sonidos / 4 + 40;
		Escribir "La temperatura es " temperatura;
	   Fin Si
	
FinAlgoritmo
