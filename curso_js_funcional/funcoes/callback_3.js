// const nums = [1,2,3,4,5,6]

// const double = n => n * 2

// console.log(nums.map(double))

// const names = ['Lucas','rafaela','Julia','Carlos']

// const firstLetters = n => n[0]
// const letters = names.map(firstLetters)
// console.log(names, letters)

//destructing java script reatribuiçao de valores de variaveis sem o auxilio de uma variavel auxiliar
// let a = 1;
// let b = 3;

// [a, b] = [b, a];

// console.log(`novo Valor da variavel A : ${a}`); // 3
// console.log(`novo Valor da variavel B : ${b}`); // 1 




const carrinho =[
    {nome: 'Caneta', qtde: 10,preco:7.99},
    {nome: 'Impressora', qtde: 0,preco:649.50},
    {nome: 'Caderno', qtde: 4,preco:27.10},
    {nome: 'Lapis', qtde: 3,preco:5.82},
    {nome: 'tesoura', qtde: 1,preco:19.20}
]
Array.prototype.meuMap = function(fn) {
    const novoArray = []
    for(let i = 0; i < this.length; i ++) {
        novoArray.push(fn(this[i], i, this));
    }
    return novoArray
} 




const nameObject = novoArray => novoArray.nome
const newValue = item => {
    item.somar = item.qtde*item.preco
    return  `{nome: ${item.nome}, resultado: ${item.somar}} ` 
}

const result = carrinho.map(nameObject)
const result2 = carrinho.map(newValue)
console.log(result)
console.log(result2)



