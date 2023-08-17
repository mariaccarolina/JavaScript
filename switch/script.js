// SWITCH
// A condicional switch avalia uma expressão
// combinando um valor de uma expressão com uma case;

var comida = "Laranja";

switch (comida) {
  case "Laranja": //Compara o valor da expressao, caso seja true, retorna essa msg
    console.log("Sua comida favorita é banana!");
    break; //break é a palavra reservada que finaliza a execução do switch / Se não tiver o break, vai executar as linhas de codigo a baixo
  case "Limão":
    console.log("Sua comida favorita é Laranja!");
    break;
  default:
    //se nenhum dos cases atenderem à expressão declarada no switch
    console.log("Não sei sua comida!");
}
// Boas vindas
let sexo = "feminino";

switch (sexo) {
  case "masculino":
    console.log("Seja bem-vindo!");
    break;
  case "feminino":
    console.log("Seja bem-vinda!");
    break;
  default:
    console.log("eita!");
}

let nomes = "Carolina";

switch (nomes) {
  case "Débora":
    console.log("Olá Débora!");
    break;
  case "Deminho":   
    console.log("Olá Deminho!");
    break;
  case "Dafne":
    console.log("Olá Dafne!");
    break;
  default:
    console.log("Seu nome não foi encontrado!");
}
