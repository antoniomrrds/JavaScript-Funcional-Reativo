//arrow function

const night = () =>console.log('Boa noite')
night()

const saudacao =(nome) => "Fala " + nome +"!!!"

console.log(saudacao("Maria"))

const somar = (...numbers) =>{
    console.log(Array.isArray(numbers))
    let total = 0
    for(let n of numbers){
        total += n
    }
    return total
}


let numbers = [1,5,4,68,10]

console.log(somar(numbers))
console.log(somar(1,5,4,6))
console.log(somar(1,2,3,5,0,4,10))

//funcao normal
// function potencia(base){
//     return function(expoente){
//         return Math.pow(base,expoente)
//     }

// }

//com arrow function

const potencia = base => expoente => Math.pow(base,expoente) 
console.log(potencia(2)(2))
console.log(potencia(2)(8))

//this 

//Criando funcoes dentro de um prototypo  de Array
Array.prototype.log= function() {  console.log(this)}
Array.prototype.last= function() {  console.log(this[this.length - 1])}

const numeros = [1,2,3,121]
numeros.log()
numeros.last()
