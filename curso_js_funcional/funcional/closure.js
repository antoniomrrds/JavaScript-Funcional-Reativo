// Closure é quando uma  função "lembra"
// seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico 


const somarXmais3 = require('./closure_escopo')  

const x = 1000
console.log(somarXmais3())

