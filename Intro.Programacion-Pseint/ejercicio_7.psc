Algoritmo sin_titulo
	//Construir un diagrama de flujo que dado el coste de un artículo vendido y la cantidad de dinero
	//entregado, calcule e imprima el cambio que se debe entregar al cliente.
	Definir precio_articulo, dinero_entregado Como Real
	Leer precio_articulo, dinero_entregado
	vuelta = dinero_entregado - precio_articulo
	Si precio_articulo == dinero_entregado entonces
		escribir "No se devuelve nada"
	sino 
		si precio_articulo < dinero_entregado Entonces
			escribir "La devolución es ", vuelta 
		SiNo
			escribir "Error en el dinero entregado"
		FinSi
	FinSi
	
FinAlgoritmo
