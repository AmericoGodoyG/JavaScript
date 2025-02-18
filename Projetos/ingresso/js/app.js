function comprar () {
    // Recuperando as informações do formulário
    let tipo = document.getElementById("tipo-ingresso");
    let qtd = parseInt(document.getElementById("qtd").value);

    // Lógica de validação de pista
    if (tipo.value === "pista") {

        comprarPista(qtd);

    } else if (tipo.value === "superior") {

        comprarSuperior(qtd);

    } else {

        comprarInferior(qtd);

    };

};

// Lógica da compra dos ingressos da pista
function comprarPista(qtd) {

    let qtdePista = parseInt(document.getElementById("qtd-pista").textContent);

    if (qtd > qtdePista) {

        alert("Quantidade indisponível para tipo pista");

    } else {

        qtdePista -= qtd; // decrementando os ingressos
        document.getElementById("qtd-pista").textContent = qtdePista;
        alert("Compra realizada com sucesso!");

    };
};

function comprarSuperior(qtd) {

    let qtdeSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if (qtd > qtdeSuperior) {

        alert("Quantidade indisponível para tipo superior");

    } else {

        qtdeSuperior -= qtd; // decrementando os ingressos
        document.getElementById("qtd-superior").textContent = qtdeSuperior;
        alert("Compra realizada com sucesso!");

    };
};

function comprarInferior(qtd) {

    let qtdeInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (qtd > qtdeInferior) {

        alert("Quantidade indisponível para tipo inferior");

    } else {

        qtdeInferior -= qtd; // decrementando os ingressos
        document.getElementById("qtd-inferior").textContent = qtdeInferior;
        alert("Compra realizada com sucesso!");

    };
};