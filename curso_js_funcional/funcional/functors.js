// functors são objetos que implementam a  função MAP 
// que também é um "wrapper" de um valor


// ARRAY é um exemplo de FUNCTORS

const nums = [1, 2, 3, 4, 5, 6]

const newNums = nums
    .map(el => el + 10)
    .map(el => el * 2)


console.log(nums, newNums)

function typeSafe(value) {
    return {
        value,
        invalid() {
            return this.value === null || this.value === undefined
        },
        map(fn) {
            if (this.invalid()) {
                return typeSafe(null)
            } else {
                const newValue = fn(this.value)
                return typeSafe(newValue)
            }
        },
        flatMap(fn) {
                return this.map(fn).value
        }
    }
}
const originalText = 'this is a text'
const textChanged = typeSafe(originalText)
    .map(t => t.toUpperCase())
    .map(t => `${t}!!!!`)
    // .map(t => null)
    .flatMap(t => t.split('').join(' '))

    console.log(originalText,textChanged)