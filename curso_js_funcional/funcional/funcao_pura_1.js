// Uma função pura é uma função em que o valor de retorno e determinado APENAS por seu valores  de entada, sem efeitos colaterais observáveis 

//CONST PI = 3.141592

// impura - PI é um valor externo!

function areaCirc(raio){
    return raio * raio * Math.PI // estável
}
//Função pura
const areaCircPura = (raio,pi) => raio * raio * pi 


console.log(areaCircPura(10,3.14))
console.log(areaCirc(10,3.141592))
console.log(areaCirc(10,Math.PI))