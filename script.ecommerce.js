// Conectar com a API utilizando o Fetch

var json1 = `{
    "id": 1,
    "nome": "Virginia",
    "sobrenome": "Fonseca",
    "cidade": "Goiania",
    "pais": "Brasil",
    "imagem": "<img src='imgecommerce/virginia.jpg' width='200px'>",
    "link": "https://www.wepink.com.br"
}`;

var json2 = `{
    "id": 2,
    "nome": "Billie",
    "sobrenome": "Ellish",
    "cidade": "Orange",
    "pais": "EUA",
    "imagem": "<img src='imgecommerce/billie.jpg' width='200px'>",
    "link": "https://youtu.be/BY_XwvKogC8?si=_Bg50NLU_3Yjs8eS"
}`;

var json3 = `{
    "id": 3,
    "nome": "Bruno",
    "sobrenome": "Mars",
    "cidade": "Havai",
    "pais": "EUA",
    "imagem": "<img src='imgecommerce/brunoMars.webp' width='200px'>",
    "link": "https://youtu.be/fXw0jcYbqdo?feature=shared"
}`;
fetch('https://raw.githubusercontent.com/Yasminn001/ecommercee/refs/heads/main/ecommerce.json')
// Converter o texto STRING para JSON
var dados1 = JSON.parse(json1);
var dados2 = JSON.parse(json2);
var dados3 = JSON.parse(json3);

// Link com JQUERY
var link1 = `<a href="${dados1.link}">Visite Nosso site</a>`;
var link2 = `<a href="${dados2.link}">Visite Nosso site</a>`;
var link3 = `<a href="${dados3.link}">Visite Nosso site</a>`;

function mostrarInformacoes(id) {
    // Esconder todas as informações
    for (let i = 1; i <= 3; i++) {
        document.getElementById(`imagem${i}`).style.display = 'none';
        document.getElementById(`nome${i}`).style.display = 'none';
        document.getElementById(`sobrenome${i}`).style.display = 'none';
        document.getElementById(`cidade${i}`).style.display = 'none';
        document.getElementById(`pais${i}`).style.display = 'none';
        document.getElementById(`link${i}`).style.display = 'none';
    }

    // Mostrar as informações do id selecionado
    document.getElementById(`imagem${id}`).innerHTML = eval(`dados${id}.imagem`);
    document.getElementById(`nome${id}`).innerHTML = eval(`dados${id}.nome`);
    document.getElementById(`sobrenome${id}`).innerHTML = eval(`dados${id}.sobrenome`);
    document.getElementById(`cidade${id}`).innerHTML = eval(`dados${id}.cidade`);
    document.getElementById(`pais${id}`).innerHTML = eval(`dados${id}.pais`);
    document.getElementById(`link${id}`).innerHTML = eval(`link${id}`);

    // Mostrar as informações correspondentes
    document.getElementById(`imagem${id}`).style.display = 'block';
    document.getElementById(`nome${id}`).style.display = 'block';
    document.getElementById(`sobrenome${id}`).style.display = 'block';
    document.getElementById(`cidade${id}`).style.display = 'block';
    document.getElementById(`pais${id}`).style.display = 'block';
    document.getElementById(`link${id}`).style.display = 'block';
}

function apertar1() {
    mostrarInformacoes(1);
}

function apertar2() {
    mostrarInformacoes(2);
}

function apertar3() {
    mostrarInformacoes(3);
}

console.log(dados1);
console.log(dados2);
console.log(dados3);
