//carrega as funções no load da página
document.addEventListener("DOMContentLoaded", function () {
    //elementos do body
    const body = document.querySelector('body');
    body.style.width = "100%";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.flexDirection = "column";
    
    //div contador, e estilização do div
    const divContador = document.getElementById("divContador");
    divContador.style.width = "400px";
    divContador.style.height = "480px";
    divContador.style.display = "flex";
    divContador.style.flexDirection = "column";
    divContador.style.alignItems = "center";
    divContador.className = "mt-5";
    
    //div central
    const divCentral = document.createElement("div");
    divCentral.className = "flex-fill w-100 border border-info rounded h-100";

    //div titulo, onde fica o titulo e o botão de reset
    const divTitulo = document.createElement("div");
    divTitulo.className = "d-flex flex-column align-items-center justify-content-center p-3";

    //elemento do titulo
    const titulo = document.createElement("h2");
    titulo.className = "text-center flex-grow-1";
    titulo.innerText = "Total";
    titulo.style.display = "block";

    //criação do botão reset
    const botaoReset = document.createElement("button");
    botaoReset.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"/><path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466"/></svg> Reset';
    botaoReset.className = "mt-2 btn btn-secondary";

    //criação do botão voltar
    const botaoVoltar = document.createElement("a");
    botaoVoltar.innerText = "Voltar";
    botaoVoltar.className = "mt-2 btn btn-secondary";
    botaoVoltar.href = "semana05.html";

    //criacao do elemento ContatorTotal
    const contadorTotal = document.createElement("span");
    contadorTotal.style.width = "80px";
    contadorTotal.style.alignContent = "center";
    contadorTotal.innerText = '0';
    contadorTotal.className = "mb-2 badge text-bg-secondary fs-6";

    //div imagens, onde ficam as imagens
    const divImagens = document.createElement("div");
    divImagens.className = "d-flex flex-row align-items-center justify-content-center";

    //imagen homem
    const imgHomem = document.createElement("img");
    imgHomem.src = "images/man.png";
    imgHomem.style.height = "100px";
    imgHomem.className = "m-4";

    //imagen mulher
    const imgMulher = document.createElement("img");
    imgMulher.src = "images/woman.png";
    imgMulher.style.height = "100px";
    imgMulher.className = "m-4";

    //div botoes, onde ficam os botoes
    const divBotoes = document.createElement("div");
    divBotoes.className = "d-flex flex-row align-items-center justify-content-center";

    //divBotoesEsq, onde ficam os botoes da imagem a esquerda
    const divBotoesEsq = document.createElement("div");
    divBotoesEsq.className = "d-flex flex-row align-items-center justify-content-center p-3";

    //botao esquerda mais
    const botaoEsquerdaMais = document.createElement('button');
    botaoEsquerdaMais.innerHTML = '+';
    botaoEsquerdaMais.style.fontSize = '20px';
    botaoEsquerdaMais.style.backgroundColor = 'green';
    botaoEsquerdaMais.style.fontWeight = 'bold';
    botaoEsquerdaMais.style.padding = '8px 16px';
    botaoEsquerdaMais.style.color = 'white';
    botaoEsquerdaMais.style.border = '0';
    botaoEsquerdaMais.style.cursor = 'pointer';
    botaoEsquerdaMais.style.borderRadius = '100%'

    //botao esquerda menos
    const botaoEsquerdaMenos = document.createElement('button');
    botaoEsquerdaMenos.innerHTML = '-';
    botaoEsquerdaMenos.style.fontSize = '20px';
    botaoEsquerdaMenos.style.backgroundColor = 'red';
    botaoEsquerdaMenos.style.fontWeight = 'bold';
    botaoEsquerdaMenos.style.padding = '4px 14px';
    botaoEsquerdaMenos.style.color = 'white';
    botaoEsquerdaMenos.style.border = '0';
    botaoEsquerdaMenos.style.cursor = 'pointer';
    botaoEsquerdaMenos.style.borderRadius = '100%'
    botaoEsquerdaMenos.className = "ms-2";

    //divBotoesDir, onde ficam os botoes da imagem a direita
    const divBotoesDir = document.createElement("div");
    divBotoesDir.className = "d-flex flex-row align-items-center justify-content-center p-3";
    divBotoesDir.style.marginLeft = "1.25rem";

    //botao esquerda mais
    const botaoDireitaMais = document.createElement('button');
    botaoDireitaMais.innerHTML = '+';
    botaoDireitaMais.style.fontSize = '20px';
    botaoDireitaMais.style.backgroundColor = 'green';
    botaoDireitaMais.style.fontWeight = 'bold';
    botaoDireitaMais.style.padding = '8px 16px';
    botaoDireitaMais.style.color = 'white';
    botaoDireitaMais.style.border = '0';
    botaoDireitaMais.style.cursor = 'pointer';
    botaoDireitaMais.style.borderRadius = '100%'
    botaoDireitaMais.className = "ms-2";

    //botao esquerda menos
    const botaoDireitaMenos = document.createElement('button');
    botaoDireitaMenos.innerHTML = '-';
    botaoDireitaMenos.style.fontSize = '20px';
    botaoDireitaMenos.style.backgroundColor = 'red';
    botaoDireitaMenos.style.fontWeight = 'bold';
    botaoDireitaMenos.style.padding = '4px 14px';
    botaoDireitaMenos.style.color = 'white';
    botaoDireitaMenos.style.border = '0';
    botaoDireitaMenos.style.cursor = 'pointer';
    botaoDireitaMenos.style.borderRadius = '100%'
    botaoDireitaMenos.className = "ms-2";

    //div nomes, onde ficam os nomes
    const divNomes = document.createElement("div");
    divNomes.className = "d-flex flex-row align-items-center justify-content-center";

    const textoEsquerda = document.createElement("span");
    textoEsquerda.innerHTML = 'Homens';
    textoEsquerda.style.fontWeight = 'bold';
    textoEsquerda.style.fontFamily = 'Sans-serif';

    const textoDireita = document.createElement("span");
    textoDireita.innerHTML = 'Mulheres';
    textoDireita.style.fontWeight = 'bold';
    textoDireita.style.fontFamily = 'Sans-serif';
    textoDireita.style.marginLeft = "5rem";

    //div valores, onde ficam os valores
    const divValores = document.createElement("div");
    divValores.className = "d-flex flex-row align-items-center justify-content-center";

    //criacao do elemento ContatorHomem
    const botaoContadorHomem = document.createElement("span");
    botaoContadorHomem.style.width = "80px";
    botaoContadorHomem.style.alignContent = "center";
    botaoContadorHomem.innerText = '0';
    botaoContadorHomem.className = "badge text-bg-secondary fs-6";

    //criacao do elemento ContatorMulher
    const botaoContadorMulher = document.createElement("span");
    botaoContadorMulher.style.width = "80px";
    botaoContadorMulher.style.alignContent = "center";
    botaoContadorMulher.innerText = '0';
    botaoContadorMulher.className = "badge text-bg-secondary fs-6";
    botaoContadorMulher.style.marginLeft = "4rem";

    //alocação dos divs
    //adciona a divCentral no divContador(que esta no html)
    divContador.appendChild(divCentral);
    
    //adiciona a divTitulo na divCentral
    divCentral.append(divTitulo);

    //adiciona os elementos na divTitulo
    divTitulo.appendChild(titulo);
    divTitulo.appendChild(contadorTotal);
    divTitulo.appendChild(botaoReset);

    //adiciona a divImagens na divCentral
    divCentral.append(divImagens);

    //adiciona os elementos na divImagens
    divImagens.appendChild(imgHomem);
    divImagens.appendChild(imgMulher);

    //adiciona a divBotoes na divCentral
    divCentral.appendChild(divBotoes);

    //adiciona as divs BotoesEsquerda e BotoesDireita com seus respectivos botoes na divBotoes
    divBotoes.appendChild(divBotoesEsq);
    divBotoesEsq.appendChild(botaoEsquerdaMais);
    divBotoesEsq.appendChild(botaoEsquerdaMenos);

    divBotoes.appendChild(divBotoesDir);
    divBotoesDir.appendChild(botaoDireitaMais);
    divBotoesDir.appendChild(botaoDireitaMenos);

    //adiciona a divNomes na divCentral e depois os elementos na divNomes
    divCentral.appendChild(divNomes);
    divNomes.append(textoEsquerda);
    divNomes.append(textoDireita);

    //adiciona a divValores na divCentral e depois os elementos na divValores
    divCentral.appendChild(divValores);
    divValores.appendChild(botaoContadorHomem);
    divValores.appendChild(botaoContadorMulher);

    //adiciona o botao de voltar no final da pagina
    body.appendChild(botaoVoltar);

    //funcoes
    function calcularTotal(){
        const valorEsquerda = parseInt(botaoContadorHomem.innerText);
        const valorDireita = parseInt(botaoContadorMulher.innerText);
        const resultado = valorEsquerda + valorDireita;

        contadorTotal.innerText = resultado.toString();
    }

    //homens
    function adicionaHomens() {
        botaoContadorHomem.innerText = parseInt(botaoContadorHomem.innerText) + 1;
    }

    function subtraiHomens() {
        if(parseInt(botaoContadorHomem.innerText) > 0) {
            botaoContadorHomem.innerText = parseInt(botaoContadorHomem.innerText) - 1;
        }
    }

    //mulheres
    function adicionaMulheres() {
        botaoContadorMulher.innerText = parseInt(botaoContadorMulher.innerText) + 1;
    }

    function subtraiMulheres() {
        if(parseInt(botaoContadorMulher.innerText) > 0) {
            botaoContadorMulher.innerText = parseInt(botaoContadorMulher.innerText) - 1;
        }
    }

    //eventlistener dos botoes
    botaoReset.addEventListener('click', function () {
        botaoContadorHomem.innerText = 0;
        botaoContadorMulher.innerText = 0;
        calcularTotal();
    });

    botaoEsquerdaMais.addEventListener('click', function () {
        adicionaHomens();
        calcularTotal();
    })

    botaoEsquerdaMenos.addEventListener('click', function () {
        subtraiHomens();
        calcularTotal();
    })

    botaoDireitaMais.addEventListener('click', function () {
        adicionaMulheres();
        calcularTotal();
    })

    botaoDireitaMenos.addEventListener('click', function () {
        subtraiMulheres();
        calcularTotal();
    })
});