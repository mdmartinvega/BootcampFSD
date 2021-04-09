/*1. Generar un array de 100 objetos que tengan las siguientes propiedades:
• Cargo: construido con un string plantilla (`${}`) cuyos valores sean “Empleado 1”, “Empleado 2”, etc.
• Rendimiento: un número aleatorio con 2 decimales entre 0 y 1.
• Salario: un número aleatorio entre 1250 y 4000.*/

function Employee(position, efficiency, salary) {
    this.position = position;
    this.efficiency = efficiency;
    this.salary = salary;
};

let arrayObject = []
for (let object = 1; object <= 100; object++) {
    arrayObject.push(new Employee(`Empleado ${object}`, Number(Math.random().toFixed(2)), Math.floor(Math.random() * (4000 - 1250 + 1)) + 1250)); 
    
};
console.log(arrayObject); 


/*2. Ordenar el array por rendimiento e imprimirlo. Usar una función anónima 
como callback.*/

arrayObject.sort(function (a,b) {
    
    if (a.efficiency > b.efficiency) {
        return 1;
    }
    if (a.efficiency < b.efficiency){
        return -1;
    }
    else {
        return 0;
    }  
});

console.log(arrayObject);

/*3. Ordenar el array por salario e imprimirlo. Usar una función de flecha.*/

arrayObject.sort((a, b) => a.salary - b.salary);

console.log(arrayObject);

/*4. Ordenar el array por el número de empleado de forma decreciente. El número de empleado sólo estará 
dentro del string Cargo. Usar una función nombrada como callback.*/

arrayObject.sort(function decreasedOrder(a, b) {
    return b.position.slice(9) - a.position.slice(9);
});

console.log(arrayObject);

/*5. Usando filter: imprimir el cargo y salario de los que cobren más de 2500€.*/

arrayObject
    .filter(empleado => empleado.salary > 2500)
    .forEach(empleado => console.log(empleado.position, empleado.salary));



/*6. Usando map: subir el sueldo un 25% a los que cobren menos de 1500€ y volver a hacer el punto 5.*/

let increased = 1.25;
arrayObject = arrayObject.map(empleado => {
    if (empleado.salary < 1500) {
        empleado.salary = empleado.salary * increased 
    } return empleado;
});

console.log(arrayObject);

/*7.Usando reduce: Obtener el coste total de todos los sueldos para la empresa teniendo en cuenta que a la empresa le cuesta tener un empleado su sueldo más un 15%
por impuestos. */

const totalSalary = arrayObject.reduce((salarySum, empleado) => {
    return salarySum += empleado.salary * 1.15;
}, 0);

console.log(totalSalary);


/*8.Usar el método o métodos (reduce / map/ filter/ sort) que determinemos oportuno e imprimir en cada apartado:
•Despedir a los que tengan un rendimiento menor a 0.3.•*/

arrayObject = arrayObject.filter(empleado => empleado.efficiency >= 0.3);

console.log("Despedir a los que tengan un rendimiento menor a 0.3", arrayObject);

//Calcular el sueldo medio de la empresa.

let averageSalary = arrayObject.reduce((salarySum, empleado) => salarySum + empleado.salary, 0) / arrayObject.length;
averageSalary = averageSalary.toFixed(2);

console.log("Calcular el sueldo medio de la empresa", averageSalary);

//•Subir el sueldo de los que tengan un rendimiento superior a 0.7.*/

arrayObject = arrayObject.map(empleado => {
    if (empleado.efficiency > 0.7) {
        empleado.salary = empleado.salary * 1.25;  
        console.log("Subido el sueldo de", empleado.position); 
    }
    return empleado
    
});

console.log(arrayObject);


