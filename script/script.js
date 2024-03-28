import printCoat from './print.js';

const graficoDolar = document.querySelector('#graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: '# Dolar',
        data: [],
        borderWidth: 1
      }]
    },
  });


  async function connectAPI() {
    const connect = await fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL");
    const connectTranslate = await connect.json();
    let tempo = generateHour();
    let valor = connectTranslate.USDBRL.ask;
    addData(graficoParaDolar, tempo, valor);
    printCoat('dolar', valor);
  };

 setInterval(() => connectAPI(), 5000);

 function generateHour() {
  let date = new Date();
  let hour = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();

  console.log(hour);
  return hour;
 };

function addData(grafico, legenda, dados) {
  grafico.data.labels.push(legenda);
  grafico.data.datasets.forEach((dataset) => {
    dataset.data.push(dados);
  });
  grafico.update();
};