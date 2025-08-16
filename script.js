const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você saiu da casa dos seus pais?",
        alternativas: [
            {
                texto: "Sim, fui morar sozinho.",
                afirmacao: "Você aprendeu a se virar e descobriu a liberdade de ter seu próprio espaço."
            },
            {
                texto: "Não, preferi continuar morando com eles.",
                afirmacao: "Você aproveitou mais tempo com a família e economizou bastante dinheiro."
            }
        ]
    },
    {
        enunciado: "Você conseguiu seu primeiro emprego?",
        alternativas: [
            {
                texto: "Sim, comecei a trabalhar cedo.",
                afirmacao: "Você ganhou experiência e cresceu rapidamente na carreira."
            },
            {
                texto: "Não, preferi esperar mais um pouco.",
                afirmacao: "Você aproveitou esse tempo para estudar e se preparar melhor."
            }
        ]
    },
    {
        enunciado: "Você decidiu fazer faculdade?",
        alternativas: [
            {
                texto: "Sim, segui para o ensino superior.",
                afirmacao: "Você se formou e abriu várias portas profissionais."
            },
            {
                texto: "Não, fui direto para o mercado de trabalho.",
                afirmacao: "Você ganhou experiência prática e construiu seu caminho com as próprias mãos."
            }
        ]
    },
    {
        enunciado: "Você aprendeu a dirigir?",
        alternativas: [
            {
                texto: "Sim, tirei minha carteira de motorista.",
                afirmacao: "Isso facilitou sua vida e deu mais independência."
            },
            {
                texto: "Não, continuei usando transporte público.",
                afirmacao: "Você economizou dinheiro e ajudou o meio ambiente."
            }
        ]
    },
    {
        enunciado: "Você começou a guardar dinheiro?",
        alternativas: [
            {
                texto: "Sim, fiz uma boa poupança.",
                afirmacao: "Com isso, conseguiu realizar vários sonhos no futuro."
            },
            {
                texto: "Não, preferi aproveitar o momento.",
                afirmacao: "Você viveu intensamente cada experiência que o dinheiro permitiu."
            }
        ]
    },
    {
        enunciado: "Você entrou em um relacionamento sério?",
        alternativas: [
            {
                texto: "Sim, encontrei alguém especial.",
                afirmacao: "Vocês construíram uma vida juntos e criaram belas memórias."
            },
            {
                texto: "Não, preferi ficar solteiro.",
                afirmacao: "Você aproveitou sua liberdade e focou nos seus objetivos."
            }
        ]
    },
    {
        enunciado: "Você decidiu ter filhos?",
        alternativas: [
            {
                texto: "Sim, formei uma família.",
                afirmacao: "Seus filhos trouxeram alegria e propósito para sua vida."
            },
            {
                texto: "Não, preferi não ter.",
                afirmacao: "Você focou em seus projetos pessoais e viagens."
            }
        ]
    },
    {
        enunciado: "Você comprou sua própria casa?",
        alternativas: [
            {
                texto: "Sim, conquistei meu lar.",
                afirmacao: "Você teve estabilidade e um lugar para chamar de seu."
            },
            {
                texto: "Não, continuei alugando.",
                afirmacao: "Você manteve flexibilidade para mudar sempre que quis."
            }
        ]
    },
    {
        enunciado: "Você viajou para fora do país?",
        alternativas: [
            {
                texto: "Sim, conheci outros lugares e culturas.",
                afirmacao: "Essas experiências abriram sua mente e te trouxeram lembranças inesquecíveis."
            },
            {
                texto: "Não, preferi viajar pelo Brasil.",
                afirmacao: "Você descobriu belezas incríveis dentro do seu próprio país."
            }
        ]
    },
    {
        enunciado: "Você se aposentou feliz com a vida que construiu?",
        alternativas: [
            {
                texto: "Sim, realizei todos os meus sonhos.",
                afirmacao: "Você encerrou sua jornada com orgulho e gratidão."
            },
            {
                texto: "Ainda quero conquistar mais coisas.",
                afirmacao: "Você continua buscando novas aventuras e desafios."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu futuro...";
    textoResultado.textContent = historiaFinal + "\n\nHistória criada por Carlos Henrique e Victor Hugo.";
    caixaAlternativas.textContent = "";
}

mostraPergunta();
