const numero = parseFloat(valorinput);
const camporesultado = document.getElementById('resultado');

if (numero > 0) {
    camporesultado.innerHTML = `<H1>0 número ${numero} é Positivo.</H1>`;
    camporesultado.style.color = "green";

} else if (numero <0) {
    camporesultado.innerHTML = `<H1>0 número ${numero} é Negativo.<H1>`;
    camporesultado.style.color = "red";
} else if (numero === 0) { 
    camporesultado.innerHTML = `<H1>0 número é Zero.o.<H1>`;
    camporesultado.style.color = "blue";
}
else {
    camporesultado.innerHTML = "<H1>Por favor, digite um número</H1>"    


})