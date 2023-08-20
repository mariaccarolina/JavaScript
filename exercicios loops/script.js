for(let i = 0; i < 10; i++){
  console.log(i) // Retorna de 0 a 9 no console
}

for( let i =0; i <= 5; i++){
  console.log(i) // Retorna de 0 a 5 no console
}

for (let i = 0; i <= 10; i++) {
  console.log(i); // retorna de 0 a 10
}

for (let i = 10; i >= 1; i--) {
  console.log(i); // retorna de 10 a 0
}

for (let i = 2; i <= 12; i += 2) {
  console.log(i); // retorna numeros pares até 12
}

for (let i = 1; i <= 13; i += 2) {
  console.log(i); // retorna numeros ímpares de 1 ate 13
}

for (let i = 10; i <= 100; i += 10) {
  console.log(i); // retorna numeros de 10 em 10
}

for(let i = 0; i < 10; i++){
  console.log(i) // Retorna de 0 a 9 no console
  if(i === 7){ // Use o break para sair de um laçoantes da expressao da condição ser false
    break
  }
}

//Loop/array
let cores = ["rosa", "azul", "branco", "verde", "roxo"];

for (let item = 0; item < cores.length; item++) {
  console.log(cores[item]);
}// Retorna todos os itens de cores;

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
}
//while = verifica primeiro e executa depois

let i = 0;
while(i <= 10){
  console.log(i)
  i++
}

// do while = executa primeiro e verifica depois
let contador = 0;
do{
  console.log(`Contando! ${contador}`)
  contador++;
} while(contador < 3)

