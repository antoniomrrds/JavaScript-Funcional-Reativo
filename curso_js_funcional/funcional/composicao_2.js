
function composicao(...fns) {
    return function (valor) {
        return fns.reduce(async (acc, fn) => {
            if (Promise.resolve(acc) === acc) {
                return fn(await acc)
            } else {
                return fn(acc)
            }
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto} !!!`
}

function tornarLento(texto) {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(texto.split('').join(' '))

        }, 3000)
    })
}

const Exaggerated = composicao(
    gritar,
    enfatizar,
    tornarLento
)

const littleExaggerated = composicao(
    gritar,
    enfatizar
)
Exaggerated('Para')
    .then(console.log)

littleExaggerated('Cudidado com o Burraco')
    .then(console.log)

