function generateNumbers(){
    return{
        start(fn,interval = 1000){
            let num = 0;
            const i = setInterval(() =>{
                fn(num++)
            },interval)
            
            return{
                stop(){
                    clearInterval(i)
                }
            }
        }
    }
}

const temp1 = generateNumbers()
const exec1 = temp1.start( number =>{
    console.log(`#1.1: ${number * 2}`)
},1000)


const exec2 = temp1.start( a => {
    console.log(`#2.2: ${a + 100}`)
},1000)

setTimeout(() =>{
        exec1.stop()
},10000)
setTimeout(() =>{
        exec2.stop()
},12000)
