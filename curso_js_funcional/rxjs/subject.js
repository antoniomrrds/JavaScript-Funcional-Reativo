const { Observable,Subject} = require('rxjs')


//No Observable ele executa o numero de vez que e chamdado e execua o numero de vezes que e chamado '
function getObservable(){
    return new Observable(subscriber => {
        setTimeout(() =>{
            console.log('#1 Obs ...')
            subscriber.next(Math.random())
        },1000)
    })
}


const obs= getObservable()

obs.subscribe(console.log)
obs.subscribe(console.log)


// o subject e execcutado uma vez e replicado o numero de vezes
function getSubject(){
    const sub = new Subject()
    setTimeout(() =>{
        console.log('#2 Subject ..')
        sub.next(Math.random())
        sub.complete()
    })
    return sub
}

const sub =  getSubject()

sub.subscribe(console.log)
sub.subscribe(console.log)