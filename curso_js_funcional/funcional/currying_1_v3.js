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

function applyValidation(fn){
    return function(value){
        //Lazy Evaluation

        try{

            fn(value)
        }catch(e){
            return {error:e}
        }
    }
}

const forceStandardSize = textWithSizeBetween(4)(255)
const forceProductValidName = forceStandardSize('Produto Nome Inválido!')
const ProductValidName = applyValidation(forceProductValidName)
const p1 ={nome:'A', price:14.99, desc: 0.25}
const p2 ={nome:'AB', price:14.99, desc: 0.25}
console.log(ProductValidName(p1.nome))
console.log(ProductValidName(p2.nome))





