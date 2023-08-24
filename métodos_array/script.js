// Em javascript existem alguns métodos que facilitam o trabalho com arrays;

let lista = [1, 2, 3, 4, 5, 6];
console.log(lista);
console.log(lista.length); 
// 3 Retorna o número de itens no array

lista.push(4); 
// Adicionou 4 ao final do array

lista.unshift(0); 
// Adicionou o 0 ao inicio do array

lista.pop();
 // Remover o ultimo item do array

lista.shift(); 
// Remove o primeiro item do array

// lista.slice(2, 4); //.slice(inicio, fim)
let teste = lista.slice(0, 4);
console.log(teste); 
// Retorna [1,2,3,4]

console.log(lista.join("-"));
 // Retorna 1-2-3-4-5-6

// Exibi todo meu array com o que colocar dentro do join
console.log(lista.join("_"));
 // Retorna 1_2_3_4_5_6

 console.log(lista.join(" * "))
let centenas = [
    31,
    7,
    122,
    642,
    1002,
    300000,
    656,
    789,
    999,
    454,
    565,
    1,
    2,
    3
  ];
  // console.log(centenas.sort());
  console.log( 
    centenas.sort(function (a, b) {
      return a - b;
    })
  );
  console.log(typeof centenas);
// // ordena o array em ordem crescente ou alfabetica

let compras = ["macarrão", "arroz", "filé de frango", "biscoitos", "queijo"]
console.log(compras)

compras.push("carne patinho")
 // Adiciona o item no final do array

compras.unshift("miojo")
 // Adiciona o item no inicio do array

compras.pop()
 // Remove o ultimo item do array

compras.shift()
 // Remove o primeiro item do array

compras.reverse() 
// Inverte a ordem do array

//slice(inicio, fim)
let resultado = compras.slice(2) 
//fatiaria a partir do 2

// let resultado = compras.slice(1,4) 
// Retorna do indice um até o 3 
// // o indice 4 ele para e não mostra
// console.log(resultado) 
// Não desmonta o array original


// O splice()método adiciona/remove/substitui elementos do array.
//array.splice(indice, delete,element)

// O splice()método modifica o array original.
// compras.splice(1,1) // deletou o arroz
// compras.splice(1, 2, "chocolate", "batata") // deletou iniciando do 1/ apagando 3 itens


// const removido = compras.pop()// Para vizualizar qual item eu removi
// console.log(removido)


//como saber qual posição(index) de um item no array?
//usando o indexOf()
// console.log(compras.indexOf("arroz")) // Retorna a posição do elemento no array
