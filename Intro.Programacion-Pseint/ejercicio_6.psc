Algoritmo sin_titulo
	// Dado un n�mero entero A, hacer un diagrama de flujo que determine si es par, impar o nulo.
	// Pista: para determinar el resto de una divisi�n, se usa la operaci�n mod.
	Definir numA Como Entero
	Leer numA
	Si numA==0 Entonces
		Escribir 'El n�mero es nulo'
	SiNo
		Si numA MOD 2==0 Entonces
			Escribir 'El n�mero es par'
		SiNo
			Escribir 'El n�mero es impar'
		FinSi
	FinSi
FinAlgoritmo
