const sharp = require("./node_modules/sharp");
const compress_images = require("compress-images");
const fs = require("fs")

let path = process.argv[2];
let width = Number(process.argv[3]); // passing to number cause command line receives always strings

console.log(path, width);

function resize(inputPath, outputPath, width) {
  sharp(inputPath)
    .resize({ width })
    .toFile(outputPath, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Imagem Redimensionada com Sucesso!");
        compress(outputPath, "./compressed/")
    }
    });
}

function compress(pathInput, outputPath) {
  
    compress_images(
    pathInput,
    outputPath,
    { compress_force: false, statistic: true, autoupdate: true },
    false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    {
      gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] },
    },
    
    function (error, completed, statistic) {
      console.log("-------------");
      console.log(error);
      console.log(completed);
      console.log(statistic);
      console.log("-------------");

      fs.unlink(pathInput, (err) => {
          if(err){
              console.log(err)
          } else{
              console.log(pathInput, " apagado e imagem compressa com sucesso!")
          }
      })
    }
  );
}

resize(path, "./temp/resized_img.jpg", width);
