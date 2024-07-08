function alterarStatus(id){
    let gameClickado = document.getElementById (`game-${id}`);
    let imagem = gameClickado.querySelector('.dashboard__item__img');
    let botão = gameClickado.querySelector('.dashboard__item__button');
    
    if(imagem.classList.contains('dashboard__item__img--rented')){
        imagem.classList.remove('dashboard__item__img--rented');
    }else{
        imagem.classList.add('dashboard__item__img--rented');
    }

    if(botão.classList.contains('dashboard__item__button--return', 'Devolver')){
        botão.classList.remove('dashboard__item__button--return', 'Devolver')
        botão.textContent = 'Alugar';

    }else{
        botão.classList.add('dashboard__item__button--return')
        botão.textContent = 'Devolver';
    }

}