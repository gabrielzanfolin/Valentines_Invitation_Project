const btnSim = document.getElementById('btn-sim');
const btnNao = document.getElementById('btn-nao');
const pergunta = document.getElementById('pergunta');
const imagem = document.getElementById('imagem-principal');

let escala = 1;
let indiceFrase = 0;
let ultimoIndiceCanto = -1; // Guarda o último canto usado

const frases = [
    "Tem certeza?", "AMOR!?", "Oi?", "Mais uma chance!",
    "Escolhe a certa dessa vez", "Opção errada", "Pensa mais uma vez"
];

btnNao.addEventListener('mouseover', () => {
    btnNao.style.position = 'fixed';
    btnNao.style.zIndex = '10000';

    const larguraBotao = btnNao.offsetWidth;
    const alturaBotao = btnNao.offsetHeight;
    const margem = 50;

    const posicoes = [
        { x: margem, y: margem }, // Superior Esquerdo
        { x: window.innerWidth - larguraBotao - margem, y: margem }, // Superior Direito
        { x: margem, y: window.innerHeight - alturaBotao - margem }, // Inferior Esquerdo
        { x: window.innerWidth - larguraBotao - margem, y: window.innerHeight - alturaBotao - margem } // Inferior Direito
    ];

    let novoIndice;
    // Loop que garante que o novo canto seja diferente do anterior
    do {
        novoIndice = Math.floor(Math.random() * posicoes.length);
    } while (novoIndice === ultimoIndiceCanto);

    ultimoIndiceCanto = novoIndice; // Atualiza a memória
    const destino = posicoes[novoIndice];

    btnNao.style.left = `${destino.x}px`;
    btnNao.style.top = `${destino.y}px`;

    // Atualiza texto e escala
    btnNao.innerText = frases[indiceFrase];
    indiceFrase = (indiceFrase + 1) % frases.length;

    escala += 0.3; 
    btnSim.style.transform = `scale(${escala})`;
});

btnSim.addEventListener('click', () => {
    pergunta.innerText = "Acho bem 🥰"; 
    imagem.src = "/static/imagens/dog.gif"; 
    btnSim.style.display = 'none';
    btnNao.style.display = 'none';
});