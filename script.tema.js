let personagens = []; // Inicializa a lista de personagens

// Função para carregar os dados do JSON
fetch('shadowhunter.json')
    .then(resposta => resposta.json())
    .then(corpo => {
        personagens = corpo.personagens; // Armazena os personagens carregados
        exibirPersonagens(); // Chama a função para exibir personagens
    })
    .catch(error => console.error('Erro ao carregar os dados:', error));
    
function exibirPersonagens() {
    const containerPersonagens = document.getElementById("character");
    containerPersonagens.innerHTML = ''; // Limpa o container antes de adicionar novos personagens

    personagens.forEach(personagem => {
        const divPersonagem = document.createElement("div");
        divPersonagem.classList.add("character");
        divPersonagem.innerHTML = `
            <img src="${personagem.imagem}" alt="${personagem.nome}">
            <h2>${personagem.nome}</h2>
            <p>Residência: ${personagem.residencia}</p>
            <button onclick="mostrarInfoPersonagem(${personagem.id})">Ver Detalhes</button>
        `;
        containerPersonagens.appendChild(divPersonagem);
    });
}

function mostrarInfoPersonagem(id) {
    const personagem = personagens.find(p => p.id === id);
    const caixaInfo = document.getElementById("character-info");
    
    if (personagem) { // Corrigido para 'personagem'
        caixaInfo.innerHTML = `
            <h2>${personagem.nome}</h2>
            <p><strong>Idade:</strong> ${personagem.idade}</p>
            <p><strong>Residência:</strong> ${personagem.residencia}</p>
            <p><strong>Espécie:</strong> ${personagem.especie}</p>
            <p><strong>Descrição:</strong> ${personagem.descricao}</p>
            <img src="${personagem.imagem}" alt="${personagem.nome}">
        `;
        caixaInfo.style.display = "block"; // Mostra a caixa de informações
    }
}
