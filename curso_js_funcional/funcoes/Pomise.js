let a = 1
console.log(a)

let p = new Promise(function(resolve){
    resolve(['Ana','Bia','Carlos','Daniel'])
})

console.log(p)
const primeiroElemento = arrayOuString => arrayOuString[0]
const primeiraLetra = string => string[0]
const letraMinuscula = letra => letra.toLowerCase()


p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)