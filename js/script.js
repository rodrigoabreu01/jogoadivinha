let numeroRandomico = Math.floor(Math.random() * 100) + 1;
let palpite = [];

formulario.onsubmit = () => {
    event.preventDefault();
    if(palpite.length < 47){
        if(input.value < numeroRandomico){
            alert("O numero que ela está pensando é maior!");

        }else{
            alert("O numero que ela está pensando é menor!");
        }

        if(input.value == numeroRandomico){
            alert('Parabéns você acertou!');
            document.getElementById('input').style = 'display: none;';
            document.querySelector('#legenda1').style = 'display: block;';
            document.querySelector('#legenda1').innerHTML = 'Parabêns, o número é:' + numeroRandomico;
            changeIMG.src = "img/image 2.png";
            botao.innerHTML = 'Novo Jogo';
        }
        // SEM ARRAY METODOS
        palpite += ' - ' + input.value;
        resultPalpites.innerHTML = palpite;
        formulario.reset();

        // COM ARRAY METODOS
        // palpite.push(input.value);
        // resultPalpites.innerHTML = palpite.join(' - ');
        // formulario.reset();

    }else {
        document.getElementById('input').style = 'display: none;';
        document.querySelector('#legenda1').style = 'display: block;';
        document.querySelector('#legenda1').innerHTML = 'Você não acertou, o número era:' + numeroRandomico;
        botao.style = 'display: block;';
        changeIMG.src = "img/Group 4.png";
    }

}

botao.onclick = () => {
    window.location.reload();
}