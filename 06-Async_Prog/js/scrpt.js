// /*
//     01 - setTimeout
//     Estabelece uma ação para ser executada após um tempo
// */
// console.log("Ainda não executou 1");

// setTimeout(function (){
//     console.log("Requisição assíncrona");
// }, 2000);

// console.log("Ainda não executou 2");

// /*
//     02 - setInterval
//     semelhante ao setTimeout, porém ela não para de ser executada
// */
// console.log("Ainda não começou 1");

// /*
// setInterval(function () {
//     console.log("Intervalo assíncrono");
// }, 3000);
// */
// console.log("Ainda não começou 2");

// /*
//     03 - Promises

//     São execuções assíncronas, é a promessa de um valor que pode
//     chegar em um ponto futuro.

//     Utilizamos o objeto Promise e alguns métodos p/ nos auxiliar
// */
// const promessa = Promise.resolve(5 + 5); // resolve o bloco de código em parenteses
// console.log("Algum código");

// /*
//     A função dentro do .then() só será executada depois que
//     o JavaScript tiver terminado de rodar todo o código síncrono
// */
// promessa
// .then(value => {
//     console.log(`A soma é ${value}`); // utiliza o resultado de resolve
//     return value;
// })
// .then((value) => value - 1) // value = 9
// .then((value) => console.log(`Agora é ${value}`)); // exibe 9

// console.log("Algum código");

// /*
//     4 - Falha na promise

//     Uma promise pode conter um erro, ou dependendo
//     de como o código é executado podemos receber
//     um erro

//     Usamos a função catch para isso, podemos pegar o
//     erro e exibir;
// */
// Promise.resolve(4 * "asd")
// .then((n) => {
//     if (Number.isNaN(n)){
//         throw new Error("Valor inválido, não é um número");
//     };
// })
// .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// /*
//     5 - Rejeição de Promise

//     A rejeição, diferente do erro, ocorre quando nós
//     decidimos ejetar uma promose;

//     Podemos fazer isso com o método reject
// */
// function checkNumber(n) {
//     return new Promise((resolve, reject) => {
//         if(n > 10){
//             resolve("O número é maior que 10");
//         } else {
//             reject(new Error("Número muito baixo"));
//         }
//     });
// };

// const a = checkNumber(20);
// const b = checkNumber(10);

// a.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
//     console.log(`Um erro ocorreu: ${err}`)
// );


// b.then((v) => console.log(`O resultado é ${v}`)).catch((err) =>
//     console.log(`Um erro ocorreu: ${err}`)
// );

// // 6 - Resolvendo várias promises
// const p1 = new Promise((resolve, reject) => {
//     setTimeout((function() {
//         resolve(10);
//     }, 3000));
// });

// const p2 = Promise.resolve(10 + 10);

// const p3 = new Promise((resolve, reject) => {
//     if (30 > 10) {
//         resolve(30);
//     } else {
//         reject("Erro!");
//     };
// });

// Promise.all([p1, p2, p3]).then((values) => console.log(values));

// 7 - Async Functions
// async function somarComDelay(a ,b){
//     return a + b;
// };

// somarComDelay(2, 4).then((value) => {
//     console.log(`O valor da soma é: ${value}`);
// });

// console.log("Teste Async");

// 8 - async await
// function resolveComDelay() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve("Resolveu a Promisse");
//         }, 2000);
//     });
// };

// async function chamadaAsync(){
//     console.log("Chamando a Promise, e esperando o resultado");
//     const result = await resolveComDelay();
//     console.log(`O resultado chegou: ${result}`);
// };
// chamadaAsync();

// 9 - Generators
function* generator(){
    yield 1;
    yield 2;
    yield 3;
};

const gen = generator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);