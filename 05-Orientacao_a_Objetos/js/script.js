// 1 - Métodos
const animal = {
    nome: "Bob",
    latir: function () {
        console.log("Au au");
    },
};
console.log(animal.nome);
animal.latir(); // Executa o método que está dentro do objeto

// 2 - Aprofundando em métodos 
// Manipulando objetos através de métodos
const pessoa = {

    nome: "Américo",

    // Retorna o nome do objeto
    getNome: function () {
        return this.nome;
    },

    // Define um nome p/ o objeto
    setNome: function (novoNome) {
        this.nome = novoNome;
    },
};

console.log(pessoa.nome); // Acessando o nome do objeto sem um método
console.log(pessoa.getNome()); // Acessando o nome do objeto COM um método
pessoa.setNome("Joaquim"); // Definindo um novo nome
console.log(pessoa.getNome());

/*
 3 - Prototype
 Prototype: é o mecanismo pelo qual os objetos no JavaScript podem herdar
 propriedades e métodos de outros objetos.
 Todo objeto tem uma propriedade interna chamada [[Prototype]], 
 que pode ser acessada por meio de Object.getPrototypeOf() ou do atalho __proto__.
 Funções e objetos criados a partir delas compartilham acesso ao mesmo protótipo, 
 economizando memória e promovendo reutilização de código.
*/

const text = "asd";
console.log(Object.getPrototypeOf(text));

const bool = true;
console.log(Object.getPrototypeOf(bool));

const arr = [];
console.log(Object.getPrototypeOf(arr));

// 4 - Mais sobre prototype
const myObject = { 
    a: "b"
};
// Cadeira de protítipos
console.log(Object.getPrototypeOf(myObject));

// Verificando a igualdade entre myObject e o Object (pai)
console.log(Object.getPrototypeOf(myObject) === Object.prototype); // true

// Intanciando um objeto a partir de outro
const mySecondObject = Object.create(myObject);
console.log(mySecondObject);

// Exibindo a propriedade a herdada de myObject em mySecondObject
console.log(mySecondObject.a); 

// 5 - Classes básicas
// Definindo uma classe cachorro
const cachorro = {
    race: null,
    patas: 4
};

// Criando um objeto pastorAlemao a partir da classe cachorro
const pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = "Pastor Alemão";
console.log(pastorAlemao.raca);
console.log(pastorAlemao.patas);

const bulldog = Object.create(cachorro);
bulldog.raca = "Bulldog";
console.log(bulldog);

// 6 - Função como classe - função construtora
function criarCachorro(nome, raca){

    const cachorro = Object.create({}); // Criando um obj vazio

    cachorro.nome = nome; // atribuindo as propridades com os args
    cachorro.raca = raca;

    return cachorro;
};

const bob = criarCachorro("Bob", "Caramelo");
console.log(bob);

const jack = criarCachorro("Jack", "Poodle");
console.log(jack);

console.log(Object.getPrototypeOf(jack)); 

// 7 - Funções construtoras
function Cachorro(nome, raca) {
    this.nome = nome,
    this.raca = raca
};

// Instanciando um objeto a partir da classe Cachorro
const huscky = new Cachorro("Ozzy", "Huscky");
console.log(huscky);

// 8 - Métodos na função construtora
Cachorro.prototype.uivar = function(){
    console.log("Auuuuu!");
};
console.log(Cachorro)
huscky.uivar();

// 9 - Classes ES6
class CachorroClasse {
    constructor (nome, raca){
        this.nome = nome;
        this.raca = raca;
    };
};
const jeff = new CachorroClasse ("Jeff", "Labrador");
console.log(jeff.nome);
console.log(jeff.raca);
console.log(Object.getPrototypeOf(jeff));

// 10 - Mais sobre classes
class Caminhao {

    constructor(eixos, cor){
        this.eixos = eixos;
        this.cor = cor;
    };

    descreverCaminhao(){
        console.log(`Este caminhão tem ${this.eixos} eixos e é da cor ${this.cor}`);
    };

};

const escania = new Caminhao (6, "Vermelha");
escania.descreverCaminhao();

// Adcionando novo método com prototype
Caminhao.prototype.motor = 4.0;

const caminhao2 = new Caminhao (8, "Preto");
console.log(caminhao2.motor);

console.log(Object.getPrototypeOf(caminhao2));

// 11 - Override
class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
};

const smith = new Human ("Bob Smith", "25");
console.log(smith);

Human.prototype.age = "Age are not defined!"; // Altera somente o prototype
console.log(smith.age);

console.log(Human.prototype.age);

// 12 - Symbol
class Airplane {
    constructor (brand, turbines) {
        this.brand = brand;
        this.turbines = turbines;
    };
};

// Isso faz que a classe passe o valor para os objetos que ele instancia
const wings = Symbol();
const pilots = Symbol();

Airplane.prototype[wings] = 2;
Airplane.prototype[pilots] = 2;

const airPlaneOne = new Airplane ("Boeing", 2);
console.log(airPlaneOne);

console.log(airPlaneOne[wings]);
console.log(airPlaneOne[pilots]);

// 13 - Getter e setter
class Post {

    constructor (title, description, tag) {
        this.title = title;
        this.description = description;
        this.tag = tag;
    };

    // Getter
    get showTitle() {
        return `You're reading ${this.title}`;
    };

    // Setter
    set addTag (tag) {
        const tagsArray = tag.split(", ");
        this.tag = tagsArray;
    };
};

const myPost = new Post ("Just a post", "This is a post about programming");
console.log(myPost);

// Usando showTitle como propriedade mas ele foi deinido como método
console.log(myPost.showTitle);

myPost.addTag = "Programming, JavaScript, JS";
console.log(myPost);

// 14 - Herança
class Mamifero {
    constructor (patas) {
        this.patas = patas;
    };
};

class Lobo extends Mamifero {
    constructor (patas, nome) {
        super(patas, patas);
        this.nome = nome;
    };
};

const wolve = new Lobo (4, "Jacob"); 
console.log(wolve);
console.log(wolve.patas);

// 15 - InstanceOf: Verifica se um objeto é pai de outro
console.log(wolve instanceof Lobo); // true (obj para class)
console.log(Lobo instanceof Mamifero); // false (Verificação entre duas classes)
console.log(new Lobo(4, "teste") instanceof Mamifero); // true (obj para class)