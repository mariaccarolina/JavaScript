//Eventos

// DOM -> DOCUMENT OBJECT MODEL -> MODELO DE OBJETO DE DOCUMENTO

// QUE UMA REPRESENTAÇÃO DA ESTRUTURA DA NOSSA PÁGINA DE FORMA HIERARQUICA, COMO SE FOSSE UM RAIO-X DA SUA PÁGINA.

let tituloPrincipal = document.querySelector("h1");
// console.log(tituloPrincipal);

tituloPrincipal.style.fontSize = "30px";

let imagem = document.querySelector("img");
console.log(imagem);

function aparecer() {
  imagem.src = "https://i.ytimg.com/vi/JweTKiOicSk/maxresdefault.jpg";
}

// Eventos -> São os responsáveis por acordarem as nossas funções adormecidas, eles são passados direto no HTML, e um desses tipos de eventos é o onclick="" que chamará a função no momento em que o usuário clicar no elemento.
