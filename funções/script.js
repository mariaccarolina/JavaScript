//funções
// Bloco de código que pode ser executado e reutilizado;
//que agrupa uma sequência de instruções para executar uma tarefa

//estrutura de uma função:
// function nomeDaFuncao(parâmentros){
//   codigo a ser executado
// }
// nomeDaFuncao(argumento)


// peso, altura são parâmetros
function imc(peso, altura){
  const imc = peso / (altura **2);
  return imc;// Para capturar e retornar o valor devemos usar a palavra return
}

console.log(imc(54, 1.74)) // 54,1.70 são os argumentos
// Separar por vígula cada parâmetro, ou você pode usar nenhum mesmo.

function myName(){
  console.log("Carol")
}

myName() // chamada da função

function soma(){
  let a = 2;
  let b = 2;
  let total = a + b;
  return total;
}

// A variavel está recebendo o valor da função soma;
let totalSoma = soma(); 
console.log(totalSoma) // 4

// função de adição que vai receber parametros
function adicao(a , b) {
  return a + b;
}

console.log(adicao(5,5)) //10
console.log(adicao(20,100)) // 120

