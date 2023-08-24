// Em javascript existem alguns métodos que facilitam o trabalho com arrays;

let compras = ["macarrão", "arroz", "filé de frango", "biscoitos", "queijo"]
console.log(compras)

// compras.push("carne patinho") // Adiciona o item no final do array
// compras.unshift("miojo") // Adiciona o item no inicio do array
// compras.pop() // Remove o ultimo item do array
// compras.shift() // Remove o primeiro item do array
// compras.reverse() // Inverte a ordem do array

//slice(inicio, fim)
// let resultado = compras.slice(2) //fatiaria a partir do 2
// let resultado = compras.slice(1,4) // Retorna do indice um até o 3 
// // o indice 4 ele para e não mostra
// console.log(resultado) // Não desmonta o array original


// O splice()método adiciona/remove/substitui elementos do array.
//array.splice(indice, delete,element)

// O splice()método modifica o array original.
// compras.splice(1,1) // deletou o arroz
// compras.splice(1, 2, "chocolate", "batata") // deletou iniciando do 1/ apagando 3 itens


// const removido = compras.pop()// Para vizualizar qual item eu removi
// console.log(removido)

// let numeros = [3, 5, 7, 6, 1, 2, 3, 8, 9, 4];
// console.log(numeros.sort()) // ordena o array em ordem crescente ou alfabetica


// const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// console.log(estudantes.sort()) //Ordenou em ordem alfabética;

//

//como saber qual posição(index) de um item no array?
//usando o indexOf()
// console.log(compras.indexOf("arroz")) // Retorna a posição do elemento no array
