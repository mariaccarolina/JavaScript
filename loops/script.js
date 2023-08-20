//Estrutura de repetição while
/** vamos explorar is loops, o loop é uma  estrutra de repetição
 que podem executar um bloco de código diversas vezes de forma
 automatizada. ótimos para fazer tarefas repedidas.*/

//  vamos supor que queira contar de 1 até 100 apenas adicionando +1 á uma variável chamada número

let numero = 1;

console.log(numero + 1);
console.log(numero + 1);
console.log(numero + 1);
console.log(numero + 1);
// mas porque está aparecendo somente o 2 no console.log?
// estamos apenas falando que o número 1 vai somar com o outro 1
// o que devemos fazer e somar e atualizar a nossa variável, ou seja
// 1+1 = 2
// 2+1 = 3
// 3+1 = 4
// 4+1 = 5
// e assim sucessivamente... e isso que queremos fazer
// para chegarmos até tal resultado,c vamos conhecer e utilizar os

//operadores de atribuição!!!

let saldo = 100;

// atribuição simples
// atribui um valor a uma variável
saldo = 150;

// += atribuição de adição
// atribui e soma um valor a uma variável

// forma simplificada
saldo += 150;
// forma completa
saldo = saldo + 150;

// - atribui uma subtração
// atribui e subtrai um valor à uma variável

// forma simplificada
saldo -= 150;

// forma completa
saldo = saldo - 150;

// * atribui uma multiplicação
// atribui e subtrai um valor à uma variável

// forma simplificada
saldo *= 2;

// forma completa
saldo = saldo * 2;
console.log(saldo);

// / atribui uma divisão
// atribui e divide um valor à uma variável

// forma simplificada
saldo /= 2;

// forma completa
saldo = saldo /= 2;

// ++ atribui um incremento
// -- atribui um decremento

// agora conseguimos contar até 100
// let contador2 = 1;

// console.log((contador2 += 1));
// console.log((contador2 += 1));
// console.log((contador2 += 1));
// porém ainda sim é muito trabalhoso para chegar até a 100, e para fazer isso de uma forma mais automática utilizamos os loops!!!

/* Estrutura do while

variável = valor

while (condição){
 tarefa
 iteração
} */

//Uma declaração que inicia com a palavra-chave while cria um loop.
// let contador3 = 1;

// while (contador3 < 100) {
//   console.log((contador3 += 1));
// }

let contador = 0;
  while (contador < 12) {
    contador++; //ou +=1
    console.log(contador);
  }
  /** 

  No while um bloco de código é executado ate que 
  um teste condicional se torne falso.
 
 definindo aumento de salário
 
 let salario = 1000
 
  while (salario < 3000){
  salario +=100 
  
  console.log(` o salário ainda é R$ ${salario}`)
  }
*/

// loops com For --------------------------------
/** estrutura
for(variavel contadora; condição; iteração){
  tarefa
}
*/

// for (let contador1 = 0; contador1 <= 12; contador1 += 1) console.log(contador1);

//Nesse caso o ponto e vírgula é obrigatório após cada valor, as chaves são opcionais.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

/** do...while - faça...enquanto

do{
  instrucao
 } while (expressao)

 

 let n = 0

 do {
   n++
 } while (n < 10)
 console.log(n)
*/
// enquanto n for menor que 10 ele incrementa 1
//e depois verifica a condição
