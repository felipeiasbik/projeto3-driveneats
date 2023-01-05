function selecionado(produtoSelecionado){

    let marcadoAntes = document.querySelector(".marcacao");

    if (marcadoAntes !== null){
        let iconeMarcadoAntes = marcadoAntes.querySelector("ion-icon");

        marcadoAntes.classList.remove("marcacao");
        iconeMarcadoAntes.classList.add("icon-off");
    }

    let marcado = document.querySelector(produtoSelecionado);
    let iconeMarcadoAntes = marcado.querySelector("ion-icon");

    marcado.classList.add("marcacao");
    iconeMarcadoAntes.classList.remove("icon-off");


}


