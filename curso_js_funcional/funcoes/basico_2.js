
function bomDia(){
    console.log('Bom Dia!')
}

const bomTarde = () => {
    console.log('Bom tarde!')
}

//Passar uma como parametro para outra funçaõ
function executarQualquerCoisa(fn){
    if(typeof fn == 'function'){
        fn()
    }
    //fn()
}

executarQualquerCoisa(3)
executarQualquerCoisa(bomDia)
executarQualquerCoisa(bomTarde)


//2) Retornar uma função a partir de uma outra função

function potencia(base){
    return function(expoente){
        return Math.pow(base,expoente)
    }

}
const potenciaDe2 = potencia(2)

console.log(potenciaDe2(4))
//Sem usar armazenamento de funcao indo direto para a função desta forma abaixo 
console.log(potencia(3)(4))