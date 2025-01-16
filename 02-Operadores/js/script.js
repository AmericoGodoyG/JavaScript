// // 1 - Number
// console.log(typeof 2);
// console.log(typeof 5.14);
// console.log(typeof -127);

// // 2 - Operações aritméticas
// console.log(2 + 4);
// console.log(10 - 5);
// console.log(2 * 5);
// console.log(10 / 5);
// console.log(10 % 2);
// console.log(5 + 4 * 2);
// console.log(5 + (8 * 2));

// // 3 - Numeros especiais
// console.log(typeof Infinity); // number
// console.log(typeof -Infinity); // number
// console.log(typeof infinity); // undefined
// console.log(12 * "asd"); // NaN: Not a Number
// console.log(typeof NaN); // number

// // 4 - String 
// console.log("Um texto");
// console.log(`Dois texto`); // Usado com interpolação ${var}
// console.log('Tres texto')

// // 5 - Símbolos espciais em string
// console.log("Olá, \nAmérico Godoy!");
// console.log("Espaçamento \t tab");

// // 6 - Cocatenação
// console.log("Oi, " + "tudo" + " bem?");
// console.log(`Testando ` + `com ` + `crase`);

// // 7 - Interpolação (template string)
// console.log(`A soma de 2 + 2 é ${2 + 2}`);
// console.log(`Podemos executar qualquer coisa aqui ${console.log("teste")}`);

// // 8 - Boolean
// console.log(true);
// console.log(false);
// console.log(5 > 20); // false
// console.log(30 > 10); // true 
// console.log(typeof true);
// console.log(typeof false);

// // 9 - Operadores de comparação
// console.log(1 == 2); // false
// console.log(1 == 1); // true
// console.log(1 === "1"); // false
// console.log("1" === "1"); // true 
// console.log(10 % 5 != 2 - 2); // false, 10 % 5 = 0 e 2 - 2 = 0, logo não é diferente
// console.log(10 % 5 !== "0"); // true,  10 % 5 = 0 e 0 !== "0"
// console.log(5 < 20); // true
// console.log(30 < 10); // false
// console.log(20 <= 20); // true
// console.log(30 >= 15); // true

// // 10 - Idêntico
// console.log(9 == "9"); // true valor é igual
// console.log(9 === "9"); // false, valor igual e tipo diferente
// console.log(9 != "9"); // false, o valor não é difrente
// console.log(9 !== "9"); // true, valor igual e tipo diferente

// 11 - Operadores lógicos
// console.log(true && true); // true
// console.log(true && false); // false

// console.log(5 > 2 && 2 < 10); // true
// console.log(5 > 2 && "Americo" === 1); // false

// console.log(5 > 2 || "Americo" === 1); // true
// console.log(5 < 2 || 5 > 100); // false

// console.log(!true); // false
// console.log(!5 > 2); // false

// // 12 - Empty values
// console.log(typeof null, typeof undefined); // typeof: object, undefined
// console.log(null === undefined); // false, tipo object não é igual a undefined 
// console.log(null == undefined); // true, ambos tem a ausência de valor

// console.log(null == false); // false, null não é igual a false
// console.log(undefined == false); // false undefined não é igual a false

// // 13 - mudança de tipos
// console.log(5 * null); // 0
// console.log("teste" * "opa"); // NaN
// console.log("10" + 1); // 101 - concatenação
// console.log("10" - 1); // 9 -exibe um número
