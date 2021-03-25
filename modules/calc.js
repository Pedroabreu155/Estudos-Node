//exportando dessa forma somente o ultimo é reconhecido
// no require


//É necessário criar um objeto

let calc = {
    multiply: (x, y) => {
        return x * y
    },

    sum: (x, y) => {
        return x + y
    }
}

module.exports =  calc;