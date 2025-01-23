// 1 - Arrays
const lista = [1, 2, 3, 4, 5];
console.log(lista);

console.log(typeof lista); // Obeject

const itens = ["Matheus", true, 2, 4.12, []];
console.log(itens); 

// Acessando os itens do array
const letras =["a", "b", "c", "d", "e"];
console.log(letras[0]); // array[índices]
console.log(letras[1]);
console.log(letras[2]);
console.log(letras[3]);
console.log(letras[4]);
console.log(letras[5]); // undefined
console.log(letras.length);

// 2 - Propriedades de um array
const numbers = [5, 3, 4];

// length obtém a quantidade de elementos do array
console.log(numbers.length); // retorna a quantidade de elementos do array
console.log(numbers["length"]);

// length obtém a quantidade de elementos de uma string
const myName = "Américo";
console.log(myName.length);

// 4 - Métodos
const otherNumbers = [1, 2, 3];
const allNumbers = numbers.concat(otherNumbers);
console.log(allNumbers);

const txt = "algum texto";
console.log(txt.toUpperCase());

console.log(typeof txt.toUpperCase);
console.log(txt.indexOf("g")); // Indice "g" {2}

// 5 - Object Literals
const person = {
    name : "Américo",
    age : 25,
    job : "Developer"
};

console.log(person);
console.log(person.name);
console.log(person.name.length);
console.log(typeof person);

// 6 - Criando e removendo propriedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000
};
console.log(car);

// adicionando propriedade
car.door = 4;
console.log(car);

// removendo uma propriedade
delete car.km;
console.log(car);

// 7 - mais sobre objetos
const obj = {
    a: "teste",
    b: true
};
console.log(obj instanceof Object); // true

const obj2 = {
    c: []
};

Object.assign(obj2, obj);
console.log(obj2);

// 8 - Metodo keys e entries
console.log(Object.keys(obj2)); // Exibe um array com as propriedades do obj2
console.log(Object.entries(obj2)); // Exibe um array chave/valor das propriedades enumeradas de um objeto
console.log(Object.keys(car));
console.log(Object.entries(car));

// 9 - Mutação
const a = {
    name: "Américo"
};
const b = a;

console.log(a);
console.log(b);
console.log(a === b); // true

a.age = 25;

console.log(a);
console.log(b);

delete b.age;

console.log(a);
console.log(b);

// 10 - Loops em arrays
const users = ["Matheus", "João", "Pedro", "Miguel"];
for (let i = 0; i < users.length; i++) {
    console.log(`Usuário: ${users[i]}`);
};

// 11 - Push e Pop
const array = ["a", "b", "c"];
array.push("d");
console.log(array);
console.log(array.length);

array.pop("d");
console.log(array);
console.log(array.length);

const itemRemovido = array.pop();
console.log(itemRemovido);

console.log(array);

array.push("z", "x", "y");
console.log(array);

// 12 - Shift e unshift
const letters = ["a", "b", "c"];

const letter = letters.shift(); // Remove o primeiro elemento do array
console.log(letter);
console.log(letters);

letters.unshift("p", "q", "r");
letters.unshift("z");
console.log(letters);

// 13 - IndexOf e LastIndexOf
const myElements = ["Morango", "Maça", "Abacate", "Pêra", "Abacate"];
console.log(myElements.indexOf("Maça")); // Saída: 1
console.log(myElements.indexOf("Abacate")); // Saída: 2
console.log(myElements[2]); // Abacate
console.log(myElements[myElements.indexOf("Abacate")]); // Abacate

console.log(myElements.lastIndexOf("Abacate")); // 4
console.log(myElements.indexOf("Coisa")); // -1 {elemento não encotrado}
console.log(myElements.lastIndexOf("Coisa")); // -1 {elemento não encotrado}

// 14 - Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"];
const subArray = testeSlice.slice(2, 4);

console.log(testeSlice);
console.log(subArray);

const subArray2 = testeSlice.slice(2, 4 + 1);
console.log(subArray2);

