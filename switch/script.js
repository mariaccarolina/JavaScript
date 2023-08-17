console.log("Boa tarde T2"); //exibindo msg no console;

// Declarando variaveis var, let e const
//variaveis são onde armazenamos os dados

//criando nomes de variaveis:
// não podemos usar numeros e caracteres exceto _ e $
// nao usamos palavras com espaços
// podemos usar o camelCase
// Não fazer uso de palavras reservadas do JS
// case sensitive  letras minusculas são # de maiusculas camelCase é # de camecase

//variaveis podem ser recriadas, significando que podemos
// atribuir um novo valor, sem erro.
//variavel + nome da variavel + = + valor;
var cor = "Verde";
var cor = "Rosa";
cor = "Branco";
console.log(cor);

// let é variavel preferida dos programadores e tbm
// conseguimos reatruir valor
let alunoDaT2 = "Daniel";
alunoDaT2 = "João Edu";
alunoDaT2 = "Ester";
console.log(alunoDaT2);

//Constante não pode ser alterada;
const menorIdade = true;
console.log(typeof menorIdade);

//typeof verifica e retorna o tipo de dado;

//tipos de dados:

//string sao dados textuais
let redeSocial = "Minha rede social é @carolinademy ";
console.log(redeSocial);

//boolean retorna verdadeiro (true) falso (false)
// const menorIdade = true;
// console.log(typeof menorIdade);

//null - nulo
let type = null;
console.log(type);

// undefined - indefinido
// não foi definido um valor para a variavel;
let saldoBancario;
console.log(saldoBancario);

//NaN o dado não é um numero
let teste = "cem" * 2;
console.log(teste); //NaN

// Number - numerico
let nota1 = 10;
let nota2 = 8;
console.log(nota1 + nota2);
//podemos usar operadores aritmetico: +, -,*, / %

//TemplateString `${}` dentro de crase ``
let facilitador1 = "Grazy";
let facilitador2 = "Kleber";
console.log(
  `Meus facilitadores maravilhosos são ${facilitador1} e ${facilitador2}`
);
