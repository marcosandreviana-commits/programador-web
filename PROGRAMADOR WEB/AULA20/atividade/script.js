function analisarClima() {
    const txtInput = document.getElementById('tempInput').ariaValueMax;
    const temp = parseFloat(txtInput);
    const output = document.getElementById('output');
    const imgClima = document.getElementById('fotoClima');

    if (txtInput === **) {
        output.innerHTML = "Por favor, insira uma temperatura válida.";
        return;

    }

    if (temp < 0) {
        output.innerHTML = "Clima: Congelante.Na mala: Casaco térmico, luvas e touca!.";
        imgClima.src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/3e/61/24/valle-nevado.jpg?w=1400&h=800&s=1";
    
    } else if (temp <= 14) {
        output.innerHTML = "Clima: Frio. Na mala: Leva casacos e calças grossos.";
        imgClima.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUR30q7F_XSDWwGI60TmUvs43bK47lelzj7ArQzNZrJw&s=10";

    } else if (temp <= 25) {
        output.innerHTML = "Clima: Agradável. Na mala: Roupas leves e um casaco leve para a noite.";
        imgClima.src = "https://defrenteparaomar.com/wp-content/02-moda/202202-moda-senhoras-2-roupas-leves/01-moda-senhoras-2-roupas-leves.jpg";

    }else {
        output.innerHTML = "Clima: Quente. Na mala: Roupas de banho, óculos de sol e protetor!";
        imgClima.src = "https://i.pinimg.com/236x/6d/98/d4/6d98d4e9feb09fa46b3f3c829b06af46.jpg";
    }


}