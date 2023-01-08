let comparacaoPrato = 0;
let comparacaoBebida = 0;
let comparacaoSobremesa = 0;
let PedidoPrato;
let PedidoBebida;
let PedidoSobremesa;
let PedidoPrecoPrato= 0;
let PedidoPrecoBebida = 0;
let PedidoPrecoSobremesa = 0;
let PedidoPrecoTotal = 0;

const habilitarBotao = document.querySelector('.botao-fechar-pedido');
const textohabilitarBotao = document.querySelector('.botao-fechar-pedido p');

function selecionado(produtoSelecionado){
    const grupoPrato = document.querySelector(".prato");

    const marcadoAntes = grupoPrato.querySelector(".marcacao");

    if (marcadoAntes !== null){
        const iconeMarcadoAntes = marcadoAntes.querySelector("ion-icon");

        marcadoAntes.classList.remove("marcacao");
        iconeMarcadoAntes.classList.add("icon-off");

        if (comparacaoPrato > 0){
            comparacaoPrato = 0;
        }
    }

    const marcado = document.querySelector(produtoSelecionado);
    const iconeMarcadoAntes = marcado.querySelector("ion-icon");

    marcado.classList.add("marcacao");
    iconeMarcadoAntes.classList.remove("icon-off");

    comparacaoPrato = 1;

    PedidoPrato = marcado.querySelector(".nome-produto").innerHTML;
    PedidoPrecoPrato = Number(marcado.querySelector(".preco-produto").innerHTML.replace(/[^\d,]/g, '').replace(/(\,)/, '.'));

    if(comparacaoPrato + comparacaoBebida + comparacaoSobremesa === 3){
        habilitarBotao.classList.remove('botao-fechar-pedido');
        const changeselector = habilitarBotao.classList.add('botao-fechar-pedido-habilitado');
        textohabilitarBotao.innerHTML = "Fechar Pedido";
        if (changeselector !== null){
            habilitarBotao.removeAttribute('disabled');
        }
    }

}

function selecionado2(produtoSelecionado){
    const grupoBebida = document.querySelector(".bebida");

    const marcadoAntes = grupoBebida.querySelector(".marcacao");

    if (marcadoAntes !== null){
        const iconeMarcadoAntes = marcadoAntes.querySelector("ion-icon");

        marcadoAntes.classList.remove("marcacao");
        iconeMarcadoAntes.classList.add("icon-off");

        if (comparacaoBebida > 0){
            comparacaoBebida = 0;
        }
    }

    const marcado = document.querySelector(produtoSelecionado);
    const iconeMarcadoAntes = marcado.querySelector("ion-icon");

    marcado.classList.add("marcacao");
    iconeMarcadoAntes.classList.remove("icon-off");

    comparacaoBebida = 1;

    PedidoBebida = marcado.querySelector(".nome-produto").innerHTML;
    PedidoPrecoBebida = Number(marcado.querySelector(".preco-produto").innerHTML.replace(/[^\d,]/g, '').replace(/(\,)/, '.'));

    if(comparacaoPrato + comparacaoBebida + comparacaoSobremesa === 3){
        habilitarBotao.classList.remove('botao-fechar-pedido');
        const changeselector = habilitarBotao.classList.add('botao-fechar-pedido-habilitado');
        textohabilitarBotao.innerHTML = "Fechar Pedido";
        if (changeselector !== null){
            habilitarBotao.removeAttribute('disabled');
        }
    }

}

function selecionado3(produtoSelecionado){
    const grupoSobremesa = document.querySelector(".sobremesa");

    const marcadoAntes = grupoSobremesa.querySelector(".marcacao");

    if (marcadoAntes !== null){
        const iconeMarcadoAntes = marcadoAntes.querySelector("ion-icon");

        marcadoAntes.classList.remove("marcacao");
        iconeMarcadoAntes.classList.add("icon-off");

        if (comparacaoSobremesa > 0){
            comparacaoSobremesa = 0;
        }
    }

    const marcado = document.querySelector(produtoSelecionado);
    const iconeMarcadoAntes = marcado.querySelector("ion-icon");

    marcado.classList.add("marcacao");
    iconeMarcadoAntes.classList.remove("icon-off");

    comparacaoSobremesa = 1;

    PedidoSobremesa = marcado.querySelector(".nome-produto").innerHTML;
    PedidoPrecoSobremesa = Number(marcado.querySelector(".preco-produto").innerHTML.replace(/[^\d,]/g, '').replace(/(\,)/, '.'));

    if(comparacaoPrato + comparacaoBebida + comparacaoSobremesa === 3){
        habilitarBotao.classList.remove('botao-fechar-pedido');
        const changeselector = habilitarBotao.classList.add('botao-fechar-pedido-habilitado');
        textohabilitarBotao.innerHTML = "Fechar Pedido";
        if (changeselector !== null){
            habilitarBotao.removeAttribute('disabled');
        }
    }

}


function finalizar() {
    PedidoPrecoTotal = PedidoPrecoPrato + PedidoPrecoBebida + PedidoPrecoSobremesa;
    if (PedidoPrato !== undefined && PedidoBebida !== undefined && PedidoSobremesa !== undefined){
    const precoBR = PedidoPrecoTotal.toFixed(2).toString().replace(".", ",");
    let texto;
    texto = `Olá, gostaria de fazer o pedido:\n- Prato: ${PedidoPrato}\n- Bebida: ${PedidoBebida}\n- Sobremesa: ${PedidoSobremesa}\nTotal: R$ ${precoBR}`;
    texto = window.encodeURIComponent(texto);
    window.open("https://wa.me/+5535999999999?text=" + texto);
    }
}
