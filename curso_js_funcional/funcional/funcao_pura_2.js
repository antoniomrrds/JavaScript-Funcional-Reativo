//Uma funçaõ pura é uam funçao em que o valor 
//de retorno é determinado APENAS por seus valores
//deentrada, sem efeitos colaterais observaveis

// Função Impura

const gerarNumeroAleatorio = (min,max) =>{
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1,1000))
console.log(gerarNumeroAleatorio(1,1000))
console.log(gerarNumeroAleatorio(1,1000))
console.log(gerarNumeroAleatorio(1,1000))
console.log(gerarNumeroAleatorio(1,1000))