const subArray3 = testeSlice.slice(10, 20);
console.log(subArray3); // Saída: [] lista vazia

const subArray4 = testeSlice.slice(2);
console.log(subArray4); 

// 15 - Foreach: percorre cada element do array
const nums = [1,2,3,4,5];

nums.forEach((numbers) => {
    console.log(`O número é ${numbers}`);
});

const posts = [
    {title: "Primeiro Post", category: "`PHP"},
    {title: "Terceiro Post", category: "`JavaScript"},
    {title: "Quarto Post", category: "`Python"},
];

posts.forEach((post) => {
    console.log(`Exibindo post: ${post.title} da categoria ${post.category}`);
});

// 16 - Includes: Verifica se o array contém o elemento
const brands = ["BMW", "VW", "Fiat"];
console.log(brands.includes("Fiat")); // true
console.log(brands.includes("KIA")); // False


if (brands.includes("BMW")) {
    console.log("Há carros desta marca!");
};

// 17 - Reverse: Inverte os elementos do array
const reverseTeste = [1,2,3,4,5];
console.log(reverseTeste);
reverseTeste.reverse();
console.log(reverseTeste);

// Metodos de Texto
// 18 - Trim
const trimTeste = "   testando \n   ";
console.log(trimTeste);
console.log(trimTeste.trim());

console.log(trimTeste.length);
console.log(trimTeste.trim().length);

// 19 - PadStart: Insere um texto no começo da string
const testePadStart = "1";
const newNumber = testePadStart.padStart(4, "0");

console.log(testePadStart);
console.log(newNumber);

const testepadEnd = newNumber.padEnd(10, "0");

console.log(testepadEnd);

// 20 - Split: Divide a string em um array 
const frase = "O rato roeu a roupa do rei de Roma";
const arrayFrase = frase.split(" ");
console.log(arrayFrase);

// 21 - Join: Une um array em uma sting
const fraseDeNovo = arrayFrase.join(" ");
console.log(fraseDeNovo);

const itensDeCompra = ["Mouse", "Teclado", "Monitor"];
console.log(itensDeCompra);

const fraseDeCompra = `Precisamos comprar: ${itensDeCompra.join(", ")}`;
console.log(fraseDeCompra);

// 22 - Repeat: repete um texto n vezes
const palavra = "Testando ";
console.log(palavra.repeat(5));

// 23 - RestOperator: repte um texto n vezes
const somaInfinita = (...args) => {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
};

console.log(somaInfinita(1,2,3));
console.log(somaInfinita(5,5));

// 24 - For...of: estrutura de repetição mais simples
const somaInfinita2 = (...args) => {
    let total = 0;
    for(num of args) {
        total += num;
    };
    return total;
};
console.log(somaInfinita2(1,2,4));

// 25 - Destructuring em objetos
const userDetails = {
    firstName: "Américo",
    lastName: "Godoy",
    job: "Developer"
};
console.log(userDetails);

const {firstName, lastName, job} = userDetails;
console.log(firstName, lastName, job);

// renomando as variáveis
const {firstName: primeiroNome} = userDetails;
console.log(firstName);

// 26 - Destructuring com arrays
const transportes = ["Avião", "Submarino", "Carro", "Trator"];
const [veiculoA, veiculoB, veiculoC, d, e] = transportes;

console.log(veiculoA, veiculoB, veiculoC, e);

// 27 - JSON - JavaScript Object Notation
const myJson = '{"name":"Américo", "age":25, "skills":["JS","C#","PHP"]}';
console.log(myJson);
console.log(typeof myJson);

// 28 - JSON p/ Objeto
const myObject = JSON.parse(myJson);
console.log(myObject);
console.log(typeof myObject);

// json inválido
const badJson = '{"name": Américo, "age": 25}';
// const myBadObject = JSON.parse(badJson); // is not valid JSON

myObject.isOpenToWork = true; // Adicionado uma propriedade ao objeto
console.log(myObject);

// Object p/ JSON
const myNewJson = JSON.stringify(myObject);
console.log(myNewJson);
console.log(typeof myNewJson);