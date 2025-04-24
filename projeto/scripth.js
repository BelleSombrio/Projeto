let nivelAtual = 1; // Nível atual começa com 1 (indica em que nível o jogador está, começando do primeiro)

const perguntas = [
    { id: "resposta1", nivel: 1, respostas: ["10", "40", "100"], perguntasTexto: ["Quanto é 7 + 3?", "Quanto é 15 + 25?", "Quanto é 50 + 50?"] },
    { id: "resposta2", nivel: 1, respostas: ["16", "60", "120"], perguntasTexto: ["Qual é o dobro de 8?", "Qual é o dobro de 30?", "Qual é o dobro de 60?"] },
    { id: "resposta3", nivel: 1, respostas: ["5", "10", "50"], perguntasTexto: ["Quantas balas cada criança ganha?", "Quantas balas cada criança ganha de 20 balas?", "Quantas balas cada criança ganha de 100 balas?"] },
    { id: "resposta4", nivel: 1, respostas: ["6", "26", "96"], perguntasTexto: ["Com quantas balas Sofia ficará?", "Com quantas balas ela ficará de 30?", "Com quantas balas ela ficará de 100 balas?"] },
    { id: "resposta5", nivel: 1, respostas: ["5", "35", "75"], perguntasTexto: ["Com quantas balas Leo ficará?", "Com quantas balas Leo ficará com 40?", "Com quantas balas Leo ficará com 80?"] },
    { id: "resposta6", nivel: 1, respostas: ["6", "20", "40"], perguntasTexto: ["Quanto custam 3 carrinhos?", "Quanto custam 10 carrinhos?", "Quanto custam 20 carrinhos?"] },
    { id: "resposta7", nivel: 1, respostas: ["2", "10", "20"], perguntasTexto: ["Quantos brinquedos cada amigo vai ganhar?", "Quantos brinquedos cada um vai ganhar de 30?", "Quantos brinquedos cada um vai ganhar de 100 brinquedos?"] },
    { id: "resposta8", nivel: 1, respostas: ["5", "25", "50"], perguntasTexto: ["Quantas maçãs sobraram?", "Quantas maçãs sobraram de 30?", "Quantas maçãs sobraram de 100?"] },
    { id: "resposta9", nivel: 1, respostas: ["paz", "vó", "para"], perguntasTexto: ["'paz' ou 'páz'?'", "'vó' ou 'voó'?", "'pára' ou 'para'?"] },
    { id: "resposta10", nivel: 1, respostas: ["como", "li", "foi"], perguntasTexto: ["Eu ____ uma maçã.", "Eu ____ um livro.", "Ela ____ para a escola."] },
    { id: "resposta11", nivel: 1, respostas: ["professora", "rainha", "madrinha"], perguntasTexto: ["Qual é o feminino de 'professor'", "Qual é o feminino de 'rei'?", "Qual é o feminino de 'padrinho'?"] },
    { id: "resposta12", nivel: 1, respostas: ["quente", "triste", "tristeza"], perguntasTexto: ["Qual é o antônimo de 'frio'?", "Qual é o antônimo de 'feliz'?", "Qual é o antônimo de 'alegria'?"] },
    { id: "resposta13", nivel: 1, respostas: ["heróico", "fantástico", "café"], perguntasTexto: ["Como se escreve corretamente: heroico ou heróico?", "Como se escreve corretamente: fantástico ou fantastico?", "Como se escreve corretamente: café ou cafe?"] },
    { id: "resposta14", nivel: 1, respostas: ["balanço", "sem", "cheio"], perguntasTexto: [" A menina foi ao parque para brincar no ____.", "O cachorro está ____ água.", "O carro está ____ de gasolina."] },
    { id: "resposta15", nivel: 1, respostas: ["cachorros", "pássaros", "anexos"], perguntasTexto: ["Qual é o plural de 'cachorro'?", "Qual é o plural de 'pássaro'?", "Qual é o plural de 'anexo'?"] },
    { id: "resposta16", nivel: 1, respostas: ["correu", "escreveu", "falou"], perguntasTexto: [" Qual é o passado de 'correr'?", "Qual é o passado de 'escrever'?", "Qual é o passado de 'falar'?"] },
];

function verificarResposta(idInput) {
    const input = document.getElementById(idInput); // Pega o input da resposta (campo de texto onde o usuário digita a resposta)
    const containerId = idInput.replace('resposta', 'container'); // Cria o ID do container da pergunta substituindo 'resposta' por 'container'
    const pergunta = document.getElementById('pergunta' + idInput.replace('resposta', '')); // Obtém a pergunta correspondente ao ID de resposta
    const mensagem = document.getElementById('mensagem' + idInput.replace('resposta', '')); // Obtém a mensagem que será exibida (erro ou sucesso)
    const parabens = document.getElementById('parabens' + idInput.replace('resposta', '')); // Obtém o elemento de "parabéns" (quando o jogador termina)

    // Encontra o objeto da pergunta com base no ID
    const perguntaObj = perguntas.find(p => p.id === idInput); // Localiza a pergunta no array de perguntas baseado no ID
    const nivelAtual = perguntaObj.nivel;
    // Resposta correta de acordo com o nível atual
    const respostaCorreta = perguntaObj.respostas[nivelAtual - 1]; // Obtém a resposta correta para o nível atual (subtrai 1 porque o índice é baseado em 0)

    const respostaUsuario = input.value.trim(); // Obtém a resposta digitada pelo usuário e remove espaços extras

    // Verifica se a resposta do usuário está correta
    if (respostaUsuario === respostaCorreta) {
        // Se a resposta estiver correta
        mensagem.innerText = "✅ Resposta correta!"; // Mensagem de sucesso
        mensagem.style.color = "green"; // Muda a cor da mensagem para verde

        // Passa para o próximo nível
        if (nivelAtual < perguntaObj.respostas.length) {
            // Avança dentro do mesmo grupo
            perguntaObj.nivel++;
            pergunta.innerText = perguntaObj.perguntasTexto[perguntaObj.nivel - 1];
            input.value = "";
        } else {
            // Se o jogador completou todos os níveis, parabéns!
            parabens.innerText = "Parabéns! Você completou todos os níveis!"; // Exibe mensagem de parabéns
            parabens.style.color = "green"; // Muda a cor da mensagem de parabéns para verde
            document.getElementById(containerId).style.backgroundColor = "lightgreen"; // Marca o container como completado (muda o fundo para verde claro)
            nput.disabled = true;
        }
    } else {
        // Se a resposta estiver errada
        mensagem.innerText = "❌ Resposta errada. Tente novamente."; // Mensagem de erro
        mensagem.style.color = "red"; // Muda a cor da mensagem para vermelho
    }
}
