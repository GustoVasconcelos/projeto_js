function Pessoa() {
    let nome;
    let sobrenome;
    let email;
    let data_nascimento;
    let matricula;

    this.setNome = function (vNome) {
        this.nome = vNome;
    };

    this.getNome = function () {
        return this.nome;
    };

    this.setSobrenome = function (vSobrenome) {
        this.sobrenome = vSobrenome;
    };

    this.getSobrenome = function () {
        return this.sobrenome;
    };

    this.setEmail = function (vEmail) {
        this.email = vEmail;
    };

    this.getEmail = function () {
        return this.email;
    };

    this.setDataNascimento = function (vDtNascimento) {
        this.data_nascimento = vDtNascimento;
    };

    this.getDataNascimento = function () {
        return this.data_nascimento;
    };

    this.setMatricula = function (vMatricula) {
        this.matricula = vMatricula;
    };

    this.getMatricula = function () {
        return this.matricula;
    };

    this.nomeCompleto = function () {
        return this.nome + " " + this.sobrenome;
    };
}

function Aluno() {
    Pessoa.call(this);

    let curso;

    this.setCurso = function(vCurso) {
        this.curso = vCurso;
    };
    this.getCurso = function() {
        return this.curso;
    };
}

function Professor() {
    Pessoa.call(this);

    let area_atuacao;
    let link_lattes;

    this.setAreaAtuacao = function(vArea) {
        this.area_atuacao = vArea;
    };
    this.getAreaAtuacao = function() {
        return this.area_atuacao;
    };
    this.setLinkLattes = function(vLink) {
        this.link_lattes = vLink;
    };
    this.getLinkLattes = function() {
        return this.link_lattes;
    };
}

