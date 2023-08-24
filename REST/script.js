//Rest (...)
//Permite capturar argumentos na forma de um array


// funções usando parametros REST
function someValores(...valores) {
  let tamanho = valores.length;
  let total  = 0;
  for(let i = 0; i < tamanho; i++) {
    total += valores[i]
  }
  return total
}

console.log(someValores(10, 10,10))

function argumento(valor, ...outrosValores) {
  return {
    valor,
    outrosValores
  }
}

console.log(argumento("oi", "tudo bem?", "hi"))