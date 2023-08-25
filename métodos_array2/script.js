// métodos de array:
let numeros = [1, 2, 3, 5, 8, 9, 6, 4];
console.log(numeros);

//array.at()
console.log(numeros.at(1)); // 2
// Retorna o item referente ao index dele
//podendo usar valores positivos ou negativos

// lembrando que valores negativos contam apartir
// do iutimo item do array
console.log(numeros.at(-2)); // 6

//array.indexOf(elemento)
console.log(numeros.indexOf(5)); // 3
// retorna a posição do elemento;

//array.includes(elementos)
console.log(numeros.includes(10)); // false "n tenho o numero 10"
// Verifica se um elemento existe;

console.log(numeros.includes(9)); // true
// achou o numero 9

//como achar a posição do numero 9?
console.log(numeros.indexOf(9)); // 5
// ele está no indice 5

//array.map()
//criar um novo array com o resultado da função criada

//O método filter() cria um novo array com todos os '
//elementos que passaram no teste implementado pela função fornecida.
const empresa = ["saldo mês janeiro $500", "saldo mês fevereiro $800", "pagamento funcionarios R$:5000" ]

const valores = empresa.filter(empresa => empresa.includes("saldo"))
console.log(valores)

//usando o filter()
// para encontrar a empresa
const empresas = [
  { nome:'Samsung',valorDeMercado: 50, CEO: 'Kim Hyun Suk', anoDeCriacao: 1938},
  { nome: 'Microsoft',valorDeMercado: 415, CEO: 'Satya Nadella', anoDeCriacao: 1975 },
  { nome: 'Intel',valorDeMercado: 117, CEO:'Brian Krzanich', anoDeCriacao: 1968},
  { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
  { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },
  {nome: 'Apple', valorDeMercado: 845, CEO: 'Tim Cook', anoDeCriacao: 1976}
];

const empresasMaisNovas = empresas.filter(empresas => {
  return empresas.anoDeCriacao > 2000;
})
console.log(empresasMaisNovas)
// Retornou:
//  { nome: 'Facebook',valorDeMercado: 383, CEO:'Mark Zuckerberg', anoDeCriacao: 2004},
// { nome: 'Spotify',valorDeMercado: 30, CEO:'Daniel Ek', anoDeCriacao: 2006  },