let base = 5
let heigh = 7

// funcion para retornar area 
function trianguloArea(base, heigh) {
    return base * heigh / 2
}

//arrow function, para simplificar una funcion
const trianguloArea = (base, heigh) => base * heigh / 2


const cuadradoArea = (lado1, lado2) => lado1 * lado2 

const pi = 3.1416
const circuloArea = (radio) => pi * radio ** 2


console.log(`el area de u triangulo es: ${trianguloArea(base, heigh)}`)