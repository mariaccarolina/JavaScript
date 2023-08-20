for(let i = 0; i < 10; i++){
  console.log(i) // Retorna de 0 a 9 no console
}

for( let i =0; i <= 5; i++){
  console.log(i) // Retorna de 0 a 5 no console
}

for(let i = 0; i < 10; i++){
  console.log(i) // Retorna de 0 a 9 no console
  if(i === 7){ // Use o break para sair de um laçoantes da expressao da condição ser false
    break
  }
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

