document.addEventListener("DOMContentLoaded", function() {    
    //elementos do body
    const body = document.querySelector('body');
    body.style.width = "100%";
    body.style.height = "100vh";
    body.style.overflow = "hidden";
    body.style.display = "flex";
    body.style.alignItems = "center";
    body.style.flexDirection = "column";

    //criação do botão voltar
    const botaoVoltar = document.createElement("a");
    botaoVoltar.innerText = "Voltar";
    botaoVoltar.className = "mt-2 btn btn-secondary";
    botaoVoltar.href = "semana06.html";
    
    //div contador, e estilização do div
    const calculadora = document.getElementById("divCalculadora");
    calculadora.className = "border border-info rounded";
    calculadora.style.marginTop = "5rem";
    calculadora.style.marginBottom = "1rem";
    calculadora.style.padding = "20px 30px";
    
    //display
    const display = document.createElement('input');
    display.type = 'text';
    display.value = "";
    display.style.textAlign = "right";
    display.style.width = "100%";
    display.style.height = "60px";
    display.className = "mb-3 fs-5 form-control";
    display.disabled = true;
    calculadora.appendChild(display);

    //botões
    const botoesContainer = document.createElement('div');
    botoesContainer.style.display = "grid";
    botoesContainer.style.gridTemplateColumns = "repeat(4, 1fr)";
    calculadora.appendChild(botoesContainer);

    const botoes = [
        'AC', '±', '%', '/',
        '7', '8', '9', '*',
        '4', '5', '6', '-',
        '1', '2', '3', '+',
        '', '0', '.', '='
    ];

    function evalWithPercentage(s) {
        // Esta função substitui '%' por '* 0.01' antes de usar eval()
        // Isso permite calcular a porcentagem corretamente.
        return eval(s.replaceAll('%', '* 0.01'));
    }
    
    botoes.forEach(botao => {
        const btn = document.createElement('button');
        btn.className = 'btn m-1';
        btn.textContent = botao;
        
        // Adiciona classes específicas baseadas no tipo de botão
        if (!isNaN(botao)) {
            btn.classList.add('btn-secondary');
        } else if (botao === '.') {
            btn.classList.add('btn-secondary');
        } else if (botao === '=') {
            btn.classList.add('btn-success');
        } else if (botao === 'AC') {
            btn.classList.add('btn-success');
        } else {
            btn.classList.add('btn-warning');
        }
        
        // Adiciona evento de clique
        btn.addEventListener('click', function() {
            if (botao === 'AC') {
                display.value = '';
            } else if (botao === '±') {
                const valorAtual = parseFloat(display.value);
                if (!isNaN(valorAtual)) {
                    display.value = valorAtual * -1;
                }
            } else if (botao === '=') {
                try {
                    display.value = evalWithPercentage(display.value);
                } catch {
                    display.value = 'Erro';
                }
            } else {
                display.value += botao;
            }
        });
        
        botoesContainer.appendChild(btn);
    });

    body.appendChild(botaoVoltar);
});