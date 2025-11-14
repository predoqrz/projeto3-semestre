// Função para carregar o cabeçalho dinâmico em todas as páginas
function carregarHeader() {
  fetch("header.html")
    .then(response => {
      if (!response.ok) {
        throw new Error("Erro ao carregar o cabeçalho");
      }
      return response.text();
    })
    .then(data => {
      // Cria um container temporário
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // Adiciona o header e navbar antes do restante do conteúdo
      document.body.prepend(tempDiv);

      // Reativa o contador do carrinho se existir
      if (typeof atualizarContador === "function") {
        atualizarContador();
      }

      // Reativa a busca se ela estiver no header
      const inputBusca = document.getElementById("search");
      if (inputBusca) {
        inputBusca.addEventListener("input", () => {
          if (typeof buscarProduto === "function") buscarProduto();
        });
      }

      console.log("✅ Cabeçalho carregado com sucesso!");
    })
    .catch(error => {
      console.error("⚠️ Erro ao carregar cabeçalho:", error);
    });
}

// Executa o carregamento quando o documento estiver pronto
document.addEventListener("DOMContentLoaded", carregarHeader);
