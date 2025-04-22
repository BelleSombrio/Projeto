
let nivelAtual = 1; // Nível atual começa com 1



const perguntas = [
    { id: "resposta1", respostas: ["10", "40", "100"], perguntasTexto: ["Quanto é 7 + 3?", "Quanto é 15 + 25?", "Quanto é 50 + 50?"] },
    { id: "resposta2", respostas: ["16", "60", "120"], perguntasTexto: ["Qual é o dobro de 8?", "Qual é o dobro de 30?", "Qual é o dobro de 60?"] },
    { id: "resposta3", respostas: ["5", "10", "50"], perguntasTexto: ["Quantas balas cada criança ganha?", "Quantas balas cada criança ganha de 20 balas?", "Quantas balas cada criança ganha de 100 balas?"] },
    { id: "resposta4", respostas: ["6", "26", "96"], perguntasTexto: ["Com quantas balas Sofia ficará?", "Com quantas balas ela ficará de 30?", "Com quantas balas ela ficará de 100 balas?"] },
    { id: "resposta5", respostas: ["5", "35", "75"], perguntasTexto: ["Com quantas balas Leo ficará?", "Com quantas balas Leo ficará com 40?", "Com quantas balas Leo ficará com 80?"] },
    { id: "resposta6", respostas: ["6", "20", "40"], perguntasTexto: ["Quanto custam 3 carrinhos?", "Quanto custam 10 carrinhos?", "Quanto custam 20 carrinhos?"] },
    { id: "resposta7", respostas: ["2", "10", "20"], perguntasTexto: ["Quantos brinquedos cada amigo vai ganhar?", "Quantos brinquedos cada um vai ganhar de 30?", "Quantos brinquedos cada um vai ganhar de 100 brinquedos?"] },
    { id: "resposta8", respostas: ["5", "25", "50"], perguntasTexto: ["Quantas maçãs sobraram?", "Quantas maçãs sobraram de 30?", "Quantas maçãs sobraram de 100?"] },
    // Adicionar outras perguntas de português aqui de maneira similar...
];

function verificarResposta(idInput) {
    const input = document.getElementById(idInput); // Pega o input da resposta
    const containerId = idInput.replace('resposta', 'container'); // Id do container da pergunta
    const pergunta = document.getElementById('pergunta' + idInput.replace('resposta', '')); // Pergunta correspondente
    const mensagem = document.getElementById('mensagem' + idInput.replace('resposta', '')); // Mensagem de erro ou sucesso
    const parabens = document.getElementById('parabens' + idInput.replace('resposta', '')); // Parabéns quando acerta

    // Encontra o objeto da pergunta com base no ID
    const perguntaObj = perguntas.find(p => p.id === idInput);

    // Resposta correta de acordo com o nível atual
    const respostaCorreta = perguntaObj.respostas[nivelAtual - 1];

    const respostaUsuario = input.value.trim(); // Resposta digitada pelo usuário

    // Verifica se a resposta do usuário está correta
    if (respostaUsuario === respostaCorreta) {
        // Se a resposta estiver correta
        mensagem.innerText = "✅ Resposta correta!";
        mensagem.style.color = "green";
       

        // Passa para o próximo nível
        if (nivelAtual < 3) {
            nivelAtual++; // Aumenta o nível
            pergunta.innerText = perguntaObj.perguntasTexto[nivelAtual-1]; // Atualiza a pergunta com o próximo nível
            input.value = ""; // Limpa o campo de resposta
        } else {
            // Se o jogador completou todos os níveis, parabéns!
            parabens.innerText = "Parabéns! Você completou todos os níveis!";
            parabens.style.color = "green";
            document.getElementById(containerId).style.backgroundColor = "lightgreen"; // Marca o container como completado
        }
    } else {
        // Se a resposta estiver errada
        mensagem.innerText = "❌ Resposta errada. Tente novamente.";
        mensagem.style.color = "red";
    }
}
