function textWithSizeBetween(min) {
    return function (max) {
        return function (erro) {
            return function (text) {
                // Lazy Evaluation 
                const size = (text || '').trim().length
                if(size < min || aize > max){
                    throw erro
                }
            }
        }
    }
}

const forceStandardSize = textWithSizeBetween(4)(255)
const forceProductValidName = forceStandardSize('Produto Nome Inválido!')

const p1 ={nome:'A', price:14.99, desc: 0.25}

forceProductValidName(p1.nome)

