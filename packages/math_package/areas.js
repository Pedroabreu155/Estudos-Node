module.exports.squareArea = function square(side){
    return side * side
}

//Testing
//console.log(this.squareArea())

module.exports.rectangleArea = function rectangle(base, height){
    return base * height
}

//Testing
// console.log(this.rectangleArea(4, 5))

module.exports.triangleArea = function triangle(base, height){
    return (base * height) / 2
}

//Testing
// console.log(this.triangleArea(4, 5))

module.exports.circleArea = function circle(radius){
    const pi = 3.14
    return pi * radius * radius
}

//Testing
// console.log(this.triangleArea(4, 5))