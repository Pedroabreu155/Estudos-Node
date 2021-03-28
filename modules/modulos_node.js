let fs = require('fs');

let fileText = "Olá, me chamo Pedro Abreu e estou criando arquivos com nodeJS"

//3 argumentos: nome do arquivo, texto a ser passado, callback function para tratar
fs.writeFile('test.txt', fileText, (error)=>{

    if(error){throw error};

    console.log("File Sucefully Created!")

})

//adicionando textos

let addedText = ", e agora estou adicionando texto!"

fs.appendFile('test.txt', addedText, (error)=>{

    if(error){throw error};

})