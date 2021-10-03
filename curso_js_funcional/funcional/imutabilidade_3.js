const pessoa =Object.freeze({
    nome:'Maria',
    altura:1.76,
    cidade: 'São Paulo',
    end:Object.freeze({
        rua: "Feliz!"
    })
})
//Atribuição por referência
const outraPessoa = pessoa 

//passagem ´por referenica(Função impura!)

function alteraPessoa(pessoa){
    const novaPessoa = { ...pessoa}
    novaPessoa.nome =  'João'
    novaPessoa.cidade = 'Fortaleza'
    novaPessoa.end.rua =  'caetes'
    return novaPessoa
}

alteraPessoa(pessoa)
console.log(pessoa)

let a = 3
let b = a //atribuição por valor(copia!)

a++
b ---
console.log(a,b)
