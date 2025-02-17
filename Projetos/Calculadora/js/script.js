// Seleção de elementos 
const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTable = document.querySelector("#multiplication-operations");
const multiplicationTitle = document.querySelector(
    "#multiplication-title span"
);

// Funções
const createTable = (number, multiplicatorNumber) => {
    multiplicationTable.innerHTML = "";

    for (i = 1; i <= multiplicatorNumber; i++) {

        const result = number * i;

        // [criando template pro HTML]
        const template = `<div class = "row">
            <div class="operation"> ${number} X ${i} = </div>
            <div class="result"> ${result} </div>
        </div>`;

        // Permite o uso do template no HTML
        const parser = new DOMParser();

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    };
    multiplicationTitle.innerText = number;
};

// Eventos
multiplicationForm.addEventListener("submit", (e) => {
    // Cancela o evento se for cancelável, sem parar a programação do mesmo
    e.preventDefault(); 

    /*
        + a frente de +numberInput é um operador unário de conversão
        ele converte a string retornada em número
    */
    const multiplicationNumber = +numberInput.value;
    const multiplicatorNumber = +multiplicationInput.value;

    // [validação] Não exibe o console se um dos dois valores faltar
    if(!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber);
});
