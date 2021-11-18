// funcao imperativa
function factor(n) {
    let sum = 1
    for (let i = 1; i <= n; i++) {

        console.log(sum *= i)
    }

    return sum

}
console.log(factor(5))
// funcao recursiva
function factor2(n) {
    if (n == 0) {
        return 1
    } else {

        return n * factor2(n - 1)
    }
}
console.log(factor2(1))
// forma funcional 
const factor3 = (n=null) =>(n==0 || n== null)?1: Array(n + 1).fill().reduce((acc=1, el, index,arr) => acc*=index)

console.log(factor3())