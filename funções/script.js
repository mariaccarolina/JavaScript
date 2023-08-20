//funções
// Bloco de código que pode ser executado e reutilizado;

//estrutura de uma função:
// function nomeDaFuncao(parâmentros){
//   codigo a ser executado
// }
// nomeDaFuncao(argumento)


// peso, altura são parâmetros
function imc(peso, altura){
  const imc = peso / (altura **2);
  return imc;
}

console.log(imc(54, 1.74)) // 54,1.70 são os argumentos
// Separar por vígula cada parâmetro, ou você pode usar nenhum mesmo.

function myName(){
  console.log("Carol")
}

myName()