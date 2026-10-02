function verificaridade() {

    let idade = document.getElementById("campoIdade").value;
    let textoresultado = document.getElementById("resultado");

    if (idade <=18){
        textoresultado.innerText = "Voçê é menor de idade.";

    }
    else{
        textoresultado.innerText = "Acesso liberado! Voçê é maior de idade.";
    }

}