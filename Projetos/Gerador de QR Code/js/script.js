// Manipulacao
const container = document.querySelector(".container");
const qrCodeBtn = document.querySelector("#qr-form button");
const qrCodeInput = document.querySelector("#qr-form input");
const qrCodeImg = document.querySelector("#qr-code img");

// Gerar QR Code
function generateQrCode() {

    const qrCodeInputValue = qrCodeInput.value; // captura o valor do input
    console.log(qrCodeInputValue); // exibe o valor do input

    // Se nao for inserido um texto no input não é gerado o Qr Code
    if(!qrCodeInputValue) return;

    // Aplica um texto no elemento HTML
    qrCodeBtn.innerText = "Gerando um código..."

    // Alterando o atributo src de <img> baseado na API
    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`;

    qrCodeImg.addEventListener("load", () =>{
        container.classList.add("active");
        qrCodeBtn.innerText = "Código criado!";
    });

};

// Gerando Código através do click do mouse
qrCodeBtn.addEventListener("click", () => {
    generateQrCode();
});

// Gerando Código através da tecla Enter
qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        generateQrCode();
    };
});

// Limpar input do QR Code
qrCodeInput.addEventListener("keyup", (e) => {
    if(!qrCodeInput.value){
        container.classList.remove("active"); // remove a classe active
        qrCodeBtn.innerText = "Gerar QR Code"; // Aplica a frase inicial
    };
});