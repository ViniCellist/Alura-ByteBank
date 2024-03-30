const list = document.querySelectorAll('[data-lista]');

export default function selectCoat(nome, valor) {
    list.forEach((listaEscolhida) => {
        if(listaEscolhida.id == nome) {
            printCoat(listaEscolhida, nome, valor)
        }
    })
}

function printCoat(list, nome, valor) {
    list.innerHTML = '';

    const plurais = {
        "dolar" : "dolares",
        "iene" : "ienes"
    }

    for(let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${multiplicador} ${multiplicador == 1 ? nome : plurais[nome]} : R$${(valor * multiplicador).toFixed(2)}`;
        list.appendChild(listItem);
    };
};