fetch(`https://economia.awesomeapi.com.br/last/USD-BRL`).then(resposta => {
    return resposta.json()
}).then(economia => {
    console.log(economia)
    document.getElementById('ValorDolar').innerHTML = economia.USDBRL.bid;
    document.getElementById('ValorDia').innerHTML = economia.USDBRL.high;
    document.getElementById('MvalorDolar').innerHTML = economia.USDBRL.low;
}) 