//funções
// Bloco de código que pode ser executado e reutilizado;
//que agrupa uma sequência de instruções para executar uma tarefa

//estrutura de uma função:

// function nomeDaFuncao(parâmentros){
//   codigo a ser executado
// return saida
// }
// nomeDaFuncao(argumento)


//primeiro passo para a criação de uma função é a declaração dela.
// A função vai ser guardada na memória e vai esperar ser chamada.

function infos() {
  console.log("Joy");
  console.log("20 anos");
  console.log("São Paulo");
}

//segundo passo - execultar a função chamando/invocando ela
infos();


// Também é possível declarar funções dentro de variáveis, 
//desta maneira: `const variavel = function() {}`.

// As funções também contem entrada de dados
// As entradas da função são chamadas de parâmetros ou argumentos
// podemos entender esses parâmetros como variáveis especificas 
//para aquela função
// As saídas da função são chamadas de retorno

const infor = function (nome, idade, cidade){
  console.log(nome);
  console.log(idade);
  console.log(cidade);
  console.log(nome, idade, cidade);
};

infor("Joy", "20 anos", "São paulo"); 
//(arguments/argumentos execultados)

//exemplo:
// const somaArea = function(valor1, valor2) {
//   const area = valor1 + valor2;
//   return area;
// }

// somaArea(2,2)

// também podemos utilizar variáveis como valor dos nossos parâmetros
let meuNome = `Joy`
function mostrarNome(nome) {
console.log(`Meu nome é ${nome}`)
}
mostrarNome(meuNome)


// Função com return
//capturar e mostrar o resultado que precisamos

function soma(n1, n2) {
  return n1 + n2;
}
console.log(soma(10,4))

//fazendo uma vitamina de frutas
function vitamina(fruta1, fruta2) {
  return fruta1 + fruta2;
}

const copo = vitamina("banana", "mamão");
console.log(copo);

// // peso, altura são parâmetros
// function imc(peso, altura){
//   const imc = peso / (altura **2);
//   return imc;// Para capturar e retornar o valor devemos usar a palavra return
// }

// console.log(imc(54, 1.74)) // 54,1.70 são os argumentos
// // Separar por vígula cada parâmetro, ou você pode usar nenhum mesmo.

// function myName(){
//   console.log("Carol")
// }

// myName() // chamada da função

// function soma(){
//   let a = 2;
//   let b = 2;
//   let total = a + b;
//   return total;
// }

// // A variavel está recebendo o valor da função soma;
// let totalSoma = soma(); 
// console.log(totalSoma) // 4

// // função de adição que vai receber parametros
// function adicao(a , b) {
//   return a + b;
// }

// console.log(adicao(5,5)) //10
// console.log(adicao(20,100)) // 120

