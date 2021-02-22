Algoritmo sin_titulo
	// Dado un número entero A, hacer un diagrama de flujo que determine si es par, impar o nulo.
	// Pista: para determinar el resto de una división, se usa la operación mod.
	Definir numA Como Entero
	Leer numA
	Si numA==0 Entonces
		Escribir 'El número es nulo'
	SiNo
		Si numA MOD 2==0 Entonces
			Escribir 'El número es par'
		SiNo
			Escribir 'El número es impar'
		FinSi
	FinSi
FinAlgoritmo
