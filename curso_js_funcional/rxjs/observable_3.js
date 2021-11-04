const { Observable,noop } = require('rxjs')
const inBetween = function(min, max)  {
    return new Observable(Subscriber => {
        if (min > max) [min, max] = [max, min]
        for (let index = min; index <= max; index++) {
        
            Subscriber.next(index)
        }
        Subscriber.complete()
    })
}
inBetween(4,10).subscribe(
    num => console.log(`num = ${num}`),
    noop,
    () => console.log('\nFim in between !!! \n')
)


//Forma do leonardo leitao 

const entre = function(min, max,choice)  {
    return new Observable(Subscriber => {
        const selection =  (choice === 'maximum')? Array(max-min +1) : Array(max-min)
           selection.fill().map((_,i)=>{ 
            Subscriber.next(min +i)
        })
        Subscriber.complete()
    })
}
entre(4,10).subscribe(
    num => console.log(`num = ${num}`),
    noop,
    () => console.log('\nFim do End !!! \n')
)