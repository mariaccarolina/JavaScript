// array [] (colchetes)
//um conjunto de dados em uma unica variavel chamada de array
// ex:         0  1  2
// let numeros = [1, 2, 3];
// console.log(numeros);
// console.log(numeros[1]);

// objeto {} (chaves)
// é coleção de dados, de propriedade
// nome(chave): valor;
//ex:
// let aluno = {
//   nome: "José",
//   idade: 19,
//   situação: "recuperação",
//   aprovado: "em andamento"
// };
// console.log(aluno); // Retorna todo objeto
// console.log(aluno.situação); // Retorna o valor da propriedade / recuperação

//array de objetos:
let cadastro = [
    {
      nome: "Fábio",
      idade: 28,
      gostoMusical: ["rock", "pop", "samba"]
    },
    {
      nome: "Camilla",
      idade: 17,
      gostoMusical: ["sertanejo", "pagode", "forró"]
    }
  ];
  
  console.log(`${cadastro[1].nome} gosta de ${cadastro[1].gostoMusical[0]}`);
  
  cadastro.push({
    nome: "Carol",
    idade: 29,
    gostoMusical: ["rock", "pop", "gospel", "sertanejo"]
  });
  
  console.log(cadastro);
  
  //function
  //um conjunto de instruções que agrupa uma tarefa
  // bloco de código que pode ser executado e reutilizado
  
  // estrutura de uma função:
  
  // function nomeDaFunçao(parâmetros) {
  //   codigo a ser executado
  //   return saida;
  // }
  
  // nomeDaFunçao(argumentos)
  
  function info() {
    console.log("Boa tarde T2!");
    console.log("Estamos com sono!");
  }
  info();
  
  // também podemos utilizar variáveis como valor dos nossos parâmetros
  // parametros são as entradas de dados, onde iremos armazenar um valor
  const informacao = function (nome, idade, cidade) {
    console.log(nome, idade, cidade);
  };
  //          argumentos
  informacao("Carol", 29, "Ribeirão");
  informacao("Renato", 18, "Rio de Janeiro");
  
  // return captura o codigo executado
  function soma(n1, n2) {
    return n1 + n2;
  }
  
  console.log(soma(5, 5));
  console.log(soma(8, 8));
  
  function menos(valor1, valor2) {
    let a = valor1;
    let b = valor2;
    let total = a - b;
    return total;
  }
  
  console.log(menos(7, 7));
  
  let nome = "Rafael";
  
  function mostrarNome(nomeRecebido) {
    return `O nome dele é ${nomeRecebido}`;
  }
  console.log(mostrarNome(nome));
  