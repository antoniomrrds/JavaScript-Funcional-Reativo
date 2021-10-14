const { interval } = require('rxjs')
//Aqui voce coloca o tempo do intevalo 
const generateNumbers = interval(500)
//aqui adiciona um observado
const sub1 = generateNumbers.subscribe(num => console.log(num**2) )
const sub2 = generateNumbers.subscribe(console.log)


//aqui voce para um processo
setTimeout(() => sub1.unsubscribe(),8000)
setTimeout(() => sub2.unsubscribe(),6000)
