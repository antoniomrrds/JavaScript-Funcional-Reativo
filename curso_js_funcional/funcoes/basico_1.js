let a = 4
console.log(a)
// Function Declaration
function bomDia() {
    console.log('Bom Dia!')
}

bomDia()

//Function  expression

const boaTarde = function () {
    console.log('Boa tarde!')
}

boaTarde() // undefined

function somar(a = 0, b = 0) {
    return a + b
}

let result = somar(3, 4, 7, 8)
console.log(result)

result = somar(3)//NaN se estiver so um parametro
console.log(result)