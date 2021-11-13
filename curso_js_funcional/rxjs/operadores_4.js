const {from, Observable} = require('rxjs')

function first(){
    return function(source){
        return Observable.create(subscriber =>{
            source.subscribe({
                next(v){
                    subscriber.next(v)
                    subscriber.complete()
                }
            })
        })
    }
}


function none(){
    return function(source){
        return Observable.create(subscriber =>{
            source.subscribe({
                next(v){
                    subscriber.complete()
                }
            })
        })
    }
}



function last(){
    
    return function(source){
       
        return Observable.create(subscriber =>{
            let contLast
            source.subscribe({
                next(v){
                   contLast = v
                   
                },
                complete(){
                    if(contLast !== undefined){

                        subscriber.next(contLast)
                    }
                    subscriber.complete()
                }
            })
        })
    }
}



from([1,2,3,4,5])

    .pipe(
        // none(),
        last(),
        // first() 
    )  
    .subscribe(console.log)