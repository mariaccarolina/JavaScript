//Um objeto possui propriedades e métodos qque podem se diretos ou herdados (protótipo).

const menu = {
  seletor: "principal"
}

console.log(menu.seletor.toUpperCase())//PRINCIPAL

function upperNome(name){
  return name.toUpperCase()
}

console.log(upperNome("Carol"))