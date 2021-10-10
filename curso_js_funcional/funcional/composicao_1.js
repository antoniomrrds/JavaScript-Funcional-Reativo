
function composicao(...fns){
    return  function(valor){
        return fns.reduce((acc, fn) =>{
            return fn(acc)
        },valor)
    }
} 

function gritar(texto){
    return texto.toUpperCase()
}

function enfatizar(texto){
    return `${texto} !!!`
}

function tornarLento(texto){
    return texto.split('').join(' ')
}

const resultado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

const littleExaggerated = composicao(
    gritar,
    enfatizar
)

resultado1 = resultado('Para')
resultado2 = littleExaggerated('Cudidado com o Burraco')
console.log(resultado1)
console.log(resultado2)
