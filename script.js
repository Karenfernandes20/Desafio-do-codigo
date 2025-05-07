// Página index.html
if (window.location.pathname.includes("index.html")) {
    function iniciar() {
      const nome = document.getElementById("nome").value.trim();
  
      if (nome === "") {
        alert("Por favor, digite seu nome.");
        return;
      }
  
      localStorage.setItem("nomeDoJogador", nome);
      window.location.href = "jogo.html";
    }
  
    // Torna a função acessível ao botão
    window.iniciar = iniciar;
  }
  
  // Página jogo.html
  if (window.location.pathname.includes("jogo.html")) {
    const nome = localStorage.getItem("nomeDoJogador");
    const saudacao = document.getElementById("saudacao");
  
    if (saudacao) {
      saudacao.innerText = nome ? `Olá, ${nome}!` : "Olá, jogador!";
    }
  }
  

  function darZoom() {
    const imagem = document.getElementById("imagemZoom");
    imagem.classList.toggle("zoom");
  }
  