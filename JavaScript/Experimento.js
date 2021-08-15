function esperarPor(tempo){
    const futuro = Date.now() + tempo
    while(Date.now < futuro){} 
}
// O setInterval =  e uma funçao que nunca finalliza sempre chamando de acordo com o tempo passado pra ela
setInterval(() => console.log('Exec #01'), 400);
setTimeout(() => {
     esperarPor(3000)
     console.log('Exec #02')
},300);
esperarPor(5000)
console.log('Fim!')