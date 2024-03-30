const list = document.querySelector('[data-lista]');

export default function printCoat(nome, valor) {
    list.innerHTML = '';

    for(let multiplicador = 1; multiplicador <= 1000; multiplicador *= 10) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${multiplicador} ${nome} : R$${(valor * multiplicador).toFixed(2)}`;
        list.appendChild(listItem);
    };
};