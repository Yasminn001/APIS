async function getWeather(){
    //Variavel que pega o valor do input cidade
     var cidade = document.getElementById('cidade').value
     //Conectando a api
     var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)
 
     //Variavel para consumir o JSON do item temperatura
     var tempCelsius = resposta.data.main.temp;
 
     console.log(tempCelsius)
     //Imprimir na tela Front-End utilizando JQUERY
     document.getElementById('temperatura').innerHTML = `A temperatura atual de 
     ${cidade} é: ${tempCelsius.toFixed(0)} °C`
 
 }
 getWeather()