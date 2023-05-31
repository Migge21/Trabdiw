function detalharProdutos(idProduto) {
  let requisicao = "https://fakestoreapi.com/products/" + idProduto;
  fetch(requisicao)
    .then((res) => res.json())
    .then((produto) => exibirDetalhes(produto));
}

function exibirDetalhes(produto) {
  console.log(produto);

  var detalhesProduto = document.getElementById("detalhesProduto");

  var html = `
  <div class="d-flex flex-row">
  <div class="DetalhesContainer">
    <div class="DetalhesConteudo">
      <div class="d-flex">
        <div class="d-flex pr-2">
          <img
            src="${produto.image}"
            alt=""
            width="400px"
            height="300px"
            
          />
        </div>
        <div class="p-3">
          <h3 class="ColorVar">${produto.title}</span></h3>
          <h4 >Avaliações: <span>${produto.rating.rate}</span></h4>
          <h4>Preço: <span>$${produto.price}</span></h4>
          
          <h3>Descrição:<br /></h3>
          <p class="DetalhesDescricao">${produto.description}</p>
          <a class="btn btn-primary">Comprar</a>
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
