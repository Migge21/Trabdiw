function mostrar(arroz) {
  var conteudoPrincipal = document.getElementById("Principal");

  var cc = arroz
    .map(function (produto) {
      return `<div class="CardContainer">
        <div class="CardConteudo">
          <img
            src="${produto.image}"
            alt=""
            height="150px"
          />
          <h4 class="CardTitulo">${produto.title}</h4>
          
          <div class="small">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            (${produto.rating.rate})
          </div>
          <div class="d-flex flex-column">
            <b>
              <p>$${produto.price}</p>
            </b>
            <a class="btn btn-primary" href="detalhes.html?id=${produto.id}"">Detalhes</a>
          </div>
        </div>
      </div>
       `;
    })
    .join("");

  conteudoPrincipal.innerHTML += cc;
}
function buscarNoServidor() {
  fetch("https://fakestoreapi.com/products/category/electronics")
    .then((resposta) => resposta.json())
    .then((dados) => mostrar(dados));
}

window.onload = buscarNoServidor();
