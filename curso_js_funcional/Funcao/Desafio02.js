const carrinho =[
    {nome: 'Caneta', qtde: 10,preco:7.99  ,fragil:true} ,
    {nome: 'Impressora', qtde: 1,preco:649.50  ,fragil:true} ,
    {nome: 'Caderno', qtde: 4,preco:27.10  ,fragil:false} ,
    {nome: 'Lapis', qtde: 3,preco:5.82  ,fragil:false} ,
    {nome: 'tesoura', qtde: 1,preco:19.2  ,fragil:true }
]
//1.fragil: true

const getFragil = (el) => el.fragil;
const resultFragil = carrinho.filter(getFragil)
console.log(resultFragil)

//2. qtde: 4 , preco: 27,10 -> total

// const getValor = (el) => `qtde: ${el.qtde} preco: ${el.preco}`;
// const resultValor = carrinho.map(getValor);
// console.log(resultValor)

const getTotal = el => el.qtde*el.preco
const resultGetTotal = carrinho.map(getTotal)
console.log(resultGetTotal)
//3. Media totais 
const getTotalMedia = (acc,el) => {
    const novaQtde = acc.qtde + 1
    const novoTotal = acc.total + el
    return{
        qtde: novaQtde,
        total:novoTotal,
        Media: novoTotal/novaQtde
    }
}

const resultMedia = carrinho
    .filter(getFragil)
    .map(getTotal)
    .reduce(getTotalMedia,{qtde: 0, total : 0, Media: 0 })
    
console.log(resultMedia)