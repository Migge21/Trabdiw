function detalharProdutos(idProduto) {
  let requisicao = "https://fakestoreapi.com/products/" + idProduto;
  fetch(requisicao)
    .then((res) => res.json())

    .then((produto) => {
      console.log(produto);
      exibirDetalhes(produto);
    });
}

function exibirDetalhes(produto) {
  console.log(produto);

  var detalhesProduto = document.getElementById("detalhesProduto");

  var html = `
        <div class="d-flex flex-row">
        <div class="DetalhesContainer">
          <div class="DetalhesConteudo">
          <div class=d-flex>
          <div>
            <img
              class="mx-auto"
              src="${produto.image}"
              alt=""
              width="300px"
              height="300px"
              width="fit-content"
            />
            </div>
            <div class="p-3">
              <h3 class="DetalhesTitulo">${produto.title}</h3>        
              <h5 class="green">Avaliações:</h5>    
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                (${produto.rating.rate})
              
              <div class="d-flex flex-column">
                <b>
                  <large class="preco">$${produto.price}</large>
                </b>
                <h4>${produto.description}</h4>
              </div>
              <a class="btn btn-primary" href="index.html">Voltar</a>
            </div>
          </div>
          </div>
        </div>
      </div>
      `;
  console.log(html);
  detalhesProduto.innerHTML = html;
}

window.onload = () => {
  let idParametro = new URLSearchParams(window.location.search);
  let identificador = idParametro.get("id");
  console.log(identificador);
  detalharProdutos(identificador);
};
