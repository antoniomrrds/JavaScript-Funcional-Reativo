const {Subject,timer} = require('rxjs')

const obs = timer(3000,500)

const sub1 = obs.subscribe(num =>{
    console.log(`#1 gerou o número ${num}`)
})

const sub2 = obs.subscribe(num =>{
    console.log(`#2 gerou o número  ${num}`)
})


const sub = new Subscription()
sub.add(sub1)
sub.add(sub2)
//voce pode para um ligado outro com metodO add
// sub1.add(sub2)

//depois de 1000 unsubscribe
setTimeout(_=> {
    // sub1.unsubscribe()
    // sub2.unsubscribe()
    sub.unsubscribe()

},10000)