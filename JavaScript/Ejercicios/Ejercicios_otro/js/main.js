const anArray = [];
console.log(`Longitud: ${anArray.length}`, anArray);
anArray.push(1, 2, 3);
console.log(`Longitud: ${anArray.length}`, anArray);
anArray.splice(0, 1, -3, -2);
console.log(`Longitud: ${anArray.length}`, anArray);

//********************* */

const booleanCheck = (argumento) => typeof argumento === "boolean" ? true : false;

console.log(booleanCheck(true));
console.log(booleanCheck("true"));
console.log(booleanCheck(3));
console.log(booleanCheck(anArray));

//********************* */