//Funções do JavaScript
document.addEventListener("DOMContentLoaded", function () {
    //constantes usadas
    const tipoPessoaRadioProfessor = document.getElementById(
        "tipoPessoaRadioProfessor"
    );
    const tipoPessoaRadioAluno = document.getElementById(
        "tipoPessoaRadioAluno"
    );
    const divProfessor = document.getElementById("divProfessor");
    const divAluno = document.getElementById("divAluno");
    const divLattes = document.getElementById("divLattes");
    const matriculaInput = document.getElementById("matriculaInput");
    const areaAtuacaoInput = document.getElementById("areaAtuacaoInput");
    const cursoInput = document.getElementById("cursoInput");
    const linkLattesInput = document.getElementById("linkLattesInput");
    const formCadastro = document.getElementById("formCadastro");
    const resultadosDiv = document.getElementById("resultadoDiv");
    const areaResultados = document.getElementById("conteudoResultados");

    //esconde e exibe o div correto conforme o perfil selecionado (aluno / professor)
    function exibirInputCorreto() {
        if (tipoPessoaRadioProfessor.checked) {
            divProfessor.style.display = "block";
            divLattes.style.display = "block";
            divAluno.style.display = "none";
            matriculaInput.value = "12345";
            matriculaInput.maxLength = 5;
            linkLattesInput.setAttribute("required", true);
            areaAtuacaoInput.setAttribute("required", true);
            cursoInput.setAttribute("required", false);
        } else if (tipoPessoaRadioAluno.checked) {
            divProfessor.style.display = "none";
            divLattes.style.display = "none";
            divAluno.style.display = "block";
            matriculaInput.value = "1234567890";
            matriculaInput.maxLength = 10;
            linkLattesInput.setAttribute("required", false);
            areaAtuacaoInput.setAttribute("required", false);
            cursoInput.setAttribute("required", true);
        }
        matriculaInput.classList.remove('is-invalid');
        matriculaInput.classList.remove('is-valid');
    }

    //adiciona um EventListener para o clique nos botões de rádio
    tipoPessoaRadioProfessor.addEventListener("change", exibirInputCorreto);
    tipoPessoaRadioAluno.addEventListener("change", exibirInputCorreto);

    //EventListener do event reset do formulario
    formCadastro.addEventListener("reset", (event) => {
        event.preventDefault(); 
        location.reload(); 
    });

    //validacao do formulario, evitando que seja enviado sem que os campos sejam validados
    formCadastro.addEventListener("submit", (event) => {
        //impede o envio padrão do formulário
        event.preventDefault();

        //cria uma lista de todos os campos que precisam de validação
        const camposParaValidar = formCadastro.querySelectorAll('[required]');

        //dispara o evento 'blur' em cada campo para forçar a validação
        camposParaValidar.forEach(campo => {
            campo.dispatchEvent(new Event('blur'));
        });

        //verifica se algum campo no formulário está com a classe .is-invalid
        const primeiroCampoInvalido = formCadastro.querySelector('.is-invalid');

        if (primeiroCampoInvalido) {
            //se houver um campo inválido, foca nele para o usuário corrigir
            primeiroCampoInvalido.focus();
            //mensagem no console apenas para testes
            console.log('Formulário inválido. Por favor, corrija os campos marcados.');
        } else {
            //se tudo estiver certo, pode enviar o formulário
            //mensagem no console apenas para testes
            //console.log('Formulário válido! Enviando...');
            //permite o envio do formulario
            //formCadastro.submit();
            //mensagem no alert apenas para testes
            //alert('Formulário enviado com sucesso!');

            //pega o nome e divide em nome e sobrenome para usar na classe
            const partesNome = nomeCompletoInput.value.trim().split(' ');
            const primeiroNome = partesNome.shift();
            const sobrenome = partesNome.join(' ');

            //atribuicao das variaveis que vao ser usadas
            let novaPessoa;
            let htmlResultado;

            //se for do tipo aluno
            if (tipoPessoaRadioAluno.checked) {
                novaPessoa = new Aluno();
                novaPessoa.setNome(primeiroNome);
                novaPessoa.setSobrenome(sobrenome);
                novaPessoa.setEmail(emailInput.value);
                let dataNascimento = dataNascimentoInput.value.split('-').reverse().join('/');
                novaPessoa.setDataNascimento(dataNascimento);
                novaPessoa.setCurso(cursoInput.value);
                novaPessoa.setMatricula(matriculaInput.value);
                htmlResultado = `
                        <p><strong>Perfil:</strong> Aluno</p>
                        <p><strong>Nome Completo:</strong> ${novaPessoa.nomeCompleto()}</p>
                        <p><strong>Email:</strong> ${novaPessoa.getEmail()}</p>
                        <p><strong>Data de Nascimento:</strong> ${novaPessoa.getDataNascimento()}</p>
                        <p><strong>Curso:</strong> ${novaPessoa.getCurso()}</p>
                        <p><strong>Matricula:</strong> ${novaPessoa.getMatricula()}</p>
                    `;
            }
            
            //se for do tipo professor
            if (tipoPessoaRadioProfessor.checked) {
                novaPessoa = new Professor();
                novaPessoa.setNome(primeiroNome);
                novaPessoa.setSobrenome(sobrenome);
                novaPessoa.setEmail(emailInput.value);
                let dataNascimento = dataNascimentoInput.value.split('-').reverse().join('/');
                novaPessoa.setDataNascimento(dataNascimento);
                novaPessoa.setAreaAtuacao(areaAtuacaoInput.value);
                novaPessoa.setMatricula(matriculaInput.value);
                novaPessoa.setLinkLattes(linkLattesInput.value);
                htmlResultado = `
                        <p><strong>Perfil:</strong> Professor</p>
                        <p><strong>Nome Completo:</strong> ${novaPessoa.nomeCompleto()}</p>
                        <p><strong>Email:</strong> ${novaPessoa.getEmail()}</p>
                        <p><strong>Data de Nascimento:</strong> ${novaPessoa.getDataNascimento()}</p>
                        <p><strong>Area de Atuacao:</strong> ${novaPessoa.getAreaAtuacao()}</p>
                        <p><strong>Matricula:</strong> ${novaPessoa.getMatricula()}</p>
                        <p><strong>Link Lattes:</strong> ${novaPessoa.getLinkLattes()}</p>
                    `;
            }
            
            conteudoResultados.innerHTML = htmlResultado;
            resultadosDiv.classList.remove('d-none');
        }
    });

    //validacao dos campos de acordo com o perfil escolido
    //validacao do campo curso
    const feedbackCurso = document.getElementById("erroCurso");
    cursoInput.addEventListener('blur', () => {
        if (tipoPessoaRadioAluno.checked){
            const valor = cursoInput.value.trim();

            if (valor === "") {
                cursoInput.classList.remove("is-valid");
                cursoInput.classList.add("is-invalid");
                feedbackCurso.textContent = "O campo curso é obrigatório.";
                return;
            } else {
                cursoInput.classList.add("is-valid");
                cursoInput.classList.remove("is-invalid");
            }
        }
    })

    //validacao do campo area de atuacao
    const feedbackAreaAtuacao = document.getElementById("erroAreaAtuacao");
    areaAtuacaoInput.addEventListener('blur', () => {
        if (tipoPessoaRadioProfessor.checked){
            const valor = areaAtuacaoInput.value.trim();

            if (valor === "") {
                areaAtuacaoInput.classList.remove("is-valid");
                areaAtuacaoInput.classList.add("is-invalid");
                feedbackAreaAtuacao.textContent = "O campo área de atuação é obrigatório.";
                return;
            } else {
                areaAtuacaoInput.classList.add("is-valid");
                areaAtuacaoInput.classList.remove("is-invalid");
            }
        }
    })

    //validacao do campo area de atuacao
    const feedbackLattes = document.getElementById("erroLattes");
    linkLattesInput.addEventListener('blur', () => {
        if (tipoPessoaRadioProfessor.checked){
            const valor = linkLattesInput.value.trim();

            if (valor === "") {
                linkLattesInput.classList.remove("is-valid");
                linkLattesInput.classList.add("is-invalid");
                feedbackLattes.textContent = "O campo é obrigatório.";
                return;
            } else {
                linkLattesInput.classList.add("is-valid");
                linkLattesInput.classList.remove("is-invalid");
            }
        }
    })

    //validacao do campo matricula
    const feedbackMatricula = document.getElementById("erroMatricula");
    matriculaInput.addEventListener('blur', () => {
        const valor = matriculaInput.value.trim();

        if (valor === "") {
            matriculaInput.classList.remove("is-valid");
            matriculaInput.classList.add("is-invalid");
            feedbackMatricula.textContent = "O campo matricula é obrigatório.";
            return;
        } 
        if (tipoPessoaRadioProfessor.checked && valor.length  != 5) {
            matriculaInput.classList.remove("is-valid");
            matriculaInput.classList.add("is-invalid");
            feedbackMatricula.textContent = "O campo precisa de 5 digitos.";
            return;
        } else if (tipoPessoaRadioAluno.checked && valor.length != 10) {
            matriculaInput.classList.remove("is-valid");
            matriculaInput.classList.add("is-invalid");
            feedbackMatricula.textContent = "O campo precisa de 10 digitos.";
            return;
        } else {
            matriculaInput.classList.add("is-valid");
            matriculaInput.classList.remove("is-invalid");
        }
    })

    //mascaras telefones
    const telefoneFixo = document.getElementById("telefoneFixoInput");
    const telefoneCelular = document.getElementById("telefoneCelularInput");

    const mascaraTeleFoneFixo = {
        mask: "(00) 0000-0000",
    };

    const mascaraTeleFoneCelular = {
        mask: "(00) 00000-0000",
    };

    const mascaraTelFixo = IMask(telefoneFixo, mascaraTeleFoneFixo);
    const mascaraTelCelular = IMask(telefoneCelular, mascaraTeleFoneCelular);

    //validações dos campos genericos
    //validação do telefone fixo
    const feedbackTelFixo = document.getElementById("erroTelFixo");

    telefoneFixo.addEventListener("blur", () => {
        // Se o campo estiver vazio e não for obrigatório, não faz nada
        if (mascaraTelFixo.unmaskedValue.length === 0) {
            telefoneFixo.classList.remove("is-valid");
            telefoneFixo.classList.add("is-invalid");
            feedbackTelFixo.textContent = "Telefone fixo é obrigatório.";
            return;
        }

        if (mascaraTelFixo.masked.isComplete) {
            //completo
            telefoneFixo.classList.remove("is-invalid");
            telefoneFixo.classList.add("is-valid");
        } else {
            //incompleto
            telefoneFixo.classList.remove("is-valid");
            telefoneFixo.classList.add("is-invalid");
            feedbackTelFixo.textContent = "Telefone fixo está incompleto.";
        }
    });

    //validação do telefone celular
    const feedbackTelCelular = document.getElementById("erroTelCelular");

    telefoneCelular.addEventListener("blur", () => {
        // Primeiro, verifica se o campo obrigatório está vazio
        if (mascaraTelCelular.unmaskedValue.length === 0) {
            telefoneCelular.classList.remove("is-valid");
            telefoneCelular.classList.add("is-invalid");
            feedbackTelCelular.textContent =
                "O número de celular é obrigatório.";
            return;
        }

        if (mascaraTelCelular.masked.isComplete) {
            //completo
            telefoneCelular.classList.remove("is-invalid");
            telefoneCelular.classList.add("is-valid");
        } else {
            //incompleto
            telefoneCelular.classList.remove("is-valid");
            telefoneCelular.classList.add("is-invalid");
            feedbackTelCelular.textContent =
                "O número de celular está incompleto.";
        }
    });

    //validacao do nome
    const nomeCompletoInput = document.getElementById("nomeCompletoInput");
    // O div de feedback agora é o .invalid-feedback
    const feedbackNome = document.getElementById("erroNome");

    nomeCompletoInput.addEventListener("blur", () => {
        const valor = nomeCompletoInput.value.trim();

        if (valor === "") {
            nomeCompletoInput.classList.remove("is-valid");
            nomeCompletoInput.classList.add("is-invalid");
            feedbackNome.textContent = "O campo nome completo é obrigatório.";
            return;
        }

        const partesValidas = valor.split(" ").filter((parte) => parte !== "");

        if (partesValidas.length < 2) {
            // Inválido
            nomeCompletoInput.classList.remove("is-valid");
            nomeCompletoInput.classList.add("is-invalid");
            feedbackNome.textContent =
                "Por favor, digite seu nome e sobrenome.";
        } else {
            // Válido
            nomeCompletoInput.classList.remove("is-invalid");
            nomeCompletoInput.classList.add("is-valid");
        }
    });

    //validacao do email
    const emailInput = document.getElementById("emailInput");
    const feedbackEmail = document.getElementById("erroEmail");

    //expressão regular para validar o formato do e-mail
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    emailInput.addEventListener("blur", () => {
        const valor = emailInput.value.trim();

        //primeiro, verifica se o campo está vazio
        if (valor === "") {
            emailInput.classList.remove("is-valid");
            emailInput.classList.add("is-invalid");
            feedbackEmail.textContent = "O campo e-mail é obrigatório.";
            return;
        }

        //depois, usa o Regex para testar o formato do e-mail
        if (emailRegex.test(valor)) {
            //Formato válido
            emailInput.classList.remove("is-invalid");
            emailInput.classList.add("is-valid");
        } else {
            //Formato inválido
            emailInput.classList.remove("is-valid");
            emailInput.classList.add("is-invalid");
            feedbackEmail.textContent =
                "Por favor, digite um e-mail válido (ex: nome@dominio.com).";
        }
    });

    //validação de data de nascimento
    const dataNascimentoInput = document.getElementById("dataNascimentoInput");
    const feedbackData = document.getElementById("erroData");

    dataNascimentoInput.addEventListener("blur", () => {
        const valorData = dataNascimentoInput.value;

        //verifica se o campo está vazio
        if (!valorData) {
            dataNascimentoInput.classList.remove("is-valid");
            dataNascimentoInput.classList.add("is-invalid");
            feedbackData.textContent = "A data de nascimento é obrigatória.";
            return;
        }

        //compara a data selecionada com a data atual
        const dataSelecionada = new Date(valorData);
        const hoje = new Date();

        //zera as horas para comparar apenas o dia, mês e ano
        hoje.setHours(0, 0, 0, 0);

        if (dataSelecionada > hoje) {
            //data inválida (no futuro)
            dataNascimentoInput.classList.remove("is-valid");
            dataNascimentoInput.classList.add("is-invalid");
            feedbackData.textContent =
                "A data de nascimento não pode ser no futuro.";
        } else {
            //data válida
            dataNascimentoInput.classList.remove("is-invalid");
            dataNascimentoInput.classList.add("is-valid");
            
        }
    });

    // Chama a função ao carregar a página para exibir o input padrão (Professor)
    exibirInputCorreto();
});
