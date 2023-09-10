// DOM -> DOCUMENT OBJECT MODEL -> 
//MODELO DE OBJETO DE DOCUMENTO

// MODELO DA PÁGINA HTML -> 


// PARECE COM UMA ÁRVORE GENEALÓGICA
//TODO O CONTEÚDO DE FORMA HIERARQUICA.


// AO UTILIZAR O JAVASCRIPT NO DOM PODEMOS:

// - LER ELEMENTOS

// - CRIAR NOVOS ELEMENTOS

// - EXCLUIR ELEMENTOS

// - MODIFICAR ELEMENTOS

// - MODIFICAR ESTILO...


// Intermédiario entre HTML e JavaScript, Js vai usar o DOM para interagir com sua página HTML


// O DOM ELE É MUITO VERBOSO -> SIGNIFICA que usa muitas
// palavras para expressar uma ideia, MUITOS PASSOS PARA CHEGAR ATÉ UMA AÇÃO SIMPLES!


// getElementById ->
// vai capturar um único elemento DOM pelo ID utilizado na Tag.
let tituloH1 = document.getElementById("titulo")
console.log(tituloH1)
tituloH1.style.color = "red"

// getElementsByTagNames -> 
//pega vários elementos pelo nome da Tag, 
//esses elementos são retornados em um array chamado HTMLCollection
const texto = document.getElementsByTagName("p")
console.log(texto)
texto[0].style.border = "solid 1px green"
texto[1].style.backgroundColor = "pink"

// getElementsByClassName 
//-pega vários elementos pelo nome da class, 
//esses elementos são retornados em um array chamado HTMLCollection
const textoParagrafo = document.getElementsByClassName("paragrafo")
console.log(textoParagrafo)
textoParagrafo[0].style.backgroundColor = "gold"

// querySelector -> 
//vai capturar um único elemento pegar
// tanto pelo nome da tag, .class ou #id
const alterartext = document.querySelector(".paragrafo")
alterartext.style.padding = "20px"

const testandoTag = document.querySelector("p")
console.log(testandoTag)
testandoTag.style.textAlign = "center"

const testandoId = document.querySelector("#titulo")
console.log(testandoId)
testandoId.style.textAlign = "center"

// querySelectorAll -> 
//vai capturar vários elementos e guardar esses elementos em um array chamado NodeCollection
let texte = document.querySelectorAll("p")
console.log(texte)
texte[0].style.backgroundColor ="brown"
// let titulo = document.querySelector("h1");
// let modal = true;

// Aqui criamos um pequeno modal que irá verificar a variável
// e veradeira ou falsa se for verdadeira ele irá dar a transição de 360deg se for falsa ele irá aplicar -360deg

// EVENTOS -> são responsáveis por acionar as nossas funções em nossa página, existem vários tipos de eventos um deles é o evento de clique que se chama onclick -> são colocados no HTML

// function teste() {
//   if (modal == true) {
//     titulo.style.transition = "3.5s";
//     titulo.style.transform = "rotate(360deg)";
//     modal = false;
//   } else {
//     modal = true;
//     titulo.style.transition = "3.5s";
//     titulo.style.transform = "rotate(-360deg)";
//   }
// }

let numeroCodigo = document.querySelector("h1");
let adicao = 0;
function somar() {
  adicao += 1;
  numeroCodigo.innerText = adicao;
}
// Desvantagens de Usar o DOM
// Desempenho: Manipular o DOM frequentemente pode ser lento e custoso em termos de desempenho, principalmente em documentos grandes.

// Complexidade: A estrutura de árvore do DOM pode se tornar muito complexa em páginas grandes ou dinâmicas.

// Compatibilidade entre Navegadores: Embora os navegadores modernos sejam bastante compatíveis com as APIs do DOM, ainda existem diferenças sutis que podem causar problemas.

// Verbosidade: As operações de manipulação do DOM em JavaScript puro podem exigir muito código.

// Refluxos e Repinturas: Manipulações inadequadas podem levar a múltiplos refluxos e repinturas na página, afetando o desempenho.

// Manutenibilidade: Com o aumento da complexidade, o código que manipula o DOM pode se tornar difícil de manter e depurar.
