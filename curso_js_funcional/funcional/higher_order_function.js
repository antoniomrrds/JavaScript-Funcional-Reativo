//Funções que operam em outras Funções 
// Tomando-as como argumentos ou retornando-as,
// São chamadas de higher-order functions.

function executar(fn, ...params) {
    return function (TextoInicial) {
        return `${TextoInicial}${fn(...params)}`
    }

}

function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b;
}

const r1 = executar(somar, 4, 5, 6)('O resultado da soma :  ')
const r2 = executar(multi, 40, 50)('O Resultado da multiplicação : ')

console.log(r1)
console.log(r2)