let amigos = [];

function adicionar() {

    let amigo = document.getElementById('nome-amigo');
    
    // Verificando se foi informado um nome
    if (amigo.value == '') {
        alert('Informe o nome do amigo!');
        return; // Deixa de executar toda a função
    };
    
    // Verifica se um elemento ja está incluido na lista de amigos
    if (amigos.includes(amigo.value)) {
        alert('Nome já adicionado!');
        return; // Deixa de executar toda a função
    };
    
    let lista = document.getElementById('lista-amigos');
    
    amigos.push(amigo.value);

    // verifica se o array esta vazio 
    if (lista.textContent == '') {
        lista.textContent = amigo.value;

    } else {
        lista.textContent += ', ' + amigo.value;
    };
    
    // Limpa o input 
    amigo.value = '';
};

function sortear(){

    if (amigos.length < 4) {
        alert('Adicone pelo menos 4 amigos!');
        reiniciar();
        return;
    };

    embaralha(amigos);
    
    let listaSorteio = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < amigos.length; i++) {
        
        if (i === amigos.length - 1) {
            listaSorteio.innerHTML += amigos[i] + " --> " + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += amigos[i] + " --> " + amigos[i + 1] + '<br>';
        };

    };

};

function embaralha(lista) {

    // Algoritmo de Fisher-Yates
    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    };

};

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
};

