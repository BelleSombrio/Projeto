// Variável para armazenar os pontos
let pontos = 0;

// Função para verificar a resposta
function verificarResposta(inputId, respostaCorreta) {
    // Obtendo a resposta inserida, removendo espaços extras e transformando em minúsculas
    const resposta = document.getElementById(inputId).value.trim().toLowerCase();
    const mensagem = document.getElementById("mensagem" + inputId.slice(-1));

    // Comparando a resposta do usuário com a resposta correta, ambas em minúsculas
    if (resposta === respostaCorreta.toLowerCase()) {
        mensagem.textContent = "Resposta correta!";
        mensagem.style.color = "green";

        // Incrementar 10 pontos
        pontos += 10;

        // Atualizar a exibição dos pontos
        document.getElementById("contador").textContent = "Pontos: " + pontos;
    } else {
        mensagem.textContent = "Resposta errada. Tente novamente.";
        mensagem.style.color = "red";
    }
}
