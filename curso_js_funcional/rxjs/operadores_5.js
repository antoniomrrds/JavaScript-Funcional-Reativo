const { of, Observable } = require('rxjs')




function finishedWith(lastword) {

    return function (last) {
        return Observable.create(subscriber => {
            last.subscribe({
                next(v) {
                    const regex = new RegExp(`${lastword}$`, 'gi')
                    if (Array.isArray(v)) {
                        subscriber.next(
                            v.filter(value => value.match(regex))
                        )
                    }
                    if (regex.test(v)) {
                        subscriber.next(v)

                    }

                }, complete() {

                    subscriber.complete()
                }

            })
        })
    }
}



of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])

    .pipe(finishedWith('Silva'))
    .subscribe(console.log)