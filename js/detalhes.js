function detalharProdutos(idProduto) {
  console.log(idProduto);
  let requisicao =
    "https://fakestoreapi.com/products/category/electronics?id=" + idProduto;
  fetch(requisicao)
    .then((res) => res.json())
    .then((produto) => mostrar(produto));
}

function mostrar(produtosAtual) {
  var conteudoPrincipal = document.getElementById("Principal");

  var cc = produtosAtual
    .map(function (produto) {
      return `<div class="CardContainer">
      <div class="CardConteudo">
        <img
          class="mx-auto"
          src="${produto.image}"
          alt=""
          height="100px"
        />
        <h3 class="CardTitulo">${produto.title}</h3>
        
        <div class="small">
          <span class="fa fa-star checked"></span>
          (${produto.rating.rate})
        </div>
        <div class="d-flex flex-column">
          <b>
            <large>$${produto.price}</large>
          </b>
          <a class="btn btn-primary" href="detalhes.html?id=${produto.id}" onclick="exibirDetalhes(${produto.id})">Detalhes</a>
        </div>
      </div>
    </div>
     `;
    })
    .join("");

  conteudoPrincipal.innerHTML += cc;
}

function exibirDetalhes(idProduto) {
  console.log(idProduto);
  let requisicao = "https://fakestoreapi.com/products/" + idProduto;
  fetch(requisicao)
    .then((res) => res.json())
    .then((produto) => {
      var detalhesProduto = document.getElementById("detalhesProduto");
      var html = `
      <div class="d-flex flex-row">
      <div class="DetalhesContainer">
        <div class="DetalhesConteudo">
          <img
            class="mx-auto"
            src="${produto.image}"
            alt=""
            height="200px"
            width="fit-content"
          />
          <div>
            <h3 class="DetalhesTitulo">${produto.title}</h3>

            <div class="small">
              <span class="fa fa-star checked">Avaliações:</span>
              (${produto.rating.rate})
            </div>
            <div class="d-flex flex-column">
              <b>
                <large class="preco">$${produto.price}</large>
              </b>
              <h4>${produto.description}</h4>
            </div>
            <a class="btn btn-primary">Detalhes</a>
          </div>
        </div>
      </div>
    </div>
    `;
      console.log(html);
      detalhesProduto.innerHTML = html;
    });
}

window.onload = () => {
  let idParametro = new URLSearchParams(window.location.search);
  let identificador = idParametro.get("id");

  detalharProdutos(identificador);
  exibirDetalhes(identificador);
};
