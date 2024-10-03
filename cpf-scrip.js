//Função para consumir API

function buscar(){
    //carregar json
    fetch('https://raw.githubusercontent.com/Yasminn001/CPF/refs/heads/main/cpf-dados.json').then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value;
        var encontrado = false; 
        corpo.forEach(pessoa => {
            if(identificador == pessoa.cpf){
           
                document.getElementById('imagem').innerHTML = pessoa.imagem;
                document.getElementById('id').innerHTML = pessoa.id;
                document.getElementById('nome').innerHTML = pessoa.nome;
                document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
                document.getElementById('cpf').innerHTML = pessoa.cpf;
                document.getElementById('cidade').innerHTML = pessoa.cidade;
                document.getElementById('pais').innerHTML = pessoa.pais; 

                document.getElementById('erro').innerHTML = "";
                encontrado = true;
            
                }

        })
         if(!encontrado){
            document.getElementById('erro').innerHTML = "Registro inválido";  
         }   

      console.log(corpo)  
    });
    
}











   




