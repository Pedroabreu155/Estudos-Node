const sharp = require('./node_modules/sharp')


let path = process.argv[2]
let width = Number(process.argv[3]) // passing to number cause command line receives always strings

console.log(path, width)

function resize(path, width){


    sharp(path).resize({width}).toFile('./temp/resized_img.jpg', (err) => {
        if (err){
            console.log(err)
        } else{
            console.log("Imagem Redimensionada com Sucesso!")
        }
    })


}

resize(path, width)