//carrega as funções no load da página
document.addEventListener("DOMContentLoaded", function () {
    //elementos do body
    var body = document.querySelector('body');
    body.style.width = "100%";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.justifyContent = "center";
    
    //div contador, e estilização do div
    const divContador = document.getElementById("divContador");
    divContador.style.width = "400px";
    divContador.style.height = "480px";
    divContador.style.display = "flex";
    divContador.style.flexDirection = "columns";
    divContador.style.alignItems = "center";
    
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
    botaoReset.style.backgroundImage = 'url("images/reload.png")';
    botaoReset.style.backgroundSize = 'cover';
    botaoReset.style.backgroundPostion = 'center';
    botaoReset.style.height = '22px';
    botaoReset.style.width = '22px';
    botaoReset.style.border = 'none';
    botaoReset.style.cursor = 'pointer';
    botaoReset.style.backgroundColor = 'transparent';
    botaoReset.className = "mt-2";

    //alocação dos divs
    divContador.appendChild(divCentral);
    divCentral.append(divTitulo);
    divTitulo.appendChild(titulo);
    divTitulo.appendChild(botaoReset);
});