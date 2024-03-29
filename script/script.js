import printCoat from './print.js';
const graficoDolar = document.querySelector('#graficoDolar');

const graficoParaDolar = new Chart(graficoDolar, {
    type: 'line',
    data: {
      labels: [],
      datasets: [{
        label: 'Dólar',
        data: [],
        borderWidth: 1
      }]
    },
  });

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

let workerDolar = new Worker('./script/workers/workerDolar.js');
workerDolar.postMessage('usd');

workerDolar.addEventListener('message', event => {
  let tempo = generateHour();
  let valor = event.data.ask;
  printCoat('dolar', valor);
  addData(graficoParaDolar, tempo, valor)
});