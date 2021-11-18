const { from, Observable } = require('rxjs')

function createPipeableOperator(oprearatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = oprearatorFn(subscriber)
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete()),
            })
        })
    }

}

function first() {
    return createPipeableOperator(subscriber => ({
        next(value) {
            subscriber.next(value)
            subscriber.complete()
        }
    }))
}


function none() {
    return createPipeableOperator(subscriber => ({
        next(v) {
           
            subscriber.complete()
        }
    }))
    
}



function last() {
let lastNumber;
    return createPipeableOperator(subscriber => ({
        next(v) {
            lastNumber = v

        },
        complete() {
            if (lastNumber !== undefined) {

                subscriber.next(lastNumber)
            }
            subscriber.complete()
        }
    }))
}



from([1, 2, 3, 4, 5])

    .pipe(
        // none(),
        // last(),
        first()
    )
    .subscribe(console.log)