// Os dois tipos...

//1. operadores de Criação

const {from} = require('rxjs')

// 2.  Operadores Encadeaveis (pipeable Op.)
const {last,map} = require('rxjs/operators')
from([1,2,'ana',false,'ultimo'])
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
)
.subscribe(console.log)
