Algoritmo sin_titulo
	definir temperatura, num_sonidos Como real;
	Escribir "Introduzca el n�mero de sonidos";
	leer num_sonidos;
	
	Si num_sonidos <= 0 Entonces
		Escribir "Error en el n�mero de sonidos";
			
	SiNo
		temperatura = num_sonidos / 4 + 40;
		Escribir "La temperatura es " temperatura;
	   Fin Si
	
FinAlgoritmo
