let amigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }
    
    if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado!");
        return;
    }
    
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois amigos para o sorteio!");
        return;
    }
    
    let sorteio = [...amigos];
    let resultado = [];
    
    for (let i = 0; i < amigos.length; i++) {
        let amigoSecreto;
        do {
            amigoSecreto = sorteio[Math.floor(Math.random() * sorteio.length)];
        } while (amigoSecreto === amigos[i] && sorteio.length > 1);
        
        resultado.push(`${amigos[i]} → ${amigoSecreto}`);
        sorteio.splice(sorteio.indexOf(amigoSecreto), 1);
    }
    
    exibirResultado(resultado);
}

function exibirResultado(resultado) {
    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = "";
    resultado.forEach(par => {
        const li = document.createElement("li");
        li.textContent = par;
        resultadoLista.appendChild(li);
    });
}
