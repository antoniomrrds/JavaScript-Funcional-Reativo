//Somar (3) (4) (5)

const Somar  = (number1) =>{
    return function(number2){
        return function(number3){
           return console.log(number1+number2+number3)
        }
    }
}

Somar(3)(4)(5)