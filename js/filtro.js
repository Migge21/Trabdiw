function Mostrar(arroz) {
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
            <a class="btn btn-outline-success" href="detalhes.html?id=${produto.id}">Detalhes</a>
          </div>
        </div>
      </div>
       `;
    })
    .join("");

  conteudoPrincipal.innerHTML += cc;
}

function MaisProcurados(arroz, limite) {
  var conteudoPrincipal = document.getElementById("Procurados");

  var cc = arroz
    .slice(0, limite)
    .map(function (produto) {
      return `<div>
      <div class="CardConteudoEsquerda">
      <a href="detalhes.html?id=${produto.id}">
        <img
          class="imagem_venda_esquerda"
          src="${produto.image}"
          alt=""
          
        />
        </a href="">
        <div class="p-2">
          <h5 class="CardTitulo">${produto.title}</h5>

          <div class="small">
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span>
            (${produto.rating.rate})
          </div>
          <div class="d-flex flex-row">
            <b>
              <p>$${produto.price}</p>
            </b>
            
          </div>
        </div>
      </div>
    </div>`;
    })
    .join("");

  conteudoPrincipal.innerHTML += cc;
}

// function pesquisar() {
//   var palavraChave = document.getElementById("palavraChaveInput").value;

//   window.location.href = "pesquisa.html?search=" + palavraChave;
// }

// function buscarPorPalavraChave() {
//   const urlParams = new URLSearchParams(window.location.search);
//   const palavraChave = urlParams.get("search");

//   // if (produtosRelacionados === "") {
//   //   var conteudoPrincipal = document.getElementById("ResultadoPesquisa");
//   //   conteudoPrincipal.innerText = "Erro: Não temos este produto.";
//   //   return;
//   // }

//   fetch("https://fakestoreapi.com/products/category/electronics")
//     .then((resposta) => resposta.json())
//     .then((dados) => {
//       var produtosRelacionados = dados.filter(function (produto) {
//         return produto.title.toLowerCase().includes(palavraChave.toLowerCase());
//       });

//       var conteudoPrincipal = document.getElementById("ResultadoPesquisa");

//       var cc = produtosRelacionados
//         .map(function (produto) {
//           return `<div class="CardContainer">
//         <div class="CardConteudo">
//           <img
//             src="${produto.image}"
//             alt=""
//             height="150px"
//           />
//           <h4 class="CardTitulo">${produto.title}</h4>

//           <div class="small">
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             <span class="fa fa-star checked"></span>
//             (${produto.rating.rate})
//           </div>
//           <div class="d-flex flex-column">
//             <b>
//               <p>$${produto.price}</p>
//             </b>
//             <a class="btn btn-outline-success" href="detalhes.html?id=${produto.id}">Detalhes</a>
//           </div>
//         </div>
//       </div>
//        `;
//         })
//         .join("");

//       conteudoPrincipal.innerHTML = cc;
//     });
// }

function buscarNoServidor() {
  const urlParams = new URLSearchParams(window.location.search);
  const palavraChave = urlParams.get("search");

  fetch("https://fakestoreapi.com/products/category/electronics")
    .then((resposta) => resposta.json())
    .then((dados) => {
      Mostrar(dados);
      MaisProcurados(dados, 3);
    });
}

window.onload = buscarNoServidor();
