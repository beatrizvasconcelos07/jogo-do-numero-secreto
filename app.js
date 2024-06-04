var listaNumerosSecretos = [];

function gerarNumAleatorio(){
    var numeroEscolhido = parseInt(Math.random()*10+1);
    var qtdElementosLista = listaNumerosSecretos.length;

    if (qtdElementosLista == 10){
        listaNumerosSecretos = [];
    }

    if (listaNumerosSecretos.includes(numeroEscolhido)){
        return gerarNumAleatorio();
    }
    else{
        listaNumerosSecretos.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

var numeroSecreto = gerarNumAleatorio();
console.log(numeroSecreto);

function exibirTexto(tag,texto){
    //innerHTML joga alguma informação no HTML a partir do JavaScript
    var campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //lembrando que é possível porque no html importamos o Responsive Voice
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial(){
    // var titulo = document.querySelector("h1");
    // titulo.innerHTML = "Número secreto!";
    exibirTexto("h1", "Número secreto!");
    // var paragrafo = document.querySelector("p");
    // paragrafo.innerHTML = "Escolha um número entre 1 e 10";
    exibirTexto("p", "Escolha um número entre 1 e 10");
}

mensagemInicial();

function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
    chute.focus();
}

var tentativas = 1;

function verificarChute(){
    var chute = document.querySelector("input").value;

    if (chute == numeroSecreto){
        exibirTexto("h1", "PARABÉNS!");
        var palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        var mensagemTentativa = `Você ACERTOU o número secreto com ${tentativas} ${palavraTentativa}!`; 
        exibirTexto("p", mensagemTentativa); 
        document.getElementById("reiniciar").removeAttribute("disabled"); //habilitar o botão novo jogo quando acertar o número
    }
    else{
        if(chute < numeroSecreto){
            exibirTexto("p", "Tente novamente! O número secreto é MAIOR!");
        }else{
            exibirTexto("p", "Tente novamente! O número secreto é MENOR!"); 
        }
        limparCampo();
        tentativas++;
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}