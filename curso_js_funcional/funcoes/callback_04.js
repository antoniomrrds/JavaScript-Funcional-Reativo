const carrinho =[
    {nome: 'Caneta', qtde: 10,preco:7.99},
    {nome: 'Impressora', qtde: 0,preco:649.50},
    {nome: 'Caderno', qtde: 4,preco:27.10},
    {nome: 'Lapis', qtde: 3,preco:5.82},
    {nome: 'tesoura', qtde: 1,preco:19.20}
]

const qtdeMaiorQueZero =  item => item.qtde > 0

const getnome = nome => nome.nome

const nomeitensValido = carrinho
    .filter(qtdeMaiorQueZero)
    .map(getnome)

    console.log(nomeitensValido)

Array.prototype.myFilter = function(fn){
    const novoArray  =[];
    for(let i = 0; i< this.length;i++){
        if(fn(this[i],i,this)){
            novoArray.push(this[i])
        }
    }

    return novoArray;
} 
const nomeitensValido2 = carrinho
    .myFilter(qtdeMaiorQueZero)
    .map(getnome)

    console.log("My filter: "+nomeitensValido2)