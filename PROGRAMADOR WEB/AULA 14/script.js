const caixaTexto = document.querySelector('#campoNome');
const botaoDia = document.querySelector('#btnDia');
const botaoNoite = document.querySelector('#btnNoite');
const areaResultado = document.querySelector('#painelResultado');
const botaoTema = document.querySelector('#btnTema');
const corpo = document.querySelector('#corpo');
const elemento = document.querySelector('#elemento');

botaoDia.addEventListener('click', function () {
    let nomeUsuario = caixaTexto.value;
    areaResultado.innerHTML = `Bom Dia ${nomeUsuario}!`;

    botaoDia.classList.add('botao-clicado');
    botaoNoite.classList.remove('botao-clicado');
});

botaoNoite.addEventListener('click', function () {
    let nomeUsuario = caixaTexto.value;
    areaResultado.textContent = `Boa Noite ${nomeUsuario}!`;

    botaoNoite.classList.add('botao-clicado');
    botaoDia.classList.remove('botao-clicado');
});

botaoTema.addEventListener('click', function () {
    corpo.classList.toggle('modo-escuro');

});