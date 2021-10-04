function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
const result = sum(1)(22)(3)

console.log(result)