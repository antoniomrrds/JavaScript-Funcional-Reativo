// lembre de uma lado esta o destructing = e outro atribuiçaõ dos valores do Array
const gerarnumeroEntre = (min,max) => {
    if(min > max) [max,min] = [min,max]

    return new Promise(resolve => {
        //Nesta parte esta pegando o valor positivo e o mais 1 e pra entrar o valor atual
        const fator = max - min +1    
        const aleatorio = parseInt(Math.random() * fator)+ min
        resolve(aleatorio)
    }) 
}

gerarnumeroEntre(11, 10)
  .then(num=>num*10)
  .then(numx10 => ` O Número gerado é ${numx10}`)
  .then(console.log)