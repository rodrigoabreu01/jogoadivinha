let numeroRandomico = Math.floor(Math.random() * 100) + 1;
palpites = [];


formulario.onsubmit = () => {
    event.preventDefault();
    if(input.value < numeroRandomico){
        alert('Você não acertou! O numero é menor!');
        
    }else{
        alert('Você não acertou! O numero é maior!');

    }
    palpites.push(input.value);
    palpitesText.innerHTML = palpites.join(' - ');
    formulario.reset();

}