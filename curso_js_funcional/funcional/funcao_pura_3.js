//Uma Função pura é uma função em que o valor
//de retorno é determinado Apenas por seus valores
//de entrada, sem efeitos colaterais observaveis

let qteDeExecucoes  = 0 

// Pura!

function somar(a,b){
    qteDeExecucoes++ // efeitos colateais obsrvaveis 
    return a+ b
}

console.log(qteDeExecucoes)
console.log(somar(68,31))
console.log(somar(68,3.1))
console.log(somar(68,310))
console.log(qteDeExecucoes)