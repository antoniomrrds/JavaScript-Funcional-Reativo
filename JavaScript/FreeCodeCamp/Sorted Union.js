function uniteUnique(...arr) {
    const copyArrayUnique = arr.flat(Infinity)
    const concatFirstElements = []
    const arrayconcat = copyArrayUnique.filter(el => {
        if (!concatFirstElements.includes(el)) return concatFirstElements.push(el)
    })
    return arrayconcat;
}
const result = uniteUnique([[1, 3, 2], [5, 2, 1, 4], [2, 1]]);
console.log(result)