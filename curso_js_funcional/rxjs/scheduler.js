const {from,asyncScheduler}  = require('rxjs')
const { observeOn } = require('rxjs/operators')

console.log('Antes ...')

from([1,2,3,4,5,6,7,8,9])
//O padrão e sincrono se caso deseja ser asincrono e so usar  o Observe on passando o asncscheduler como parametro
    // .pipe(observeOn(asyncScheduler))
    .subscribe(console.log)

console.log('Depois ...')