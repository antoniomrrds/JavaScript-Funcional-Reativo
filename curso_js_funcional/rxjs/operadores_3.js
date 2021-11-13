const { Observable } = require('rxjs')

function elementsWithDelay(time , ...elements){
    return Observable.create(subscriber =>{
        (elements || []).forEach((el,i)=>{
            setTimeout(()=>{
                subscriber.next(el)
                if(elements.length === i+1){
                    subscriber.complete()
                }
            },time *(i+1))
        })
    })
}

elementsWithDelay(2000,1,2,3,4,5,6)
    .subscribe(console.log)