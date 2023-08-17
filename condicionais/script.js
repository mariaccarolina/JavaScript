//Condicionais são uma forma de fazer o computador
// tomar uma decisao

// Se (if) / Senão (else)

// if(condição){codigo a ser executado}

// if(codição){
//   console.log("mensagem a ser exibida caso a condição seja true")
// } else{
//   console.log(mensagem caso a condição seja false)
// }

let maiorDeIdade = true;

if (maiorDeIdade) { 
  // true
  console.log("Você é maior de idade!"); //
} else {
  console.log("Você é menor de idade!");
}

let dia = false;

if (dia) {
  console.log("Apague as luzes, pois já é dia!");
  //só se for verdadeiro
} else {
  console.log("E hora de acender as luzes!");
}

//Operadores de comparação:
// = atribuição;
// == (igual a) (1 == 2) verifica a igualdade;
// === (estritamente igual) verifica o valor e tipo; 2 === 2
// != (diferente) (1 != 2)
// !== (diferente de) verifica se os valores e tipos são difierente;
// > maior (5 > 1)
// < menor (5 < 10)
// >= maior igual
// <= menor igual

//obs: não podemos usar dessa forma => (função)

let notaDesafio = 6; // = fez o papel de atribuição
notaDesafio = 10;

if (notaDesafio >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}

let saldoBancario = 9;

if (saldoBancario >= 200) {
  console.log("Irei ao Shopping Rio Mar passear com alguem!");
} else if (saldoBancario >= 100) {
  console.log("Eu irei sozinho pois estou com pouco saldo bancário!");
} else if (saldoBancario <= 10) {
  console.log("Vou ter que ficar em casa!");
}

//Operadores lógicos:

// && (and) e
// Retorna verdadeiro se os dois valores forem verdadeiros "um && outro"

// login
let userName = "@carolina";
let password = 123456;

if (userName === "@carolina" && password === 123456) {
  console.log("Login efetuado com sucesso");
} else {
  console.log("Senha incorreta! Tente novamente!");
}

// || (or) ou
// verifica se uma expressao OU a outra é verdadeira!

let eleitor = 12;

if (eleitor <= 16 || eleitor >= 60) {
  console.log("Seu voto é opcional!");
} else {
  console.log("Você deve votar");
}
