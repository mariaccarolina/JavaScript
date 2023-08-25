// Objeto
// Um objeto é uma coleção de propriedades e uma propriedade recebe
// um nome(chave)e um valor

let aluno = {
  nome: "Eduarda Maria",
  idade: 17,
  situação: "recuperação",
  aprovado: "em andamento",
}

//atualizar uma informação:
// aluno.nome = "Juliana";

// para remover uma propriedade do objeto
delete aluno.aprovado;

//Basta adicionar um novo nome e definir o valor.
aluno.telefone = "548456-41848"
console.log(aluno)

let cadastros = [
  {
    nome: "brendon",
    idade: 24,
    musica_fav: ["leal", "nill ", "radiohead"]
  },
  {
    nome: "joy",
    idade: 20,
    musica_fav: ["kpop", "rock", "indie"]
  },
  {
    nome: "karynne",
    idade: 18,
    musica_fav: ["rock", "pop", "pop-rock"]
  }
];

console.log(`${cadastros[2].nome} gosta de ${cadastros[2].musica_fav[1]}`);
