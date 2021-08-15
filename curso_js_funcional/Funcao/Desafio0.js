// calcular(4)(7)(fn)

const sum = (number, number2) => console.log(number + number2)
const division = (number, number2) => console.log(number / number2)
const multiplication = (number, number2) => console.log(number * number2)
const difference = (number, number2) => console.log(number - number2)

const calculate = (number) => (number2) => (fn) => fn(number, number2)

calculate(3)(4)(sum)
calculate(3)(4)(division)
calculate(3)(4)(multiplication)
calculate(3)(4)(difference)