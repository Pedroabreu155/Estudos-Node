const sharp = require('./node_modules/sharp')


let path = process.argv[2]
let width = Number(process.argv[3]) // passing to number cause command line receives always strings

console.log(path, width)

function resize(inputPath,outputPath, width){


    sharp(inputPath).resize({width}).toFile(outputPath, (err) => {
        if (err){
            console.log(err)
        } else{
            console.log("Imagem Redimensionada com Sucesso!")
        }
    })


}

function compress(pathInput, outputPath){

}

resize(path, './temp/resized_img.jpg', width)