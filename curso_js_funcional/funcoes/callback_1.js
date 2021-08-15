const exec = (fn,a,b) => fn(a,b)

const sumNoterminal=(a,b) => console.log(a+b)
const diferenceNoterminal=(a,b) => console.log(a-b)


exec(sumNoterminal,56,38)
exec(diferenceNoterminal,182,27)

const cb  = () => console.log('Exec...')

setInterval(cb,1000)