//Conhecido como callback hell ou seja chamando varias vezes

// setTimeout(function () {
//     console.log('Executando callback...')
//     setTimeout(function () {
//         console.log('Executando callback2...')
//         setTimeout(function () {
//             console.log('Executando callback3...')
//         },2000)
//     },2000)
// },2000)

//Usando Promise

const esperarpor = (tempo=2000) =>{
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log('Executando a Promise')
            resolve()
        },tempo)
    })
}

esperarpor(3000)
    .then(esperarpor)
    .then(esperarpor)