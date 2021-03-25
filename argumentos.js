//Utilizando os valores passados pelo terminal

let args = process.argv.slice(2)

//importando função de outro módulo

let calc = require("./modules/calc")

//exevutando a tarefa
let a = Number(args[1])
let b = Number(args[2])

let c = ""

if(args[0] == "s"){
    c = calc.sum(a, b)
} else if(args[0] == "m"){
    c = calc.multiply(a, b)
} else{
    c = "Erro, opção inválida"
}


console.log(c)

