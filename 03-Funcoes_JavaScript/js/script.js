// 1 - Criando uma função
function minhaFuncao () {
    console.log("Testando");
}

// Invocando a função
minhaFuncao();

// Funcao em variável
const minhaFuncaoEmVariavel = function () {
    console.log("Função em variável");
};
// invocando a função em variavel
minhaFuncaoEmVariavel();

// função com argumento
function funcaoComArg(txt){
    console.log(`Imprimindo: ${txt}`);
};

// Invocando a funcao com argumentos
funcaoComArg("Bom dia");

// 2 - Retorno de funções
const a = 10;
const b = 20;
const c = 30;
const d = 40;

// declarando a função
function soma(n1, n2){
    return n1 + n2;
};

// Invocando e atribuindo valores aos parâmetros da função
const resultado = soma(a, b);

// Exemp: 1- Exibindo o resultado.
console.log(resultado);

// Exemp: 2 - Exibindo o resultado direto com a função soma
console.log(soma(c, d));

// 3 - Escopo da função
let y = 15;

function testandoEscopo() {
    let y = 20; // Escopo local
    console.log(`Y dentro da função é ${y}`);
};

testandoEscopo();
console.log(`Y fora da função ${y}`);


// 4 - Escopo aninhado
let m = 20;

function escopoAninhado(){

    if (true) {
        let m = 30;
        
        if (true) {
            let m = 40
            
            console.log(m);
        }
        
        console.log(m);
        
    }
    
}

escopoAninhado();
console.log(m);

// 5 - Arrow functions
const testeArrow = () => {
    console.log("Esta é uma arrow function");
}

testeArrow();

const parOuImpar = (n1) => {
    if (n1 % 2 === 0) {
        console.log(`O número ${n1} é par`);
    } else {
        console.log(`O número ${n1} é impar`);
    }
}
parOuImpar(3);

// 6 - 2ª sintaxe
const potenciaDeUmNumero = (x) => {
    return x * x;
}
console.log(potenciaDeUmNumero(2));

const potenciaDeUmNumero2 = (x) => x * x;
console.log(potenciaDeUmNumero2(12));

// 7 - Parâmetros opcionais 
const multi = function (m, n) {
    if (n === undefined) {
        return m * 2; 
    } else {
        return m * n;
    }
}
console.log(multi(5));
console.log(multi(2, 4));


const greeting = (name) => {

    if (!name) { // Verifica se name foi inserida no argumento
        console.log("Olá!");
        return;
    }

    console.log(`Olá ${name}!`);
}
greeting();
greeting("Américo");

// 8 - Valor Default
const customGreetings = (name, greeting = "Olá") => {
    return `${greeting}, ${name}!`;
}
console.log(customGreetings("Américo"));
console.log(customGreetings("Américo", "Bom dia"));

const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
        console.log(text);
    }
}

repeatText("Teste", 4);
repeatText("Teste2", 5);

// 9 - Closure
function someFunction() {
    
    let txt = "Alguma coisa";

    function display() { // Closure reaproveitamento do escopo interno de uma função
        console.log(txt);
    };

    display();
}
someFunction();

// 10 - Mais sobre closure
const multiplicationClosure = (n) => {
    return (m) => {
        return n * m;
    };
};

const c1 = multiplicationClosure(5);
const c2 = multiplicationClosure(10);
console.log(c1);
console.log(c2);

console.log(c1(5));
console.log(c2(10));

// 11 - Recursão
function fatorial(n){
    if (n === 0 || n === 1) { // Caso base
        return 1;
    }
    return n * fatorial(n - 1); // Chamada recursiva
}
console.log(fatorial(5));

console.log("===========================");

// ex2
const ultilTem = (n, m) => {
    if (n < 10) { // Caso base
        console.log("A função parou de executar!");
    } else {
        const x = n - m;

        console.log(x);

        ultilTem(x, m); // Chamada recursiva
    };
};
ultilTem(100, 7);

console.log("===========================");

var num = 5;
var fat = 1;

for (var i = num; i > 1; i--) {
    fat *= i;
};

console.log(fat);
