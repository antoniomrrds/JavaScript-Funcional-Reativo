const array = [1,2,3,4,5,6,7,8,8,5,49] 
const fb =[]
//adicionando na primeira posição
const result = array.map((n,i)=> fb[array.length-1-i]=n)
console.log(fb)

const  compararNumeros = (a, b) => a - b;
const  compararNumerosMaior = (a, b) => b - a;
 //ordem crescente 
 console.log(fb.sort(compararNumeros))
 //ordem decrescente 
console.log(fb.sort(compararNumerosMaior))
