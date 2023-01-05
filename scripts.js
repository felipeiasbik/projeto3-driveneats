function selecionado(produtoSelecionado){

    let MarcadoAntes = document.querySelector(".marcacao");
    let iconeVisivel = document.querySelector(produtoSelecionado + ".opcoes-individuais ion-icon");

    if (MarcadoAntes !== null){
        MarcadoAntes.classList.remove("marcacao");
        iconeVisivel.classList.add("icon-off");
    }

    let marcado = document.querySelector(produtoSelecionado);
    console.log(marcado);
    marcado.classList.add("marcacao");
    console.log(iconeVisivel);
    iconeVisivel.classList.remove("icon-off");


}


