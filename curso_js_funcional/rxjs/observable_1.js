const { Observable } = require('rxjs')

const promise = new Promise(resolve =>{
    resolve('Promise é bem legal')
})

promise.then(console.log)


// usando o observer voce pode chamar inumeras vezes 
//ja promise resolve uma vezes
//por isso o nome stream de dados
const obs = new Observable(Subscriber => {
    Subscriber.next('Observer')
    Subscriber.next('é')
    Subscriber.next('bem')
    setTimeout(() => {

        Subscriber.next('legal !')
        Subscriber.complete()
    },1000)

})

obs.subscribe(console.log)
obs.subscribe(text => console.log(text.split('').join(' ')))