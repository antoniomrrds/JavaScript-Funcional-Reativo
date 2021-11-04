const {Observable} =  require('rxjs')

const obs = Observable.create(Subscriber =>{
    Subscriber.next('RxJS')
    Subscriber.next('é')
    Subscriber.next('Bem')
    Subscriber.next('Poderoso!?!')

    if(Math.random() > 0.5){
        Subscriber.complete()
    }else{
    Subscriber.error('Que Problema?!?')
    }
})

// obs.subscribe(
//     value => console.log(`Valor: ${value}`),
//     error => console.log(`Error: ${error}`),
//     _ => console.log("Fim !!!")
// )
// recebe estas 3 funçoes
obs.subscribe({
    next(value){
        console.log(`Valor: ${value}`)
    },
    complete(){
        console.log('Fim !!!')
    },
    error(error){
        console.log(`Error: ${error}`)
    }

})