// O que são arrays?
// - Conjuntos de dados;
// - Sao listas de objetos que tem vários métodos;
// - Estrutura para armazenar dados;
// - Variável especial que pode conter mais de um valor;

//Pra que serve um array?
// - Para armazenar vários valores em uma única variável;
// - Para armazenar informações de um mesmo tipo;
// - Array pode armazenar muitos valores com um único nome

//Como criar um array?
// [] colchetes
// Cada item é separado por vírgula;
// A posição do array inicia de 0;

let nomes = ["Carol", "Demerson", "Dafne", "Débora"];
console.log(nomes); // Retorna a lista de nomes

console.log(nomes[0]); // Retorna a primeira posição do array

console.log(nomes.length); // Retorna 4
// a propriedade length retorna a quantidade de caracteres de uma
// string ou o tamanho de um array
// numero de elementos;

console.log(nomes[1].length); //Retorna 8
// No nome Demerson [1] tem 8 letras;

//Loop/array
let cores = ["rosa", "azul", "branco", "verde", "roxo"];

for (let item = 0; item < cores.length; item++) {
  console.log(cores[item]);
} // Retorna todos os itens de cores;

let comodosDaCasa = [
  "quarto",
  "cozinha",
  "sala",
  "banheiro",
  "lavanderia",
  "area de lazer"
];

for (let i = 0; i < comodosDaCasa.length; i++) {
  console.log(comodosDaCasa[i]);
} // Retorna a lista do meu array de comodos da casa;
