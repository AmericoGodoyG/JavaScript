// 1 - var, let e const

var x = 10; // [x global]
var y = 15;

/*
    O uso do var em variáveis fazem com que as mesmas sofram alterações
    quando são atribuidas em escopos locais, ou seja, a mesma variável
    que está no esccopo global pode ter seu valor alterado em um escopo
    de bloco.
*/
if (y > 10) {
    var x = 5; // [x global] com um novo valor atribuido
    console.log("[var] Escopo local:", x); // [x global] output: 5
};

console.log("[var] Escopo global:", x); // [x global] output: 5

/* 
    let permite criar uma variável global com o mesmo nome dentro de um escopo local,
    porém, a variável dentro do escopo local é diferente da variável do escopo
    global
*/
let a = 10; // [let a escopo global]
let b = 15;

if(b > 10) {
    let a = 5; // [let a escopo local]
    console.log("[let] Escopo local:", a); // [let a escopo local] output: 5
};

console.log("[let] Escopo global:", a); // [let a escopo global] output: 10


// Escopo de bloco (local)
function logName(){
    const name = "Pedro"; 
    console.log(name);
};

const name = "Matheus";

logName();

console.log(name);

// 2 - Arrow function
const sum = function(a, b){
    return a + b;
};

const arrowSum = (a, b) => a + b;

console.log(sum(5,5));
console.log(arrowSum(6,6));

const greetings = (name) => {

    if (name) {
        return `Hello ${name}`;
    } else {
        return "Hello";
    };

};

console.log(greetings("Américo"));
console.log(greetings());

// this
const user = {
    name: "Theo",

    sayUserName(){
        setTimeout(function(){
            /*
                this faz referncia ao objeto atual, permitindo
                acessar e atribuir valores as suas propriedades,
                porém, no exemplo abaixo o this não está referênciando
                o objeto devido ao seu uso sendo feito dentro de uma 
                função, dentro de um método, e neste caso, o this está 
                relacionado ao elemento pai de quem está executando,
                que no caso abaixo é um função anônima passada como
                argumento de um método do objeto.

                Funções anônimas → this depende de como a função é chamada
            */
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 1000);
    },

    sayUserNameArrow() {
        /*
            o this em usado em arraow function tem como o referência
            o escopo do objeto user.
            
            Arrow functions → this é herdado do escopo onde a função foi criada.
        */
        setTimeout(() => {

            console.log(this);
            console.log(`Username: ${this.name}`);

        }, 2000);
    },

};
user.sayUserName();
user.sayUserNameArrow();

/*
    3 - Filter

    - É um método de array para filtrar dados
    - O filtro é determinado por nós, por meio de uma função
    - Resultado em uma array com apenas elementos que precisamos
    - Nessas versões mais novas de JS temos vários métodos
    array importantes como este
*/

const arr = [1, 2, 3, 4, 5, 6];

// n é como é chamdo os números do array e permite percorrer cada elemento do array individualmente
const highNumbers = arr.filter((n) => {
    if(n >= 3){
        return n;
    };
});

// exibe os iguais ou maiores que 3
console.log(highNumbers);

const users = [
    {name:"Américo", available: true},
    {name:"Matheus", available: false},
    {name:"Maria", available: true},
    {name:"Josias", available: false},
    {name:"Kleber", available: true},
];

// retorna a lista de usuarios com avaailable true
const availableUsers = users.filter((user) => user.available);
console.log(availableUsers);

/*
    4 - Map

    O map tabém é um método de array, percorre todos os elemento do mesmo
    O map é utiliado para modificar o array de origem
    Filter remove elementos desnecessários, map altera os que precisamos 
*/

const products = [
    {name: "Camisa", price: 10.99, category: "Roupas"},
    {name: "Chaleira Elétrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 499, category: "Eletro"},
    {name: "Calça Jeans", price: 87.99, category: "Roupas"},
];

products.map((products) => {
    if(products.category === "Roupas"){
        products.onSale = true; // adiciona uma nova propriedade no objeto
    };
});

console.log(products);

/*
    5 - Template literals

    - O recurso de template literals permite a impressão de variáveis em um texto
    - Escrevemos entre crases, desta maneira: `texto`;
    - E as varáveis são inseridas com: `texto ${variavel}`
*/
const userName = "Américo";
const age = 25;
console.log(`Nome: ${userName}, idade: ${age}`);

/*
    6 - Destructuring
    
    - O destructuring desestrutura dados complexos em várias variáveis
    - Podemos utilzar em array e objetos
    - Muitas variáveis podem ser criadas em única linha
*/

const fruits = ["Maçã", "Mamão", "Laranja"];

// Destructing
const [f1, f2, f3] = fruits;
 
console.log(f1, f2, f3);

const productsDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periférico",
    color: "Cinza"
};

// name: productName renomeia o nome da propriedade no distructuring
const {name: productName, price, category, color} = productsDetails;

console.log(`Nome do produto: ${productName}, preço: ${price}, categoria: ${category}, cor: ${color}`);

/*
    7 - Spread operator

    - O spread operator pode ser utilizado em array e objetos
    - Utilizamos para inserir novos valores em um array ou objeto
    - É um recurso que pode unir dois arrays, por exeplo
*/

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];

// spread operator ...
const a3 = [...a1, ...a2];
console.log(a3);

const a4 = [0, ...a3, 7];
console.log(a4);

const carName = {name: "Gol"};
const carBrand = {brand: "VW"};
const otherInfo = {km: 1000000, price: 49999};

// Objeto complexo feito a partir de spread operator
const car = {...carName, ...carBrand, ...otherInfo};
console.log(car);

/*
    8 - Classes
    
    - As classes são recursos fundamentais para programar em POO
    - Temos acesso a recursos importantes, como: costructor propriedades, métodos;
    - Antes as classes em JS eram criadas com constructor functions;
*/

class Product {
    constructor(name, price) {
        this.name = name,
        this.price = price
    };

    método
    productWithDiscount(discount){
        return this.price * ((100 - discount) / 100);
    };
};

const shirt = new Product("Camisa gola V", 20);
console.log(shirt);

console.log(shirt.productWithDiscount(10));
console.log(shirt.productWithDiscount(15));

/*
    9 - Herança

    - Herança é o recurso que nos dá a possibilodade de uma classe
      herdar métodos e propriedades de outra
    
    - A palavra extends determina qual classe será herdada
    - Para enviar propriedades para a classe pai utilizamos super, isso é necessário
*/

class ProductWithAttributes extends Product {
    constructor(name, price, colors){
        super(name, price),
        this.colors = colors
    };

    showColors(){
        console.log("As cores são:");

        this.colors.forEach((color) => {
            console.log(color);
        });

    };
};

const hat = new ProductWithAttributes("Chapéu", 29.99, ["Preto", "Amarelo", "Verde"]);
console.log(hat);
console.log(hat.name);
hat.showColors();