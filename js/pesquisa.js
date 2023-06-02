function pesquisar() {
  var palavraChave = document.getElementById("palavraChaveInput").value;

  window.location.href = "pesquisa.html?search=" + palavraChave;
}

function buscarPorPalavraChave() {
  const urlParams = new URLSearchParams(window.location.search);

  const palavraChave = urlParams.get("search");

  //   if (produtosRelacionados == "") {
  //     return;
  //   }

  fetch("https://fakestoreapi.com/products/category/electronics")
    .then((resposta) => resposta.json())
    .then((dados) => {
      var produtosRelacionados = dados.filter(function (produto) {
        return produto.title.toLowerCase().includes(palavraChave.toLowerCase());
      });

      var conteudoPrincipal = document.getElementById("ResultadoPesquisa");

      var cc = produtosRelacionados
        .map(function (produto) {
          return `<div class="d-flex flex-row justify-content-center m-2">
          <div class="DetalhesContainer">
            <div class="DetalhesConteudo">
              <div class="separacao">
                <div class="pr-2">
                  <img
                  class="produto-detalhesimg"
                    src="${produto.image}"
                    alt=""
                  />
                </div>
                <div class="p-3">
                  <h3 class="ColorVar">${produto.title}</span></h3>
                  <h4 >Avaliações: <span>${produto.rating.rate}</span></h4>
                  <h4>Preço: <span>$${produto.price}</span></h4>
                  
                  <h3>Descrição:<br /></h3>
                  <p class="DetalhesDescricao">${produto.description}</p>
                  <a class="btn btn-outline-danger">Comprar</a>
                  <a class="btn btn-outline-success" href="index.html">Voltar</a>
                </div>
              </div>
            </div>
          </div>
        </div>
         `;
        })
        .join("");

      conteudoPrincipal.innerHTML = cc;
    });
}
