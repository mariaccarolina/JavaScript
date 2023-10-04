function logParams(a, b, c){
  console.log(a, b, c)
}

logParams(1, 2, 3,4, 5)// 1 2 3 => Ele vai ignorar os argumentos passamos a mais
logParams(1, 2, 3)// 1 2 3
logParams(1, 2)// 1 2 undefined => 

//podemos passar argumentos padrões para não termos 
// resultado undefined

function logParams1(a = 1, b = 2, c = 3){
  console.log(a, b, c)
}
logParams1("a")// a 2 3
logParams1()// 1 2 3

//para pegarmos mais valores além dos argumentos que passamos
//podemos usar o rest (tem uma pasta especifica aqui a respeito)


function comJesusTemos(...tudo){
  console.log(tudo)
}

comJesusTemos("paz", "felicidade", "tranquilidade", "fé", "amor", "tudoooooo!")

